import { useEffect, useState } from 'react';
import Error500 from '../components/Molecules/error500';
import NoInternet from '../components/Molecules/NoInternetConnection';
import ErrorProfileLayout from 'components/Layouts/placePageLayout/error';
import MarketPlaceErrorPage from 'components/Molecules/marketplaceErrorPage';
import NotFoundErrorPage from 'components/Molecules/404Error';

type ErrorProps = {
  statusCode: string | number | null;
};

function Error({ statusCode }: ErrorProps) {
  const [noInternet, setNoNet] = useState(false);

  useEffect(() => {
    window.ononline = event => {
      setNoNet(false);
    };

    window.onoffline = event => {
      setNoNet(true);
    };
  }, []);

  if (noInternet) {
    return <NoInternet />;
  }

  return (
    <>
      {statusCode === 500 ? (
        <Error500 />
      ) : (
        <ErrorProfileLayout>
          <NotFoundErrorPage />
        </ErrorProfileLayout>
      )}
    </>
  );
}

Error.getInitialProps = ({
  res,
  err
}: {
  res: { statusCode: number };
  err: { statusCode: number };
}) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;

  return {
    statusCode
  };
};

export default Error;
