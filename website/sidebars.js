// Helper function - create category
const createCategory = (label, items, linkType = 'generated-index', additionalLinkProps = {}, collapsed = false) => ({
  type: 'category',
  label,
  link: {
    type: linkType,
    ...additionalLinkProps,
  },
  collapsed,
  items,
});

// Helper function - create subcategory
const createSubCategory = (label, items, id, collapsed = false) => ({
  type: 'category',
  label,
  link: {
    type: 'doc',
    id,
  },
  collapsed,
  items,
});

const sidebars = {
  docs: [
    createCategory('Getting Started', [
      'cumulus-docs-readme',
      'getting-started',
      'glossary',
      'faqs',
    ]),
    createCategory('About Cumulus', [
      'architecture',
      'interfaces',
      'team',
    ]),
    createCategory('Deployment', [
      'deployment/deployment-readme',
      'deployment/create_bucket',
      'deployment/terraform-best-practices',
      'deployment/components',
      createSubCategory('Databases', [
        'deployment/postgres_database_deployment',
        'deployment/choosing_configuring_rds',
      ], 'deployment/databases-introduction'),
      createSubCategory('APIs', [
        'deployment/thin_egress_app',
        'deployment/cumulus_distribution',
      ], 'deployment/apis-introduction'),
      createCategory('Logs', [
        'deployment/api-gateway-logging',
        'deployment/share-s3-access-logs',
        'deployment/cloudwatch-logs-delivery',
      ]),
      'deployment/upgrade-readme',
    ], 'generated-index', {
      title: 'Cumulus Deployment',
      description: 'Here you are going to learn about how to deploy Cumulus and to setup approved APIs and databases.',
      keywords: ['deployment', 'TEA', 'Cumulus API', 'RDS', 'Postgres'],
    }),
    createCategory('Configuration', [
      'configuration/data-management-types',
      'configuration/monitoring-readme',
      'configuration/server_access_logging',
      'configuration/cloudwatch-retention',
      'configuration/lifecycle-policies',
      'configuration/collection-storage-best-practices',
      'configuration/task-configuration',
    ]),
    createCategory('Development', [
      'workflows/developing-a-cumulus-workflow',
      'workflows/developing-workflow-tasks',
      'workflows/lambda',
      'workflows/docker',
      'workflows/workflow-configuration-how-to',
      'adding-a-task',
    ]),
    createCategory('Workflows', [
      'workflows/workflows-readme',
      'workflows/protocol',
      'workflows/input_output',
      'workflows/workflow-triggers',
      'workflows/message_granule_writes',
      createCategory('Workflow Tasks', [
        'tasks',
        'workflows/cumulus-task-message-flow',
        'workflow_tasks/discover_granules',
        'workflow_tasks/files_to_granules',
        'workflow_tasks/move_granules',
        'workflow_tasks/queue_granules',
        'workflow_tasks/lzards_backup',
        'workflow_tasks/parse_pdr',
      ]),
    ]),
    createCategory('Features', [
      'features/backup_and_restore',
      'features/dead_letter_queues',
      'features/dead_letter_archive',
      'features/execution_payload_retention',
      'features/reports',
      'features/ancillary_metadata',
      'features/distribution-metrics',
      'features/logging-esdis-metrics',
      'features/replay-kinesis-messages',
      'features/replay-archived-sqs-messages',
    ]),
    createCategory('Troubleshooting', [
      'troubleshooting/troubleshooting-readme',
      'troubleshooting/troubleshooting-deployment',
      'troubleshooting/rerunning-workflow-executions',
      'troubleshooting/reindex-elasticsearch',
    ]),
    createCategory('Cumulus Development', [
      'adding-a-task',
      'docs-how-to',
    ]),
    createCategory('Integrator Guide', [
      'integrator-guide/about-int-guide',
      'integrator-guide/int-common-use-cases',
      'integrator-guide/workflow-add-new-lambda',
      'integrator-guide/workflow-ts-failed-step',
    ]),
    createCategory('Upgrade Notes', [
      'upgrade-notes/migrate_tea_standalone',
      'upgrade-notes/upgrade_tf_version_0.13.6',
      'upgrade-notes/upgrade_tf_version_1.5.3',
      'upgrade-notes/upgrade-rds',
      'upgrade-notes/cumulus_distribution_migration',
      'upgrade-notes/update-task-file-schemas',
      'upgrade-notes/update-cma-2.0.2',
      'upgrade-notes/upgrade-rds-phase-3-release',
      'upgrade-notes/rds-phase-3-data-migration-guidance',
      'upgrade-notes/upgrade-rds-cluster-tf-postgres-13',
      'upgrade-notes/update-cumulus_id-type-indexes-CUMULUS-3449',
      'upgrade-notes/upgrade_execution_table_CUMULUS_3320',
      'upgrade-notes/update_table_indexes_CUMULUS_3792',
      'upgrade-notes/serverless-v2-upgrade',
    ]),
    createCategory('External Contributions', [
      'external-contributions/external-contributions',
    ]),
    createCategory('Data Cookbooks', [
      'data-cookbooks/about-cookbooks',
      createCategory('Cookbooks', [
        'data-cookbooks/hello-world',
        'data-cookbooks/ingest-notifications',
        'data-cookbooks/sips-workflow',
        'data-cookbooks/cnm-workflow',
        'data-cookbooks/error-handling',
        'data-cookbooks/choice-states',
        'data-cookbooks/browse-generation',
        'data-cookbooks/tracking-files',
        'data-cookbooks/run-tasks-in-lambda-or-docker',
        'data-cookbooks/throttling-queued-executions',
        'data-cookbooks/queue-post-to-cmr',
      ]),
    ], 'doc', { id: 'data-cookbooks/about-cookbooks' }),
    createCategory('Operator Docs', [
      createCategory('Configuration', [
        'operator-docs/locating-access-logs',
        'configuration/data-management-types',
      ]),
      createCategory('Operations', [
        'operator-docs/discovery-filtering',
        'operator-docs/bulk-operations',
        'operator-docs/cmr-operations',
        'operator-docs/naming-executions',
        'troubleshooting/rerunning-workflow-executions',
        'features/replay-kinesis-messages',
      ]),
      createCategory('Common Use Cases', [
        'operator-docs/ops-common-use-cases',
        'operator-docs/kinesis-stream-for-ingest',
        'operator-docs/create-rule-in-cumulus',
        'operator-docs/granule-workflows',
        'operator-docs/trigger-workflow',
      ]),
    ], 'doc', { id: 'operator-docs/about-operator-docs' }),
  ],
};

module.exports = sidebars;
