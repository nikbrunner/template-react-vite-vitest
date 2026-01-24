import type { ButtonHTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.css";

const variants = cva(styles.button, {
    variants: {
        variant: {
            primary: styles.primary,
            secondary: styles.secondary
        },
        size: {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});

type Variants = VariantProps<typeof variants>;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, Variants {}

export function Button({ children, variant, size, className, ...props }: Props) {
    return (
        <button className={variants({ variant, size, className })} {...props}>
            {children}
        </button>
    );
}
