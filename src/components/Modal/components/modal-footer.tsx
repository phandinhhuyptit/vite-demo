import { HTMLAttributes, PropsWithChildren } from 'react';
import s from './modal-footer.module.scss';

type ModalFooterProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const ModalFooter = ({ className = '', children }: ModalFooterProps) => {
  return <div className={`${s['modal-footer']} ${className}`}>{children}</div>;
};

export default ModalFooter;
