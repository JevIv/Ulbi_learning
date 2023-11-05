import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
// @ts-ignore
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcer} from "shared/ui/LangSwitcher/ui/LangSwitcer";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";

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
                className={cls.collapseBtn}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link}>
                            Main
                        </span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                            About
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcer
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};