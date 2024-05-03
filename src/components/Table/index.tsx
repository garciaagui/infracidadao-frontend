import * as M from "@mui/material";
import { TableBody, TableHead } from "./components";
import { HEADERS, MOCKED_DATA } from "./utils/constants";
import { OccurrenceType } from "./utils/types";

const C0LUMNS = HEADERS.map((h) => h.key) as (keyof OccurrenceType)[];

export default function Table() {
  return (
    <M.Table>
      <TableHead headers={HEADERS} />
      <TableBody data={MOCKED_DATA} columns={C0LUMNS} />
    </M.Table>
  );
}
