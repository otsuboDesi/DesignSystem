import classNames from 'classnames';

import { semanticColors } from './colors';

type ITextColor = keyof typeof semanticColors.text;
export type ITypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-lg-bold'
  | 'label-lg'
  | 'body-md-bold'
  | 'label-md'
  | 'body-sm-bold'
  | 'label-sm';

export interface TypographyProps {
  variant: ITypographyVariant;
  children: React.ReactNode;
  color?: ITextColor;
}

const styles: Record<ITypographyVariant, string> = {
  h1: 'text-h1 leading-90 tracking-90 font-medium',
  h2: 'text-h2 leading-80 tracking-80 font-medium',
  h3: 'text-h3 leading-70 tracking-70 font-medium',
  h4: 'text-h4 leading-60 tracking-60 font-medium',
  h5: 'text-h5 leading-50 tracking-50 font-medium',
  h6: 'text-h6 leading-40 tracking-40 font-medium',
  'body-lg': 'text-body-lg leading-30 tracking-30',
  'body-md': 'text-body-md leading-20 tracking-20',
  'body-sm': 'text-body-sm leading-10 tracking-10',
  'body-lg-bold': 'text-body-lg leading-30 tracking-30 font-bold',
  'body-md-bold': 'text-body-md leading-20 tracking-20 font-bold',
  'body-sm-bold': 'text-body-sm leading-10 tracking-10 font-bold',
  'label-lg': 'text-label-lg leading-5 tracking-5',
  'label-md': 'text-label-md leading-5 tracking-5',
  'label-sm': 'text-label-sm leading-5 tracking-5',
};

const colorStyles = {
  default: 'text-text-default',
  subtle: 'text-text-subtle',
  danger: 'text-text-danger',
  success: 'text-text-success',
  primaryAction: 'text-text-primaryAction',
  secondaryAction: 'text-text-secondaryAction',
  dangerAction: 'text-text-dangerAction',
  placeholder: 'text-text-placeholder',
};

export const Typography = ({
  variant,
  children,
  color = 'default',
}: TypographyProps) => {
  return (
    <div className={classNames(styles[variant], colorStyles[color])}>
      {children}
    </div>
  );
};
