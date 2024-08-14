import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import SplitFlapDisplay from '../SplitFlapDisplay';
import { ALPHA, NUMERIC, PUNCTUATION } from '../constants';

type SplitFlapDisplayStoryProps = React.ComponentProps<typeof SplitFlapDisplay> & {
  fontFamily?: string;
  fontSize?: string;
};

const meta: Meta<SplitFlapDisplayStoryProps> = {
  title: 'SplitFlapDisplay',
  component: SplitFlapDisplay,
  tags: ['autodocs'],
  parameters: {
    chromatic: { delay: 15000 },
  },
  args: {
    fontSize: '2em',
    fontFamily: 'monospace',
  },
  argTypes: {
    characterSet: {
      required: true,
    },
    fontFamily: {
      description:
        "This is a storybook-only prop, to be passed to the component's parent and inherited by SplitFlagDisplay",
    },
    fontSize: {
      description:
        "This is a storybook-only prop, to be passed to the component's parent and inherited by SplitFlagDisplay",
    },
    value: {
      required: true,
    },
  },
  render: ({ fontFamily, fontSize, ...args }) => (
    <div style={{ fontFamily: fontFamily ?? 'monospace', fontSize: fontSize ?? '2em' }}>
      <SplitFlapDisplay {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Numeric: Story = {
  args: {
    value: '94103',
    characterSet: NUMERIC,
  },
};

export const Alphabet: Story = {
  args: {
    value: 'TRENTON',
    characterSet: ALPHA,
  },
};

export const Alphanumeric: Story = {
  args: {
    value: '1 FERRY BUILDING',
    characterSet: [...ALPHA, ...NUMERIC],
  },
};

export const AlphanumericPunctuation: Story = {
  args: {
    value: 'TRE-SEA: DELAYED!',
    characterSet: [...ALPHA, ...NUMERIC, ...PUNCTUATION],
  },
};
