import { OccurrenceReplyType } from '@/app/home/utils/types';
import * as I from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import StatusChip from '../../../StatusChip';
import IconChip from '../IconChip';

type ReplyProps = {
  data: OccurrenceReplyType;
};

export default function Reply({ data }: ReplyProps) {
  const { createdAt, description, user, imageUrl, occurrenceStatus } = data;
  return (
    <Stack
      spacing={2}
      sx={{
        border: '1px solid lightgrey',
        borderRadius: '10px',
        padding: '1rem',
        width: '100%',
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconChip icon={<I.CalendarMonthSharp fontSize="small" />} label={createdAt} />
        <IconChip icon={<I.AccountCircleSharp fontSize="small" />} label={user.name} />
        <StatusChip status={occurrenceStatus} size="medium" />
      </Stack>
      <Stack spacing={1}>
        <Typography>{description}</Typography>
      </Stack>

      {imageUrl && (
        <Accordion sx={{ boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<I.ExpandMoreSharp />}
            sx={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
            }}
          >
            Mostrar imagem
          </AccordionSummary>
          <AccordionDetails>
            <Image src={imageUrl} alt="image" width={700} height={500} />
          </AccordionDetails>
        </Accordion>
      )}
    </Stack>
  );
}
