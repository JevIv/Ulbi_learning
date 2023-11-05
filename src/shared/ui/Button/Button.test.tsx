import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";
import React from "react";


describe('Button component', ()=> {
    test('Should render Button with text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    })

    test('Assigned clear className to Button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        // screen.debug()
    })
})