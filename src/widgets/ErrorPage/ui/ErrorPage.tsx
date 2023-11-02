import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ErrorPage.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {

    const { t } = useTranslation();

    const refreshPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.ErrorPage,{},[className])}>
            <p>{t('Unexpected error occurred')}</p>
            <Button onClick={refreshPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};