import ProfileLayout from 'components/Layouts/profileLayout';
import MyQloudNavBar from 'components/Molecules/MyQloudNavBar';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useUserIsLogged } from 'utilities/hook/useUserIsLogged';
import ARROW from 'assets/icons/arrow-left.svg';

import MyPlaceCard from 'components/Molecules/myPlaceCard';
import DummyCard from 'components/Molecules/DummyCard';
import SideTabs from 'components/Layouts/sideTabsLayout';
import MyPlaceCards from 'components/Organisms/myPlaceCards';
import { useParser } from 'utilities/hook/useParser';
import MyPlacesMobile from 'components/Organisms/myPlaceCards/mobileIndex';

function MyPlaces() {
  const { isLogged } = useUserIsLogged();

  const { parserData } = useParser();
  const deviceType = parserData?.device.type;

  return (
    <div>
      {deviceType === 'mobile' ? (
        <MyPlacesMobile />
      ) : (
        <ProfileLayout route="./../">
          <MyPlaceCards />
        </ProfileLayout>
      )}
    </div>
  );
}

export default MyPlaces;
