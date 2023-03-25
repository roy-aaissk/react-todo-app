import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders correctly', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('calls onChange callback when input is changed', () => {
    const onChange = jest.fn();
    render(<TextInput onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
