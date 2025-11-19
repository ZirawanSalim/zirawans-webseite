import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-20 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-3">
          © {new Date().getFullYear()} Zirawan Salim
        </h2>
        <p className="text-white mb-6">
          Portfolio – Web Development & Digital Product Design
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/deinGithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.39-3.88-1.39-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.31-5.23-5.83 0-1.29.46-2.35 1.18-3.18-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.21a10.9 10.9 0 0 1 5.8 0c2.2-1.52 3.17-1.21 3.17-1.21.63 1.57.23 2.73.12 3.02.73.83 1.18 1.89 1.18 3.18 0 4.53-2.68 5.53-5.24 5.82.42.37.8 1.1.8 2.23v3.3c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/deinLinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-.02 6.5H7v11H4.96v-11ZM9 10h2v1.6h.03c.28-.53 1.03-1.1 2.12-1.1 2.26 0 2.85 1.48 2.85 3.4V21h-2v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.36-2 2.75V21H9V10Z" />
            </svg>
          </a>
          <Link to= "/contact"
            className="hover:text-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.01l-10 6L2 4.01V4Zm0 3.236V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.236l-10 6-10-6Z"/>
            </svg>
          </Link>
          <a 
            href="https://www.behance.net/gallery/229919983/Case-Study-UIUX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 4 24 24"
              className="w-15 h-15"
            >
              <path d="M7.2 10.4c.95 0 1.7-.77 1.7-1.72 0-.96-.75-1.73-1.7-1.73H4v3.45h3.2Zm.1 1.53H4v4.32h3.3c1.18 0 2.1-.97 2.1-2.16 0-1.2-.92-2.16-2.1-2.16ZM12.8 6.95h4.9v1.02h-4.9V6.95Zm5.4 6.14c-.07-.9-.63-1.76-1.96-1.76-1.28 0-2.04.82-2.13 1.76h4.09Zm-4.12 1.14c.1 1.14.92 1.71 1.94 1.71.77 0 1.43-.39 1.74-.94h1.43c-.5 1.6-1.86 2.53-3.17 2.53-2.34 0-3.94-1.64-3.94-4s1.6-4 3.94-4c2.6 0 3.9 2.03 3.9 4.24v.46h-5.84Z" />
            </svg>
          </a>
        </div>
         <p className="text-gray-600 text-sm">
        </p>
      </div>
    </footer>
  );
}