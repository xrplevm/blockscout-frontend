import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

import Button from './Button/Button';

const variantSoftRounded = definePartsStyle(() => {
  return {
    tab: {
      borderRadius: 'base',
      fontWeight: '600',
      color: 'primary',
      _selected: {
        color: 'white',
        bg: 'primary',
        _hover: {
          color: 'white',
        },
      },
      _hover: {
        color: 'link_hovered',
      },
      _focusVisible: {
        boxShadow: { base: 'none', lg: 'outline' },
      },
    },
  };
});

const variantOutline = definePartsStyle((props) => {
  return {
    tab: {
      ...Button.variants?.outline(props),
      ...Button.baseStyle,
      _selected: Button.variants?.outline(props)._active,
    },
  };
});

const sizes = {
  sm: definePartsStyle({
    tab: Button.sizes?.sm,
  }),
  md: definePartsStyle({
    tab: Button.sizes?.md,
  }),
};

const variants = {
  'soft-rounded': variantSoftRounded,
  outline: variantOutline,
};

const Tabs = defineMultiStyleConfig({
  sizes,
  variants,
});

export default Tabs;
