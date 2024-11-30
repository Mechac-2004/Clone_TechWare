import site_logo from './assets/site_logo.svg';

export function Navbar() {
  return (
    <div>
      <nav className="">
        <div className="mx-auto max-w-7xl py-5 px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <div>TECHNOLOGY</div>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src={site_logo} />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                    aria-current="page"
                  >
                    TECHNOLOGY
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                  >
                    GADGET
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                  >
                    SOFTWARE
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                  >
                    APPS
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                  >
                    GAMES
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-600"
                  >
                    PODCASTS
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full m-4 p-2"
              >
                <span className="text-purple-600">Subscribe</span>
              </button>

              <button
                type="button"
                className="relative rounded-full m-4 p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Sign in
              </button>

              <button
                type="button"
                className="relative rounded-full m-4 p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <i className="bx bx-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
