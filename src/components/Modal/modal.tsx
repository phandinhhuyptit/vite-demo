import { withPortalHOC } from "@hocs/withPortalHOC";
import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLockedBody } from "usehooks-ts";

import Icon from "../icon/icon";
import Backdrop from "./components/backdrop";
import ModalContent from "./components/modal-content";
import ModalFooter from "./components/modal-footer";
import ModalHeader from "./components/modal-header";
import s from "./modal.module.scss";
import ModalContext from "./modal-context";

interface ModalRootProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  /**
   * Mount Modal to DOM or not
   */
  isShow: boolean;

  /**
   * Callback when close modal
   */
  onClose?: () => void;

  /**
   * Show "X" button in header of modal
   */
  isCloseButton?: boolean;

  /**
   * Use backdrop for modal
   * @default: true
   */
  isShowBackdrop?: boolean;
}

const useAnimationTiming = (isShow: boolean) => {
  const [shouldRender, setShouldRender] = useState(isShow);
  useEffect(() => {
    let timeout: null | ReturnType<typeof setTimeout>;
    if (!isShow) {
      //Delay abit to run animation before remove modal from DOM
      timeout = setTimeout(() => setShouldRender(isShow), 150);
    } else {
      setShouldRender(isShow);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isShow]);

  return { shouldRender };
};

const ModalRoot = ({
  id,
  isShow = false,
  onClose = () => undefined,
  isCloseButton = false,
  isShowBackdrop = true,
  children,
  className = "",
  style,
}: ModalRootProps) => {
  const modalCtx = useMemo(() => ({ onClose }), [onClose]);
  const { shouldRender } = useAnimationTiming(isShow);
  const [_, lockedBody] = useLockedBody();

  const showClassName = isShow ? "show" : "";
  const backdropClassName = isShowBackdrop ? "" : "transparent";

  useEffect(() => {
    lockedBody(isShow ?? false);
  }, [isShow]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ModalContext.Provider value={modalCtx}>
      <div id={id}>
        <Backdrop className={`${showClassName} ${backdropClassName}`} />
        <div
          className={`${s["modal-container"]} ${showClassName} ${className}`}
          style={style}
        >
          {isCloseButton && (
            <button
              className={s["modal-close-button"]}
              onClick={modalCtx.onClose}
            >
              <Icon name="ic-x" className={s["close-icon"]} />
            </button>
          )}
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Modal = {
  Root: withPortalHOC<ModalRootProps>(ModalRoot),
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
};

export default Modal
