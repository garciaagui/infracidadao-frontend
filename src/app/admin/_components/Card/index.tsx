import { CardActionArea, CardContent, Stack, Typography } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { ReactElement, cloneElement } from 'react';
import { Link } from './styles';

type CardProps = {
  href: string;
  icon: ReactElement;
  label: string;
  title: string;
};

export default function Card({ href, icon, label, title }: CardProps) {
  return (
    <MuiCard sx={{ width: 275 }} variant="outlined">
      <CardActionArea>
        <Link href={href}>
          <CardContent>
            <Stack spacing={1}>
              <Stack alignItems="center" direction="row" spacing={1}>
                {cloneElement(icon, { fontSize: 'small' })}
                <h3>{title}</h3>
              </Stack>
              <Typography>{label}</Typography>
            </Stack>
          </CardContent>
        </Link>
      </CardActionArea>
    </MuiCard>
  );
}
