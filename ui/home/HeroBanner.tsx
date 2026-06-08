// we use custom heading size for hero banner
// eslint-disable-next-line no-restricted-imports
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import useIsMobile from 'lib/hooks/useIsMobile';
import RewardsButton from 'ui/rewards/RewardsButton';
import AdBanner from 'ui/shared/ad/AdBanner';
import SearchBar from 'ui/snippets/searchBar/SearchBarDesktop';
import SearchBarMobile from 'ui/snippets/searchBar/SearchBarMobile';
import UserProfileDesktop from 'ui/snippets/user/profile/UserProfileDesktop';
import UserWalletDesktop from 'ui/snippets/user/wallet/UserWalletDesktop';

export const BACKGROUND_DEFAULT =
  'radial-gradient(circle, rgba(121, 25, 255, 1) 100%, rgba(25, 255, 132, 1) 100%)';
const TEXT_COLOR_DEFAULT = 'white';
const BORDER_DEFAULT = 'none';

const HeroBanner = () => {

  const isMobile = useIsMobile();

  const background = {
    _light:
      config.UI.homepage.heroBanner?.background?.[0] ||
      BACKGROUND_DEFAULT,
    _dark:
      config.UI.homepage.heroBanner?.background?.[1] ||
      config.UI.homepage.heroBanner?.background?.[0] ||
      BACKGROUND_DEFAULT,
  };

  const textColor = {
    _light:
      // light mode
      config.UI.homepage.heroBanner?.text_color?.[0] ||
      TEXT_COLOR_DEFAULT,
    // dark mode
    _dark:
      config.UI.homepage.heroBanner?.text_color?.[1] ||
      config.UI.homepage.heroBanner?.text_color?.[0] ||
      TEXT_COLOR_DEFAULT,
  };

  const border = {
    _light:
      config.UI.homepage.heroBanner?.border?.[0] || BORDER_DEFAULT,
    _dark:
      config.UI.homepage.heroBanner?.border?.[1] || config.UI.homepage.heroBanner?.border?.[0] || BORDER_DEFAULT,
  };

  return (
    <Flex
      w="100%"
      background={ background }
      border={ border }
      borderRadius="md"
      p={{ base: 4, lg: 8 }}
      columnGap={ 8 }
      alignItems="center"
    >
      <Box flexGrow={ 1 }>
        <Flex mb={{ base: 2, lg: 3 }} justifyContent="space-between" alignItems="center" columnGap={ 2 }>
          <Heading
            as="h1"
            fontSize={{ base: '18px', lg: '30px' }}
            lineHeight={{ base: '24px', lg: '36px' }}
            fontWeight={{ base: 500, lg: 700 }}
            color={ textColor }
          >
            { config.chain.name }
          </Heading>
          { config.UI.navigation.layout === 'vertical' && (
            <Box display={{ base: 'none', lg: 'flex' }} gap={ 2 }>
              { config.features.rewards.isEnabled && <RewardsButton variant="hero"/> }
              {
                (config.features.account.isEnabled && <UserProfileDesktop buttonVariant="hero"/>) ||
                (config.features.blockchainInteraction.isEnabled && <UserWalletDesktop buttonVariant="hero"/>)
              }
            </Box>
          ) }
        </Flex>
        <Box display={{ base: 'flex', lg: 'none' }}>
          <SearchBarMobile isHeroBanner/>
        </Box>
        <Box display={{ base: 'none', lg: 'flex' }}>
          <SearchBar isHeroBanner/>
        </Box>
      </Box>
      { !isMobile && <AdBanner format="mobile" w="fit-content" flexShrink={ 0 } borderRadius="md" overflow="hidden"/> }
    </Flex>
  );
};

export default React.memo(HeroBanner);
