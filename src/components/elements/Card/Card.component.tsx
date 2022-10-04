import './Card.styles.scss';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props): JSX.Element =>
  (
    <div className="card">
      {children}
    </div>
  );

export default Card;
