import Home from '@/app/home/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('Deve renderizar o título', () => {
    render(<Home />);

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
  });
});
