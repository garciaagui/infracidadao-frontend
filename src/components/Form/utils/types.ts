import { StandardTextFieldProps } from '@mui/material';

export type FileFieldProps = {
  name: string;
};

export type TextareaProps = {
  name: string;
} & StandardTextFieldProps;

export type TextFieldProps = {
  name: string;
  maxLength?: number;
} & StandardTextFieldProps;
