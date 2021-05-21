import React from 'react';
import { render } from '@testing-library/react'
import FeelingCard from './FeelingCard';

// Testing to see if the component renders

describe('FeelingCard', () => {
  it('should be defined', () => {
    expect(FeelingCard).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
    <FeelingCard />,
    );
    
    expect(asFragment()).toBeDefined();
    });
});
