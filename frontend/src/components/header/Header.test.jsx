import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
  });

  it('should render text', () => {
    render(<Header />);
    const textSm = screen.getByText('React & Node');
    const textLg = screen.getByText('Blog');
    expect(textSm, textLg).toBeDefined();
  });

  it('should contain img', () => {
    render(<Header />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
