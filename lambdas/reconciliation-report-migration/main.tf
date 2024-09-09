locals {
  lambda_path      = "${path.module}/dist/webpack/lambda.zip"
}

resource "aws_lambda_function" "reconciliation_report_migration" {
  function_name    = "${var.prefix}-reconciliation-report-migration"
  filename         = local.lambda_path
  source_code_hash = filebase64sha256(local.lambda_path)
  handler          = "index.handler"
  role             = aws_iam_role.data_migration1.arn
  runtime          = "nodejs20.x"
  timeout          = lookup(var.lambda_timeouts, "dlaMigration", 900)
  memory_size      = lookup(var.lambda_memory_sizes, "dlaMigration", 512)

  environment {
    variables = {
      databaseCredentialSecretArn = var.rds_user_access_secret_arn
      AsyncOperationsTable = var.dynamo_tables.async_operations.name
      dbHeartBeat = var.rds_connection_heartbeat
      stackName        = var.prefix
    }
  }

  dynamic "vpc_config" {
    for_each = length(var.lambda_subnet_ids) == 0 ? [] : [1]
    content {
      subnet_ids = var.lambda_subnet_ids
      security_group_ids = compact([
        aws_security_group.data_migration1[0].id,
        var.rds_security_group_id
      ])
    }
  }

  tags = var.tags
}
