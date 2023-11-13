import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardItem from '.';
import { ICardItem } from '@/types';

describe('CardItem component', () => {
  it('renders correctly', () => {
    const data = {
        imageUrl: 'test-image-url',
        promotion: 'test-promotion',
        width: 3,
        height: 2,
        name: 'test-name',
        rating: 4.5,
        minCookTime: 10,
        maxCookTime: 20,
        isNew: true,
    } as unknown as ICardItem;

    const { getByText, getByAltText } = render(<CardItem data={data} />);

    // Assert that the component renders the correct elements
    expect(getByAltText('food image')).toBeInTheDocument();
    expect(getByText('test-name')).toBeInTheDocument();
    expect(getByText('4.5')).toBeInTheDocument();
    expect(getByText('10-20 min')).toBeInTheDocument();
    expect(getByText('New')).toBeInTheDocument();
  });
});