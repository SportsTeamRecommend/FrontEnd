import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #1e2533;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  background-color: #050815;
  padding: 0.75rem 1rem;
`;

export const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3a4152;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;

  img {
    width: 80px;
  }
`;

export const LogoImg = styled.img`
  width: 32px;
  height: auto;
`;

export const SiteTitle = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const NavBar = styled.nav`
  background-color: #030510;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0.75rem 1rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #cbd5e1;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition:
    background-color 0.2s,
    color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: #475569;
    color: #fff;
  }

  &.active {
    background-color: #091138;
    color: #fff;
  }
`;
