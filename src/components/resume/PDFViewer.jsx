"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// IMPORTANT: Use this specific worker version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer-container">
      {/* <Document
        file="/resume.pdf" // Make sure this matches your file name exactly
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => {
          console.error("PDF error:", error);
          setError("Failed to display PDF. Please download it instead.");
        }}
        loading={<div className="p-4 text-center">Loading PDF...</div>}
      >
        {error ? (
          <div className="p-4 bg-red-100 text-red-700">
            {error} <a href="/resume.pdf" className="text-blue-600 underline">Download PDF</a>
          </div>
        ) : (
          Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
              className="pdf-page"
              renderTextLayer={false}
            />
          ))
        )}
      </Document> */}
      <div className="pdf-container">
        {error ? (
          <iframe
            src="/resume.pdf"
            className="w-full h-[80vh] border"
            title="PDF Fallback Viewer"
          />
        ) : (
          <PDFViewer />
        )}
      </div>
    </div>
  );
}
