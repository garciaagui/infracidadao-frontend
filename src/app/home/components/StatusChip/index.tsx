import * as Icons from '@mui/icons-material';
import { Chip } from '@mui/material';
import { StatusType } from '../../utils/types';

type StatusChipProps = {
  size: 'small' | 'medium';
  status: StatusType;
};

const getIcon = (status: StatusType) => {
  if (status === 'Aberto') {
    return <Icons.ErrorOutlineSharp fontSize="small" />;
  } else if (status === 'Andamento') {
    return <Icons.AutorenewSharp fontSize="small" />;
  } else {
    return <Icons.DoneSharp fontSize="small" />;
  }
};

const getColor = (status: StatusType) => {
  if (status === 'Aberto') {
    return 'error';
  } else if (status === 'Andamento') {
    return 'info';
  } else {
    return 'success';
  }
};

export default function StatusChip({ size, status }: StatusChipProps) {
  return <Chip color={getColor(status)} label={status} icon={getIcon(status)} size={size} />;
}
