import * as M from "@mui/material";
import { TableBodyProps } from "../../utils/types";

export default function TableBody({ data, columns }: TableBodyProps) {
  return (
    <M.TableBody>
      {data.map((item) => (
        <M.TableRow key={item.id}>
          {columns.map((column) => {
            return <td key={column}>{item[column]}</td>;
          })}
        </M.TableRow>
      ))}
    </M.TableBody>
  );
}
