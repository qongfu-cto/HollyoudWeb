import { FC, ReactNode } from 'react';

export type FilterSectionStylesProps = { vertical: boolean };

export type FilterRenderer = FC<{
  places: any;
  properties: any;
}>;
export type Variants =
  | 'dropdown'
  | 'checkboxes'
  | 'buttons'
  | 'slider'
  | 'selectors';

type WithVariant<V extends Variants, P> = { variant: V } & P;
export type ButtonsFilterSectionProps = {
  buttons: {
    label: string;
    value: string;
    selected?: boolean;
    icon?: ReactNode;
  }[];
};

export interface SelectorProps {
  label: string;
  name: string;
  value?: number;
  min?: number;
  max?: number;
}

export type SelectorsFilterSectionProps = {
  selectors: SelectorProps[];
};
export type SliderFilterSectionProps = {
  unit: string;
  value: [number, number];
  min: number;
  max: number;
};
export type DropdownFilterSectionProps = {
  options: { label: string; value: string }[];
  selected?: string;
};

export interface CheckboxProps {
  name: string;
  label: string;
  value: string;
  selected?: boolean;
}

export type CheckboxesFilterSectionProps = {
  checkboxes: CheckboxProps[];
};

export type FilterSectionProps = {
  variant: Variants;
} & CommonProps &
  (
    | WithVariant<'buttons', ButtonsFilterSectionProps>
    | WithVariant<'selectors', SelectorsFilterSectionProps>
    | WithVariant<'slider', SliderFilterSectionProps>
    | WithVariant<'dropdown', DropdownFilterSectionProps>
    | WithVariant<'checkboxes', CheckboxesFilterSectionProps>
  );

type CommonProps = {
  title: string;
  name: string;
};

export type SpecializedFilterSectionRendererProps<V> = CommonProps &
  (V extends 'buttons'
    ? ButtonsFilterSectionProps
    : V extends 'selectors'
    ? SelectorsFilterSectionProps
    : V extends 'slider'
    ? SliderFilterSectionProps
    : V extends 'dropdown'
    ? DropdownFilterSectionProps
    : CheckboxesFilterSectionProps);

export type FilterSectionRenderProps = CommonProps &
  ButtonsFilterSectionProps &
  SelectorsFilterSectionProps &
  SliderFilterSectionProps &
  DropdownFilterSectionProps &
  CheckboxesFilterSectionProps;

export type FilterSectionRenderer = FC<FilterSectionRenderProps>;
