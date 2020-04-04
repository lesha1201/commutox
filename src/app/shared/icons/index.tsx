/**
 * TODO: add auto correct type for [name] based on icons files
 */

import cx from 'classnames';
import * as React from 'react';

import { capitalize } from 'app/shared/utils';
import css from './icon.scss';
import * as icons from './icons';

/* -- Types */

export interface IIconProps {
  name: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: { wrapper?: string; icon?: string };
}

/* -- Main */

function getIconComponent(name: IIconProps['name']): React.ElementType {
  const componentName = (capitalize(name.toLowerCase()) + 'Icon') as keyof typeof icons;

  if (icons[componentName]) {
    return icons[componentName];
  } else {
    throw new Error('Icon name is invalid.');
  }
}

function Icon({ name, size, className }: IIconProps) {
  const IconComponent = getIconComponent(name);
  const cn = cx(className && className.wrapper, css[size]);
  const cnIcon = cx(className && className.icon) || undefined;

  return (
    <span className={cn}>
      <IconComponent className={cnIcon} />
    </span>
  );
}

Icon.defaultProps = {
  size: 'md',
};

export default Icon;
export * from './icons';
