import * as sizes from './sizes';
import colors from './colors';

const breakpoints = ['320px', '768px', '1024px', '1400px'];
const shadows = {
  0: '0 0 1px rgba(0,0,0,0.7)',
  1: '0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11)',
  2: '0px 12.8px 28.8px rgba(0, 0, 0, 0.13), 0px 0px 9.2px rgba(0, 0, 0, 0.11)',
};

export default { ...sizes, breakpoints, colors, shadows };