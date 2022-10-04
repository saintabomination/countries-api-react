import './Collection.styles.scss';

type Props = {
  children: React.ReactNode;
};

const Collection = ({ children }: Props): JSX.Element =>
  (
    <div className="collection">
      {children}
    </div>
  );

export default Collection;
