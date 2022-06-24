import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface PDFViewerProps {
  pdfFile: any;
}

function PDFViewer({ pdfFile }: PDFViewerProps) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document
        file={'../../../pages/privacy-policy/privacy_policy.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            //  className={classes.pdfDocPage}
            key={`page_${index + 1}-${el || ''}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
}

export default PDFViewer;
