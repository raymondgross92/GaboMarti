'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    fullWidth = false,
}: ButtonProps) {
    const buttonClass = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
