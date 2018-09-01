import React from 'react';
import LandingPage from '../LandingPage';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Load LandingPage stateless component', async () => {
    it('renders correctly', () => {
        const renderer = new ShallowRenderer()
        const result = renderer.render(<LandingPage />)
        expect(result).toMatchSnapshot()
    });
})
