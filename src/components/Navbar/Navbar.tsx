import { SiGithub, SiLinkedin, SiN8N } from 'react-icons/si';
import { IoShareSocial } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start text-xl">NeuraLetter Suite</div>

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
                  href="https://github.com/levent-86/scrap"
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
                href="https://github.com/levent-86/scrap"
                className="btn btn-ghost btn-circle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};
