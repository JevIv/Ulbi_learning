import './styles/index.scss';
import React, {Suspense, useEffect, useState} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen]= useState(false)

    return (
        <div className={classNames('app',{}, [theme])}>
            <Suspense fallback={''}>
                <NavBar/>
                <button onClick={()=> setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate labore quia saepe! A animi aut cumque deleniti ducimus enim eos et, id illo minus molestiae nesciunt officiis, provident quod tempore?
                </Modal>
                <div className={'content-page'}>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )

}
export default App