import styled from 'styled-components';

export const SNavbar = styled.nav`
  position: relative;
  display: flex;
  padding: 16px;
  gap: 16px;
`;

export const SNavbarItem = styled.div`
  padding: 4px 20px 8px 20px;
  position: relative;
  transition: color 200ms ease 0.1s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  color: var(--color-neutral-300);
  &:hover,
  &:focus {
    color: var(--color-neutral-999);
  }
  &:after {
    z-index: -1;
    content: '';
    background-color: var(--color-tertiary-400);
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
    transform-origin: left;
  }
  &::before {
    content: '';
    z-index: 2;
    background-color: var(--color-primary-400);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &[aria-current='page']::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
