import { HTMLAttributes, PropsWithChildren } from 'react';
import s from './modal-header.module.scss';

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const ModalHeader = ({ className = '', children }: ModalHeaderProps) => {
  return (
    <div className={`${s['modal-header']} ${className}`}>
      <h2>{children}</h2>
    </div>
  );
};

export default ModalHeader;
