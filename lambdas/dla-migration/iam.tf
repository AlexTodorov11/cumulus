data "aws_iam_policy_document" "dla_migration_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_security_group" "dla_migration" {
  count = length(var.lambda_subnet_ids) == 0 ? 0 : 1

  name   = "${var.prefix}-dla-migration"
  vpc_id = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = var.tags
}

resource "aws_iam_role" "dla_migration_role" {
  name                 = "${var.prefix}-dla-migration"
  assume_role_policy   = data.aws_iam_policy_document.dla_migration_assume_role_policy.json
  permissions_boundary = var.permissions_boundary_arn
  tags                 = var.tags
}

data "aws_iam_policy_document" "dla_migration_policy" {
  statement {
    actions = [
      "ec2:CreateNetworkInterface",
      "ec2:DeleteNetworkInterface",
      "ec2:DescribeNetworkInterfaces",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:DescribeLogStreams",
      "logs:PutLogEvents",
    ]
    resources = ["*"]
  }

  statement {
    actions = [
      "s3:ListBucket*",
    ]
    resources = [ "arn:aws:s3:::${var.system_bucket}"]
  }

  statement {
    actions = [
      "s3:GetObject*",
      "s3:PutObject*",
    ]
    resources = [ "arn:aws:s3:::${var.system_bucket}/*"]
  }
}

resource "aws_iam_role_policy" "dla_migration" {
  name   = "${var.prefix}_dla_migration"
  role   = aws_iam_role.dla_migration_role.id
  policy = data.aws_iam_policy_document.dla_migration_policy.json
}
