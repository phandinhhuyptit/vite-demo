import { HTMLAttributes } from 'react';
import { useModalContext } from '../modal-context';
import s from './backdrop.module.scss';

type BackdropProps = HTMLAttributes<HTMLDivElement>;

const Backdrop = ({ className }: BackdropProps) => {
  const ctx = useModalContext();
  return (
    <div className={`${s['backdrop']} ${className}`} onClick={ctx.onClose} />
  );
};

export default Backdrop;
