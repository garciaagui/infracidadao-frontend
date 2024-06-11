import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { SelectFieldProps } from '../utils/types';

export default function SelectField({ label, name, options }: SelectFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  return (
    <FormControl error={errors[name] ? true : false}>
      <InputLabel id={`${name}-select`}>{label}</InputLabel>

      <Select labelId={`${name}-select`} label={label} {...register(name)}>
        {options.map(({ label, value }, index) => {
          return (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}
