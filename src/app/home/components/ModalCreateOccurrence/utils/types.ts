import { z } from "zod";
import { createOccurrenceSchema } from "./schemas";

export type ModalCreateOccurrenceProps = {
  handleModal: () => void;
  isOpen: boolean;
};

export type CreateOccurrenceType = z.infer<typeof createOccurrenceSchema>;
