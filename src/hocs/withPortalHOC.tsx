import { ComponentType,HTMLAttributes, } from 'react';
import { createPortal } from 'react-dom';

export const withPortalHOC =
  <T extends JSX.Element,>(WrappedComponent: ComponentType<T>) =>
  ({ ...props }: T) => {
    return createPortal(<WrappedComponent {...(props) } />, document.body);
  };
