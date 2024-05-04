import * as M from "@mui/material";
import { TableHeadProps } from "../../utils/types";

export default function TableHead({ headers }: TableHeadProps) {
  return (
    <M.TableHead>
      <M.TableRow>
        {headers.map((header) => {
          return <M.TableCell key={header.key}>{header.label}</M.TableCell>;
        })}
      </M.TableRow>
    </M.TableHead>
  );
}
