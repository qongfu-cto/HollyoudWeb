// import React, { useState } from 'react';
// import LandingPageLayout from 'components/Layouts/landingPageLayout';
// import PDFViewer from 'components/Organisms/PDFViewer';
// import QLandingPageLogo from 'components/Molecules/QLandingPageLogo';

// function PrivacyPolicy() {
//   const [file, setFile] = useState();
//   return (
//     <LandingPageLayout>
//       <PDFViewer />
//     </LandingPageLayout>
//   );
// }

// export default PrivacyPolicy;

import React, { useState } from 'react';
import _ from 'lodash';
import { NextPage } from 'next';
//import ExplorerLayout from "../components/Layout/ExplorerLayout";
///import useStyles from "../Styles/exploreSearch";

// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { Document, Page } from 'react-pdf';
import { Container } from '@mui/material';
//import { IS_SERVER } from "../constants";

interface Props {}

const PrivacyPolicies: NextPage<Props> = () => {
  // const classes = useStyles();
  // const [numPages, setNumPages] = useState(0);
  // const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
  //   setNumPages(numPages);
  // };

  return (
    <Container
    //className={classes.pdfContainer}
    >
      {/* {typeof window === 'undefined' ? (
        <div>Loading...</div>
      ) : ( */}
        <React.Fragment>
          {/* <Document
            //className={classes.pdfDocument}
            file={'./privacy_policy.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                // className={classes.pdfDocPage}
                key={`page_${index + 1}-${el || ''}`}
                pageNumber={index + 1}
              />
            ))}
          </Document> */}
        </React.Fragment>
      {/* )} */}
    </Container>
  );
};

export default PrivacyPolicies;
