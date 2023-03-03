/* eslint-disable react/react-in-jsx-scope */
import { Icon } from "@components/Icon/icon";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { mergeClasses } from "utils/string";

import styles from "./FormControl.module.scss";

/* eslint-disable-next-line */
export interface FormControlProps extends PropsWithChildren {
  label?: string;
  htmlFor?: string;
  error?: ReactNode;
  className?: string;
  variant?: "error" | "warning";
  classNameError?: string;
}

interface ErrorBubbleProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  variant?: "error" | "warning";
  className?: string;
}

const ErrorBubble = ({
  children,
  variant = "error",
  className = "",
}: ErrorBubbleProps) => {
  return (
    <div className={mergeClasses([styles["error-bubble"], className])}>
      <Icon
        className={mergeClasses([styles["error-icon"], styles[variant]])}
        name="ic-error"
      />
      <div className="w-full">{children}</div>
      <Icon className={styles["error-arrow"]} name="ic-arrow-triangle" />
    </div>
  );
};

export function FormControl({
  label,
  htmlFor,
  children,
  error,
  className,
  variant = "error",
  classNameError,
}: FormControlProps) {
  return (
    <div className={mergeClasses([styles["container"], className])}>
      {label && (
        <label htmlFor={htmlFor} className={styles["label"]}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <ErrorBubble className={classNameError} variant={variant}>
          {error}
        </ErrorBubble>
      )}
    </div>
  );
}

export default FormControl;
