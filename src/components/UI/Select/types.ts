import type { Props as ReactSelectProps, GroupBase } from 'react-select';

export interface OptionType {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export type SelectProps = ReactSelectProps<OptionType, false, GroupBase<OptionType>>;