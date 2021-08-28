import React from 'react';
import { render, clearnup, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About components', ()=> {
    // First Test
    it('renders',()=> {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node strucutre',()=>{
        //render About
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})