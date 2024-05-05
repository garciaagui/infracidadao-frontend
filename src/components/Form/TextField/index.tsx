import * as M from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from '../utils/types';

export default function TextField(props: TextFieldProps) {
  const { name } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  return (
    <M.TextField
      variant="standard"
      error={errors[name] ? true : false}
      helperText={errors[name] && errorMessage}
      {...register(name)}
      {...props}
    />
  );
}
