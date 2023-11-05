import {ReactNode} from "react";
import {I18nextProvider} from "react-i18next";
import {render} from "@testing-library/react";
import i18nForTests from "shared/config/i18n/i18nForTests";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";

export interface renderWithRouterOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: renderWithRouterOptions = {}) {

    const {
        route = '/',
    } = options;

     render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}