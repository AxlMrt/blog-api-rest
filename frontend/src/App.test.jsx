import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders vite + react', () => {
    render(<App />);
    const linkElement = screen.getByText("Vite + React");
    expect(linkElement).toBeInTheDocument();
  })
})