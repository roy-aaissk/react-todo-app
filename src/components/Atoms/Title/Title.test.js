import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('renders the title text correctly', () => {
    render(<Title>My Title</Title>);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });
});
