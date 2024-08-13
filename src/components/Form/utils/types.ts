import { SelectProps, StandardTextFieldProps } from '@mui/material';

export type FileFieldProps = {
  label?: string;
  name: string;
};

export type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
} & SelectProps;

export type TextareaProps = {
  name: string;
} & StandardTextFieldProps;

export type TextFieldProps = {
  name: string;
  maxLength?: number;
} & StandardTextFieldProps;
