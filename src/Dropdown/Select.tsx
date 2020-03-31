import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Select = React.forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <div className={cx(className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Select.displayName = 'FxSelect';
}

export default Select;