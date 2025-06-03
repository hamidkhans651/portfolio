
export default function DownloadOptions() {
    const resumeFiles = [
      { name: 'PDF', path: '/resume.pdf' },
      { name: 'Word', path: '/resume.docx' },
      { name: 'Plain Text', path: '/resume.txt' },
    ];
  
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Download Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {resumeFiles.map((file, index) => (
            <a
              key={index}
              href={file.path}
              download
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download {file.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
