import { FaHeart } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiN8N } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <h1 className="text-xl">NeuraLetter Suite</h1>
        <div className="flex flex-row justify-center">
          <p className="mr-2">Made with</p>
          <FaHeart className="self-center" />
        </div>
        <p className="text-gray-600">December 2025</p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/mustafaleventfidanci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-xl" />
          </a>
          <a
            href="https://community.n8n.io/u/node/summary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiN8N className="text-xl" />
          </a>
          <a
            href="https://github.com/levent-86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
