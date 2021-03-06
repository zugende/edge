import React from 'react';
import { Button } from './IconButton.styled';
import Icon from '../Icon';
import { Size } from '../@utils';

// Do not make it larger then 'm'
const sizeToIcon: Record<Size, Size> = {
  xs: 's',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'l',
};

type Props = {
  icon: string;
  size: Size;
} & Omit<React.ComponentProps<typeof Button>, 'variant'>;

const IconButton = React.forwardRef<HTMLButtonElement, Props>(({ icon, size = 'm', ...props }, ref) => {
  return (
    <Button size={size} {...props} ref={ref}>
      <Icon size={sizeToIcon[size]} icon={icon} />
    </Button>
  );
});

export default IconButton;
