import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
// @ts-ignore
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcer} from "shared/ui/LangSwitcher/ui/LangSwitcer";
import {Button} from "shared/ui/Button/Button";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sideBar'
            className={classNames(cls.SideBar,{[cls.collapsed]: collapsed},[className])}>
            <Button
                data-testid='sideBar-toggle'
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcer className={cls.lang}/>
            </div>
        </div>
    );
};