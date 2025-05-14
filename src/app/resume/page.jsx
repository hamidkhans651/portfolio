"use client";

import PDFViewer from "@/components/resume/PDFViewer";
import DownloadOptions from "@/components/resume/DownloadOptions";
import Head from "next/head";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>My Resume | Portfolio</title>
        <meta
          name="description"
          content="View and download my professional resume"
        />
      </Head>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            &larr; Back to Portfolio
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Resume
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            View online or download a copy
          </p>
        </div>

        {/* PDF Viewer Component */}
        <div className="mb-8 border rounded-lg shadow-lg overflow-hidden">
          <PDFViewer filePath="/resume.pdf" />
        </div>

        {/* Download Options Component */}
        <DownloadOptions />
      </div>
    </div>
  );
}