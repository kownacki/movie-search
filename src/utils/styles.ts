// Here are kept all common style configuration and utils used across all components.

export const borderRadius = 10;

export const cardBoxShadow = '2px 4px 10px rgba(0, 0, 0, 0.2)';

export const rwdBreakpoints = {
  1: 599,
  2: 419,
};

export const widthAndMinWidth = (width: number): string => `
  width: ${width}px;
  min-width: ${width}px;
`;
