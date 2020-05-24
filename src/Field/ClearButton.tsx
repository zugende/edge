import React from 'react';

import IconButton from '../IconButton';
import { FieldClearButton } from './Field.styled';
import { FieldInputProps } from './utils';
import { Size } from '../@utils';

const sizeMap: Record<NonNullable<FieldInputProps['size']>, Size> = {
  s: 'xs',
  m: 's',
  l: 'm',
};

type Props = {
  shown: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: NonNullable<FieldInputProps['size']>;
  disabled?: boolean;
};

const ClearButton: React.FC<Props> = ({ shown, disabled, onClick, size }) => {
  return (
    <FieldClearButton shown={shown && !disabled}>
      <IconButton icon="clear" onClick={onClick} size={sizeMap[size]} />
    </FieldClearButton>
  );
};

export default ClearButton;