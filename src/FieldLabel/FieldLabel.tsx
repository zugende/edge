import React from 'react';
import { Label } from './FieldLabel.styled';

type FieldLabelAttrs = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type Props = FieldLabelAttrs & {
  htmlFor: FieldLabelAttrs['htmlFor'];
  disabled?: boolean;
};

const FieldLabel = React.forwardRef<HTMLLabelElement, Props>(({ children, disabled, ...props }, ref) => {
  return (
    <Label fontSize="m" color={disabled ? 'text.disabled' : 'text.default'} {...props} ref={ref}>
      {children}
    </Label>
  );
});

if (__DEV__) {
  FieldLabel.displayName = 'FxFieldLabel';
}

export default FieldLabel;
