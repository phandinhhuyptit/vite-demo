'use client';

import { HTMLAttributes } from 'react';
import ICONS from './svgs';
import styles from './icon.module.scss';
import { IconName } from '@type/ui';

/* eslint-disable-next-line */
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  title?: string;
}

export function Icon({
  name,
  title,
  style,
  className = '',
  onClick,
}: IconProps) {
  const Icon = ICONS[name];
  return (
    <span className={`${className} ${styles['icon']}`} onClick={onClick}>
      <Icon title={title} style={{ display: 'inline', ...style }} />
    </span>
  );
}

export default Icon;
