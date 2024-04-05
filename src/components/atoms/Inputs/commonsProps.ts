export interface Props {
  name: string;
  placeholder: string;
  handleChange: (name: string) => () => void;
  handleBlur: (name: string) => () => void;
  value: string;
}
