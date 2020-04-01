import React, { Children } from 'react';

import { Dropdown } from 'Dropdown';
import ToggleButton from './ToggleButton';

type Props = {
  /**
   * Placement according to [popper reference](https://popper.js.org/docs/v2/constructors/#options)
   * @default 'bottom-start'
   */
  placement?: DDProps['placement'];
};

const MenuButton: React.FC<Props> = ({ children, ...props }) => {
  const [button, menu] = Children.toArray(children);

  return (
    <Dropdown {...props}>
      <ToggleButton>{button}</ToggleButton>
      {menu}
    </Dropdown>
  );
};

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;

type DDProps = React.ComponentProps<typeof Dropdown>;
