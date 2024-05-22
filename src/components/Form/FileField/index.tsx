import { UploadSharp } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';
import { FileFieldProps } from '../utils/types';
//
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

const ErrorMessage = styled('p')({
  color: '#E63946',
  fontSize: '0.75rem',
  marginTop: '3px',
});

export default function FileField({ name }: FileFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        color="primary"
        sx={{ width: '100%' }}
        startIcon={<UploadSharp />}
      >
        Adicione uma imagem
        <VisuallyHiddenInput accept="image/*" type="file" {...register(name)} />
      </Button>
      {errors[name] && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
