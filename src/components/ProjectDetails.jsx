import React from 'react'

const ProjectDetails = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay background, not the modal content
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed top-[54px] inset-x-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-40"
            onClick={handleOverlayClick}
        >
            <div className="bg-slate-200 dark:bg-gray-800 rounded-lg max-w-4xl w-full p-4 relative max-h-[calc(100vh-40px)] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Project Content */}
                <div className="space-y-3">
                    {/* Project Title */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                    </h2>

                    {/* Project Image */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    {/* Long Description */}
                    <p className="text-gray-600 dark:text-gray-300">
                        {project.details.longDescription}
                    </p>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.details.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Key Features
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                            {project.details.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                View Live Site
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails