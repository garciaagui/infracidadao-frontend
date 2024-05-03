import * as M from "@mui/material";
import { TableBody, TableHead } from "./components";
import { HEADERS } from "./utils/constants";
import { OccurrenceType, TableProps } from "./utils/types";

const C0LUMNS = HEADERS.map((h) => h.key) as (keyof OccurrenceType)[];

export default function Table({ data }: TableProps) {
  return (
    <M.Table>
      <TableHead headers={HEADERS} />
      <TableBody data={data} columns={C0LUMNS} />
    </M.Table>
  );
}
