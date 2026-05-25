import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('renders correctly with title and message', () => {
    render(<App />);

    // Başlık render edildi mi?
    expect(screen.getByText(/Fenerbahçe Sarı-Lacivert: Şampiyon Fenerbahçe/i)).toBeInTheDocument();

    // Mesaj render edildi mi?
    expect(screen.getByText(/Uygulama başarıyla oluşturuldu!/i)).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(<App />);
    const container = screen.getByText(/Fenerbahçe/i).parentElement;

    // Doğru stil uygulandı mı?
    expect(container).toHaveStyle('textAlign: center');
    expect(container).toHaveStyle('marginTop: 5rem');
  });
});
