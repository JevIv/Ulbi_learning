import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import {SideBar} from "./SideBar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";



describe('SideBar component', ()=> {
    test('Should render SideBar', () => {

        componentRender(<SideBar/>);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    })

    test('Test toggle', () => {

        componentRender(<SideBar/>);
        const toggleBtn = screen.getByTestId('sideBar-toggle')
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    })

})