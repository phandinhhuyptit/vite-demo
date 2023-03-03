'use client';

import { IconName } from '@type/ui';
import { HTMLAttributes } from 'react';

import styles from './icon.module.scss';
import ICONS from './svgs';

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
