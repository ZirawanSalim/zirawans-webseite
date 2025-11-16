import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjekteArmband from '../src/Pages/ProjekteArmband.jsx';
import ProjektePortfolio from '../src/Pages/ProjektePortfolio.jsx';

describe('ProjekteArmband Component', () => {
    test('renders Armband project page', () => {
        render(<ProjekteArmband />);
        const heading = screen.getByText(/Armband Projekte/i);
        expect(heading).toBeInTheDocument();
    });
});

describe('ProjektePortfolio Component', () => {
    test('renders Portfolio project page', () => {
        render(<ProjektePortfolio />);
        const heading = screen.getByText(/Portfolio Projekte/i);
        expect(heading).toBeInTheDocument();
    });
});