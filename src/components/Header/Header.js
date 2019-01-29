import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '@config';
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
  padding: 1rem 1rem 1.5rem;
  transform: rotate(2deg);

  a {
    color: ${colors.brandTertiary};
    font-size: 2rem;
    font-weight: 900;
    margin: 0 0.5rem 0 1rem;
    text-transform: uppercase;
    text-align: right;
    text-decoration: none;
    position: relative;
    z-index: 0;
    -webkit-text-stroke: 2px ${colors.brandPrimary}; /* webkit only */
  
    &:before {
      content: attr(data-text);
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 4px;
      left: 4px;
      z-index: -1;
      background: repeating-linear-gradient(
        0deg,
        #fff,
        #fff 1px,
        ${colors.brandPrimary} 1px,
        ${colors.brandPrimary} 2px,
        #000 2px
      ) top left fixed;
      -webkit-text-fill-color: transparent; /* webkit only */
      -webkit-background-clip: text; /* webkit only */
      background-size: 1%;
    }
  }

  img {
    margin: 0;
    width: 5rem;
  }

  @media (min-width: ${breakpoints.s}) {
    img {
      width: 6rem;
    }
  }

  @media (min-width: ${breakpoints.m}) {
    padding: 1.5rem 2rem 2.5rem;

    a {
      font-size: 3rem;
    }

    img {
      width: 10rem;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderText>
      <img src={logo} alt="Logo" />
      <Link data-text={siteTitle} to="/" >
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
