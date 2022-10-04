type Props = {
  children: React.ReactNode;
};

const Collection = ({ children }: Props): JSX.Element =>
  (
    <div>
      {children}
    </div>
  );

export default Collection;
