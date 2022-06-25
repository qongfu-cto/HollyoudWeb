import React from 'react';
import Head from 'next/head';
import { API_URL } from 'utilities/api';

type PageHeaderProps = {
  title?: string;
  meta?: string;
  pageTitle?: string;
  pageUrl: string;
  pageImage?: string;
  description?: string;
};

/**
 * PageHeader
 *
 * An Atom Component used on every Page Components
 * to show the Browser title and meta description.
 *
 * @param title (String) Optional browser title.
 * @param meta Optional mneta description in the browser page.
 */
const PageHeader = ({
  title,
  meta,
  pageImage,
  pageTitle,
  pageUrl,
  description
}: PageHeaderProps) => {
  return (
    <Head>
      <title>
        {title ? title : 'Hollyoud | Connect • Collaborate • Create'}{' '}
      </title>

      <meta
        name="description"
        property="og:description"
        content={
          description ? description : 'Connect • Collaborate • Create'
        }
      />
      <link rel="icon" href={`${API_URL}/favicon.ico`} />

      <meta property="og:site_name" content="Hollyoud" />
      {/* <meta
        property="og:title"
        content={`${pageTitle} | ${meta ??
          'Explore Places to Eat, Shop & Go!'}`}
      /> */}
      {/* <meta
        property="og:title"
        content={`${pageTitle} | ${meta ??
          'Explore Places to Eat, Shop & Go!'}`}
      /> */}
      <meta property="og:title" content={pageTitle ? pageTitle : 'Hollyoud'} />

      <meta property="og:url" content={`${pageUrl}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        itemProp="image primaryImageOfPage"
        content={`${
          process.env.NEXT_PUBLIC_DEV_API
            ? process.env.NEXT_PUBLIC_DEV_API
            : API_URL
        }/places/pic/image.png?key=${pageImage}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${pageUrl}`} />
      <meta
        property="twitter:title"
        content={pageTitle ? pageTitle : 'QloudCity'}
      />
      <meta
        property="twitter:description"
        content={description ?? 'Connect • Collaborate • Create'}
      />
      <meta
        property="twitter:image"
        content={`${
          process.env.NEXT_PUBLIC_DEV_API
            ? process.env.NEXT_PUBLIC_DEV_API
            : API_URL
        }/places/pic/image.png?key=${pageImage}`}
      />
    </Head>
  );
};

export default PageHeader;
