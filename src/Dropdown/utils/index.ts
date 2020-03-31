import { createContext, useRef, useMemo, useContext, Children, isValidElement, useState, useEffect } from 'react';
import { Options as PopperOptions } from '@popperjs/core';
import { useSelect } from 'downshift';

import Option from '../../Option';

export const downshiftContext = createContext<DownshiftContextType>({} as DownshiftContextType);
export const dropdownStaticContext = createContext<DropdownStaticContext>({} as DropdownStaticContext);

export function useDropdownProviderValue() {
  const triggerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const popperOptionsRef = useRef<Partial<PopperOptions>>({});

  return { triggerRef, dropdownRef, popperOptionsRef };
}

export function useDropdownOpen() {
  return useContext(downshiftContext).isOpen;
}

export function useDropdown() {
  return useContext(dropdownStaticContext);
}

export function useChildren(children: any) {
  return useMemo(
    () =>
      Children.map(children, (el: any, index) => {
        if (__DEV__) {
          if (!isValidElement(el)) {
            throw Error('Listbox can only take <Option /> as a child');
          }
        }
        const { value, disabled } = el.props;

        return { value, disabled, index };
      }),
    [children]
  );
}

export function useDownshift() {
  const [items, setItems] = useState<any[]>([]);
  const downshift = useSelect({
    items,
    itemToString,
    onSelectedItemChange: (...args) => {
      console.log(...args);
    },
  });

  return {
    ...downshift,
    setItems,
  };
}

export function useDownshiftState() {
  return useContext(downshiftContext);
}

export function useOptionItems(children: OptionChildren[] | OptionChildren) {
  const { isOpen, getMenuProps, getItemProps, setItems, highlightedIndex } = useDownshiftState();

  useEffect(() => {
    setItems(Children.toArray(children));
  }, [children, setItems]);

  return { isOpen, getItemProps, highlightedIndex, getMenuProps };
}

function itemToString(item: OptionChildren): string {
  const { value } = item.props;

  return typeof value === 'string' ? value : JSON.stringify(value);
}

type DropdownStaticContext = {
  triggerRef: React.RefObject<HTMLElement>;
  dropdownRef: React.RefObject<HTMLElement>;
  popperOptionsRef: React.RefObject<Partial<PopperOptions>>;
};

type DownshiftContextType = ReturnType<typeof useDownshift>;

type OptionChildren = React.ReactComponentElement<typeof Option>;
