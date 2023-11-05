import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcerProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcer = ({className, short}: LangSwitcerProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('',{},[className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    );
};