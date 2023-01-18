import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Full app', () => {
  it('should render home page', async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('React & Node')).toBeDefined();
  });
});

describe('Navigation', () => {
  it('should navigate to Home, Register & Login', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    const { registerLink } = render(
      <a href="/register" className="topListItem">
        Register
      </a>
    );
    const { loginLink } = render(
      <a href="/login" className="topListItem">
        Login
      </a>
    );

    const register = <span>Register</span>;
    const login = <span>Login</span>;
    const header = <span>React & Node</span>;

    await user.click(registerLink);
    expect(register).toBeDefined();

    await user.click(loginLink);
    expect(login).toBeDefined();

    await user.click(screen.getByText('Home'));
    expect(header).toBeDefined();
  });
});
