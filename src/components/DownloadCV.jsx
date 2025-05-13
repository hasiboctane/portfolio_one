import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa'

const DownloadCV = () => {
    const [showAlert, setShowAlert] = useState(false)

    const handleDownload = () => {
        setShowAlert(true)
    }
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/my_resume_2025.pdf';
        // link.download = 'Hasib_Islam_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowAlert(false);
    };
    return (
        <>
            <button onClick={handleDownload} className="text-center text-fuchsia-600 hover:text-fuchsia-100 hover:bg-fuchsia-600  border border-fuchsia-500 rounded-md px-1.5 py-1.5 dark:text-fuchsia-600 dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-100 dark:hover:bg-opacity-75 transition duration-300">
                <span className='flex gap-2'>Resume <FaDownload className="w-5 h-5" /></span>
            </button>
            {/* Alert */}
            {showAlert && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 overflow-y-auto h-full w-full z-10 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-900 dark:text-white p-6 rounded-md shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Download Resume</h2>
                        <p className="mb-4">Do you want to download my resume?</p>
                        <div className="flex justify-between">
                            <button
                                className="mr-2 px-3 py-1.5 bg-gray-300 rounded hover:bg-gray-400 dark:text-slate-900"
                                onClick={() => setShowAlert(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-3 py-1.5 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700"
                                onClick={downloadCV}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DownloadCV
