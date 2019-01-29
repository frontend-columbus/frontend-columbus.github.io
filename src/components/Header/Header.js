import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '@config';
import logo from '@images/inverted-logo.svg';

const HeaderContainer = styled.div`
  background: ${colors.brandPrimary};
  margin: -3rem -1rem 1.45rem;
  padding: 3rem 1rem 0;
  transform: rotate(-2deg);
`;

HeaderContainer.displayName = 'HeaderContainer';

const HeaderText = styled.h1`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  transform: rotate(2deg);

  a {
    color: white;
    margin-left: 0.5rem;
    text-align: right;
    text-decoration: none;
  }

  img {
    margin: 0;
    width: 10rem;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderText>
      <img src={logo} alt="Logo" />
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
