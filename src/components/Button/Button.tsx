/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { ComponentPropsWithoutRef, forwardRef, LegacyRef } from "react";
import styles from "./button.module.scss";

/* eslint-disable-next-line */

export type ButtonComponentProps = ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button"> & {
    variant?:
      | "primary"
      | "secondary"
      | "royal-blue"
      | "sea-green"
      | "purple"
      | "yellow"
      | "red"
      | "turquoise"
      | "dark-turquoise"
      | "alice-blue"
      | "ghost-white";
    btnSize?: "default" | "small";
    element?: "button" | "link";
    inline?: boolean;
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonComponentProps
>(function (
  {
    children,
    variant,
    className,
    btnSize = "default",
    element = "button",
    inline = false,
    ...elProps
  },
  ref
) {
  const classes = `${styles["btn"]} 
  ${variant ? `${styles[variant]} ${variant}` : ""} 
  ${styles[btnSize]} ${inline ? styles["inline"] : ""} 
  ${className ? className : ""}`;

  return element === "button" ? (
    <button
      ref={ref as LegacyRef<HTMLButtonElement>}
      className={classes}
      {...elProps}
    >
      {children}
    </button>
  ) : (
    <a
      ref={ref as LegacyRef<HTMLAnchorElement>}
      className={classes}
      {...elProps}
    >
      {children}
    </a>
  );
});

export default Button;
