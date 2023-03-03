import { useAuth } from "hooks";
import React, { PropsWithChildren } from "react";
import styles from "./Layout.module.scss"
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends PropsWithChildren {}

function Layout(props: Props) {
  const { children } = props;
  useAuth();
  return <div className={styles['container']}> {children}</div>;
}

export default Layout;
