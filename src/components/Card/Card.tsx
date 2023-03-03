import { PropsWithChildren } from 'react';

import styles from './Card.module.scss';

export interface CardProps extends PropsWithChildren {
  size?: 'small' | 'large';
  className?: string;
  type?: 'outline' | 'default';
}

export function Card({
  children,
  size,
  className,
  type = 'default',
}: CardProps) {
  const classes = `${styles['container']}
  ${size ? styles[size] : ''}
  ${styles[type]}
  ${className ? className : ''}`;

  return <div className={classes}>{children}</div>;
}

export default Card;
