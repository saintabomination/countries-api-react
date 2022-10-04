type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props): JSX.Element =>
  (
    <div>
      {children}
    </div>
  );

export default Card;
