import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';
import { FileFieldProps } from '../utils/types';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const MUI_ERROR_INPUT_CLASS =
  'MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium mui-1d1r5q-MuiFormHelperText-root';
const MUI_ERROR_INPUT_ID = ':r0:-helper-text';

export default function FileField({ name }: FileFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  return (
    <>
      <Button component="label" role={undefined} variant="contained" tabIndex={-1} color="primary">
        Adicione uma imagem
        <VisuallyHiddenInput accept="image/*" type="file" {...register(name)} />
      </Button>
      {errors[name] && (
        <p className={MUI_ERROR_INPUT_CLASS} id={MUI_ERROR_INPUT_ID}>
          {errorMessage}
        </p>
      )}
    </>
  );
}
