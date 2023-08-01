import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '71f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '245'),
    routes: [
      {
        path: '/docs/category/background',
        component: ComponentCreator('/docs/category/background', 'f1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/decoupled-execution',
        component: ComponentCreator('/docs/category/decoupled-execution', 'd27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/dilithium-consensus',
        component: ComponentCreator('/docs/category/dilithium-consensus', '441'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/distributed-storage-network',
        component: ComponentCreator('/docs/category/distributed-storage-network', '591'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/domains',
        component: ComponentCreator('/docs/category/domains', 'fa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/network-architecture',
        component: ComponentCreator('/docs/category/network-architecture', 'b8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/proof-of-archival-storage',
        component: ComponentCreator('/docs/category/proof-of-archival-storage', '9bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/archiving',
        component: ComponentCreator('/docs/consensus/consensus/archiving', '9cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/crypto_primitives',
        component: ComponentCreator('/docs/consensus/consensus/crypto_primitives', 'b6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/farming',
        component: ComponentCreator('/docs/consensus/consensus/farming', '93f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/plotting',
        component: ComponentCreator('/docs/consensus/consensus/plotting', '772'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/pos',
        component: ComponentCreator('/docs/consensus/consensus/pos', '893'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/consensus/pot',
        component: ComponentCreator('/docs/consensus/consensus/pot', '09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/data_flow',
        component: ComponentCreator('/docs/consensus/data_flow', 'f6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/genesis',
        component: ComponentCreator('/docs/consensus/genesis', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/overview',
        component: ComponentCreator('/docs/consensus/overview', '905'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/consensus/security',
        component: ComponentCreator('/docs/consensus/security', 'e3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/decex/domains/core_evm',
        component: ComponentCreator('/docs/decex/domains/core_evm', '4f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/decex/domains/overview',
        component: ComponentCreator('/docs/decex/domains/overview', '557'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/decex/domains/taxonomy',
        component: ComponentCreator('/docs/decex/domains/taxonomy', '947'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/decex/domains/workflow',
        component: ComponentCreator('/docs/decex/domains/workflow', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/decex/overview',
        component: ComponentCreator('/docs/decex/overview', 'd45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro/motivation',
        component: ComponentCreator('/docs/intro/motivation', 'd9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro/terminology',
        component: ComponentCreator('/docs/intro/terminology', '6ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/dsn/',
        component: ComponentCreator('/docs/network/dsn/', '17a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/dsn/layers',
        component: ComponentCreator('/docs/network/dsn/layers', '10b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/nodes',
        component: ComponentCreator('/docs/network/nodes', 'cd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview',
        component: ComponentCreator('/docs/overview', '9fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap', '7ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ae5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
