import { InputProps } from "@mui/material";
import styles from "./InputField.module.css";

const InputField = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input className={styles.inputField} {...props} />;
};

export default InputField;
