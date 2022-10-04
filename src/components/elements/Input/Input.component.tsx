type Props = {
  [x:string]: any;
};

const Input = ({ ...otherProps }: Props): JSX.Element =>
  (
    <input className="input" {...otherProps} />
  );

export default Input;
