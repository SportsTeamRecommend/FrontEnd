import {
  HeaderContainer,
  HeaderTop,
  LogoBox,
  SiteTitle,
  NavBar,
  NavList,
  NavItem,
  StyledNavLink,
} from './Header.styles.js';

import siteLogo from './../../assets/sitelogo.png';

const Header = () => {
  return (
    <HeaderContainer>
      {/* 상단 로고 영역 */}
      <HeaderTop>
        <LogoBox>
          <img src={siteLogo} alt="" />
        </LogoBox>
        <SiteTitle>MY TEAM FINDER</SiteTitle>
      </HeaderTop>

      {/* 네비게이션 영역 */}
      <NavBar>
        <NavList>
          <NavItem>
            <StyledNavLink to="/">홈</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/statistics">통계</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/compare">비교</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/result">결과</StyledNavLink>
          </NavItem>
        </NavList>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
