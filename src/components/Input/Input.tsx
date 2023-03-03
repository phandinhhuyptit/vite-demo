/* eslint-disable react/prop-types */
import React, {
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import { Icon } from "@components/index"
import { mergeClasses } from "utils/string";

import styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  inputSize?: "small" | "default" | "large";
  iconPrefix?: ReactNode;
  iconSuffix?: ReactNode;
  error?: boolean;
}

export const Input = forwardRef(
  (
    {
      variant = "primary",
      inputSize = "default",
      iconPrefix,
      iconSuffix,
      className,
      value,
      error,
      ...inputProps
    }: InputProps,
    ref : LegacyRef<HTMLInputElement>
  ) => {
    const classes = mergeClasses([
      styles["container"],
      iconPrefix && styles["prefix"],
      (iconSuffix || error) && styles["suffix"],
      inputProps.disabled && styles["disabled"],
      error && styles["error"],
      styles[inputSize],
      styles[variant],
      className,
    ]);

    return (
      <div className={classes}>
        <div className={styles["icon-prefix"]}>{iconPrefix}</div>
        <input
          name="input"
          value={value}
          ref={ref}
          autoComplete="off"
          {...inputProps}
          className={`${styles["input"]} input`}
        />
        <div className={styles["icon-suffix"]}>
          {error && <Icon name="ic-error" style={{ width: 18 }} />}
          {iconSuffix}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
