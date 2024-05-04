import * as M from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InputProps } from "../utils/types";

export default function TextField(props: InputProps) {
  const { label, name } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as String;

  return (
    <M.TextField
      label={label}
      variant="standard"
      error={errors[name] ? true : false}
      helperText={errors[name] && errorMessage}
      {...register(name)}
    />
  );
}
