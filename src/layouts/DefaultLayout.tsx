import PageNavigation from '../components/blocks/PageNavigation';
import ContentWrapper from '../components/elements/ContentWrapper';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) =>
  (
    <>
      <PageNavigation />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  );

export default DefaultLayout;
