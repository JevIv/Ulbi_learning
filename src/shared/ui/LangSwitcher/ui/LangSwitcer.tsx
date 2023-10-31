import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcer.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcerProps {
    className?: string;
}

export const LangSwitcer = ({className}: LangSwitcerProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcer,{},[className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};