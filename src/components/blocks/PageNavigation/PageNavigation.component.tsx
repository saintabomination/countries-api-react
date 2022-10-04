import { Link } from 'react-router-dom';

import ContentWrapper from '../../elements/ContentWrapper';

const PageNavigation = (): JSX.Element =>
  (
    <nav>
      <ContentWrapper>
        <h2>Page Navigation</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </ContentWrapper>
    </nav>
  );

export default PageNavigation;
