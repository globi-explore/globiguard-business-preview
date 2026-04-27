import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  businessSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core thesis',
      items: [
        'what-business-globiguard-is-in',
        'what-business-it-should-be-in',
        'final-verdict',
      ],
    },
    {
      type: 'category',
      label: 'Cases and market lessons',
      items: [
        'case-studies',
        'market-outcomes',
        'cuda-analogy',
      ],
    },
    {
      type: 'category',
      label: 'Business model and boundaries',
      items: [
        'business-model-and-sequencing',
        'open-source-boundary',
        'what-not-to-become',
      ],
    },
  ],
};

export default sidebars;
