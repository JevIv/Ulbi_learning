import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcer} from "shared/ui/LangSwitcher/ui/LangSwitcer";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.SideBar,{[cls.collapsed]: collapsed},[className])}>
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcer className={cls.lang}/>
            </div>
        </div>
    );
};