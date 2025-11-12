// Mock for react-router-dom
import React from 'react';

// Mock BrowserRouter
export const BrowserRouter = ({ children }) => <div data-testid="browser-router">{children}</div>;

// Mock Routes
export const Routes = ({ children }) => <div data-testid="routes">{children}</div>;

// Mock Route
export const Route = ({ path, element }) => <div data-testid={`route-${path}`}>{element}</div>;

// Mock Link
export const Link = ({ to, children, ...props }) => (
  <a href={to} {...props} data-testid="link">
    {children}
  </a>
);

// Mock useNavigate
export const useNavigate = () => jest.fn();

// Mock useParams
export const useParams = () => ({});

// Mock useLocation
export const useLocation = () => ({
  pathname: '/',
  search: '',
  hash: '',
  state: null,
});

// Mock Navigate
export const Navigate = ({ to }) => <div data-testid={`navigate-to-${to}`} />;

// Mock Outlet
export const Outlet = () => <div data-testid="outlet" />;

// Mock NavLink
export const NavLink = ({ to, children, ...props }) => (
  <a href={to} {...props} data-testid="nav-link">
    {children}
  </a>
);
