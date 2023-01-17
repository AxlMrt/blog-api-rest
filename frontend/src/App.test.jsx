import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Full app', async () => {
  it('should render full app & navigation', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('React & Node')).toBeInTheDocument();
  });
});
