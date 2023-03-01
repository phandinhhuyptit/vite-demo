import { useAuth } from "hooks";
import React, { PropsWithChildren } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends PropsWithChildren {}

function Layout(props: Props) {
  const { children } = props;
  useAuth() 
  return <div>{children}</div>;
}

export default Layout;
