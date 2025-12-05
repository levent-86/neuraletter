import { SiGithub, SiLinkedin, SiN8N } from 'react-icons/si';
import { IoShareSocial } from 'react-icons/io5';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-62 p-2 shadow"
            >
              <li>
                <a className="link link-hover" href="/">
                  Homepage
                </a>
              </li>
              <li>
                <details>
                  <summary className="link link-hover">How to</summary>
                  <ul className="p-2 bg-base-100 z-1">
                    <li>
                      <a className="link link-hover" href="/scrap">
                        NeuraLetter Suite: Scrap
                      </a>
                    </li>
                    <li>
                      <a className="link link-hover" href="/workflow">
                        NeuraLetter Suite: Workflow
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="link link-hover" href="/faq">
                  F. A. Q.
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            NeuraLetter Suite
          </a>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoShareSocial className="text-lg" />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow flex flex-row w-35"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/mustafaleventfidanci/"
                  className="btn btn-ghost btn-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin className="text-lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://community.n8n.io/u/node/summary"
                  className="btn btn-ghost btn-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiN8N className="text-lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/levent-86"
                  className="btn btn-ghost btn-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-lg" />
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex">
            <li>
              <a
                href="https://www.linkedin.com/in/mustafaleventfidanci/"
                className="btn btn-ghost btn-circle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="text-lg" />
              </a>
            </li>
            <li>
              <a
                href="https://community.n8n.io/u/node/summary"
                className="btn btn-ghost btn-circle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiN8N className="text-lg" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/levent-86"
                className="btn btn-ghost btn-circle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-lg" />
              </a>
            </li>
          </ul>
        </div>

        <ThemeSwitcher />
      </div>

      <Outlet />
    </>
  );
};
