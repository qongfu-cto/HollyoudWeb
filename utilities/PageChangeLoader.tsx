import Loading from 'components/Molecules/loading';
import SignupSubmitLoader from 'components/Molecules/SignupSubmitLoader';
import MobileCityLoader from 'components/Molecules/SignupSubmitLoader/mobile';
import router from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useParser } from './hook/useParser';

function PageChangeLoader() {
  const [loading, SetLoading] = useState(false);
  const { parserData } = useParser();

  const currentDevice = useMemo(() => {
    const deviceType = parserData?.device?.type;

    return deviceType || 'web';
  }, [parserData]);

  console.log({ currentDevice });

  useEffect(() => {
    router.events.on('routeChangeStart', url => {
      SetLoading(true);
    });

    router.events.on('routeChangeComplete', url => {
      SetLoading(false);
    });
  }, []);

  return (
    <div style={{ position: 'absolute', backgroundColor: "black" }}>
      {loading ? (
        currentDevice === 'mobile' ? (
          <MobileCityLoader openModal={loading} message="" />
        ) : (
          <SignupSubmitLoader openModal={loading} message="" />
        )
      ) : null}
    </div>
  );
}

export default PageChangeLoader;
