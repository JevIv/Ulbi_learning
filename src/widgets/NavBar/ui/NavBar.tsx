import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {

    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal]= useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.NavBar,{},[className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate labore quia saepe! A animi aut cumque deleniti ducimus enim eos et, id illo minus molestiae nesciunt officiis, provident quod tempore?
            </Modal>
        </div>
    );
};
