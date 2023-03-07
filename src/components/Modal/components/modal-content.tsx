import { HTMLAttributes, PropsWithChildren } from 'react';
import s from './modal-content.module.scss';

type ModalContentProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const ModalContent = ({ className = '', children }: ModalContentProps) => {
  return <div className={`${s['modal-content']} ${className}`}>{children}</div>;
};

export default ModalContent;
