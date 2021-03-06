import styled from 'styled-components/macro';

import Icon from '../Icon';
import { fieldStyles, INPUT_SIZE, fieldWrapperStyles } from '../Field/Field.styled';
import LeftIcon from '../Field/LeftIcon';
import { color, ColorProps } from 'styled-system';
import Option from '../Option';

export const ArrowIcon = styled(Icon)<{ expanded: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => props.expanded && 'rotate(180deg)'};
`;

export const Field = styled.button<Parameters<typeof fieldStyles>[0]>`
  ${fieldWrapperStyles}
  ${fieldStyles}
  cursor: default;
  background-color: ${({ theme }) => theme.colors.surface[1]};
  height: ${INPUT_SIZE};
  padding: 0;
`;

export const Value = styled.div<{ withIcon: boolean } & ColorProps>`
  padding-left: ${(props) => (props.withIcon ? INPUT_SIZE : '8px')};
  padding-right: ${INPUT_SIZE};
  ${color}
`;

export const Chevron = styled(LeftIcon)`
  right: 0;
  left: auto;
`;

export const ClearOption = styled(Option)`
  background-color: ${(props) => props.theme.colors.surface[1]};
  height: 28px;
  color: ${(props) => props.theme.colors.text.ultralight};
`;
