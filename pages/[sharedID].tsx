import PageHeader from 'components/Atoms/pageHeader';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SharedLinkAPI } from 'services/sharedLinkAPI';

const SharedId = ({ link }: any) => {
  const { query, asPath, push } = useRouter();

  useEffect(() => {
    if (link?.originalUrl) {
      console.log('any', link, asPath);
      push(link?.originalUrl);
    }
  }, []);
  console.log('LINK', link);
  return (
    <>
      <PageHeader
        pageTitle={link?.title}
        pageUrl={link?.originalUrl}
        description={`Connect • Collaborate • Create`}
        pageImage={link?.image ? link.image : `web/qloudcity.png`}
      />
    </>
  );
};

export const getServerSideProps = async ({
  params
}: {
  params: { sharedID: any };
}) => {
  if (params?.sharedID) {
    const response = await SharedLinkAPI.getSharedLink({
      url: params?.sharedID
    });

    return {
      props: {
        link: response.data
      }
    };
  }
};

export default SharedId;
