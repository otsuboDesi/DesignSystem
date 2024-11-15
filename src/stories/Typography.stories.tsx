import type { Meta, StoryObj } from '@storybook/react';
import {
  ITypographyVariant,
  Typography,
  TypographyProps,
} from '../components/designTokens/Typography';

interface LabelProps {
  fontTypeText: string;
  fontSizeText: string;
  text: string;
}

interface TypographyBoxProps
  extends Partial<Omit<TypographyProps, 'children'>>,
    LabelProps {
  variant: ITypographyVariant;
}

const TypographyBox = ({
  variant,
  fontTypeText,
  fontSizeText,
  text,
}: TypographyBoxProps) => {
  return (
    <div className="flex flex-col gap-12">
      <Typography variant="body-lg-bold" color="default">
        {fontTypeText}
      </Typography>
      <div className="flex gap-8 items-center">
        <div className="max-w-[100px] text-right">
          <Typography variant="label-md" color="default">
            {fontSizeText}
          </Typography>
        </div>
        <Typography variant={variant} color="default">
          {text}
        </Typography>
      </div>
    </div>
  );
};

interface LabelProps {
  fontTypeText: string;
  fontSizeText: string;
  text: string;
}

const meta = {
  title: 'Design Tokens/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
      hideNoControlsWarning: true,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <TypographyBox
        variant="h1"
        fontTypeText="typography/heading/h1"
        fontSizeText="83px (5.93rem) 150% 2%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="h2"
        fontTypeText="typography/heading/h2"
        fontSizeText="67px (4.77rem) 153% 2%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="h3"
        fontTypeText="typography/heading/h3"
        fontSizeText="53px(3.79rem) 150% 1.5%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="h4"
        fontTypeText="typography/heading/h4"
        fontSizeText="43px (3.07rem) 154% 2%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="h5"
        fontTypeText="typography/heading/h5"
        fontSizeText="34px (2.43rem) 168% 2.5%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="h6"
        fontTypeText="typography/heading/h6"
        fontSizeText="22px (1.57rem) 175% 3%"
        text="株式会社デジナーレ"
      />
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <TypographyBox
        variant="body-lg"
        fontTypeText="typography/body/lg"
        fontSizeText="18px (1.29rem) 158% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="body-lg-bold"
        fontTypeText="typography/body/lg/bold"
        fontSizeText="18px (1.29rem) 158% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="body-md"
        fontTypeText="typography/body/md"
        fontSizeText="14px (1.0rem) 174% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="body-md-bold"
        fontTypeText="typography/body/md/bold"
        fontSizeText="14px (1.0rem) 174% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="body-sm"
        fontTypeText="typography/body/sm"
        fontSizeText="11px (0.79rem) 174% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="body-sm-bold"
        fontTypeText="typography/body/sm/bold"
        fontSizeText="11px (0.79rem) 174% 3%"
        text="株式会社デジナーレ"
      />
    </div>
  ),
};

export const Label: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <TypographyBox
        variant="label-lg"
        fontTypeText="typography/label/lg"
        fontSizeText="14px (1.0rem) 174% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="label-md"
        fontTypeText="typography/label/md"
        fontSizeText="11px (0.79rem) 174% 3%"
        text="株式会社デジナーレ"
      />
      <TypographyBox
        variant="label-sm"
        fontTypeText="typography/label/sm"
        fontSizeText="9px (0.64rem) 175% 3%"
        text="株式会社デジナーレ"
      />
    </div>
  ),
};
