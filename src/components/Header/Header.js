import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '@config';

const HeaderContainer = styled.div`
  background: ${colors.brandPrimary};
  margin: -3rem -1rem 1.45rem;
  padding: 3rem 1rem 0;
  transform: rotate(-2deg);
`;

HeaderContainer.displayName = 'HeaderContainer';

const HeaderText = styled.h1`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderText>
      <Link to="/">
        {siteTitle}
      </Link>
    </HeaderText>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
