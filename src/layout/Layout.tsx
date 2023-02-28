import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

function Layout(props: Props) {
 const { children } = props 
  return <div>{children}</div>;
}

export default Layout;
