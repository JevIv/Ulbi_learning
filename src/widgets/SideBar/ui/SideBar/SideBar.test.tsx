import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import {SideBar} from "./SideBar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";



describe('SideBar component', ()=> {
    test('Should render SideBar', () => {

        renderWithTranslation(<SideBar/>);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    })

    test('Test toggle', () => {

        renderWithTranslation(<SideBar/>);
        const toggleBtn = screen.getByTestId('sideBar-toggle')
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    })

})