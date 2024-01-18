import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

export default function getDefaultFormColors(props: StyleFunctionProps) {
  const {
    focusBorderColor: fc,
    errorBorderColor: ec,
    filledBorderColor: flc,
  } = props;
  return {
    focusBorderColor: fc || mode('primary', 'primary')(props),
    focusPlaceholderColor: fc || 'gray.500',
    errorColor: ec || mode('primary', 'red.300')(props),
    filledColor: flc || mode('primary', 'primary')(props),
  };
}
