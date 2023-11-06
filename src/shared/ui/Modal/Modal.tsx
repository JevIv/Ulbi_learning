import React, {ReactEventHandler, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;


    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    }

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    },[onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape'){
            closeHandler();
        }
    },[closeHandler])

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    },[isOpen, onKeyDown]);

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal,mods,[className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div className={cls.content}
                         onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>

        </Portal>
    );
};