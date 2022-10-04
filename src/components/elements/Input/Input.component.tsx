import './Input.styles.scss';

type Props = {
  icon?: React.ReactNode;
  [x:string]: any;
};

const Input = ({ icon, ...otherProps }: Props): JSX.Element =>
  (
    <div className="input">
      {icon ?? null}
      <input {...otherProps} />
    </div>
  );

export default Input;
