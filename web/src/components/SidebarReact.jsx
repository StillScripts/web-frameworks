import React from "react"
import { componentsList, getComponentTitle } from "../utils/components"

const Sidebar = ({ component, framework }) => (
  <div className="fixed hidden h-screen border-r border-gray-300 bg-blue-100 sm:block">
    <div className="flex flex-grow flex-col overflow-y-auto pt-5">
      <a className="cursor-pointer" href="/">
        <div className="group flex flex-shrink-0 items-center border-b border-gray-300 px-4 pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-blue-700 group-hover:text-blue-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            ></path>
          </svg>

          <span className="ml-2 text-lg font-medium text-gray-700 group-hover:text-gray-900">
            Home
          </span>
        </div>
      </a>
      <nav className="w-56 pr-4">
        <ul className="mt-5 flex flex-1 flex-col">
          {componentsList.map((c) => (
            <li>
              <a
                href={`/${framework.toLowerCase()}/${c}`}
                className={
                  "mt-1 cursor-pointer block rounded-r-md border-l-4 p-2 px-3 py-2 text-base font-medium text-gray-900 " +
                  (component === c
                    ? "border-l-blue-800 bg-blue-300"
                    : "border-transparent bg-blue-100 transition-colors duration-200 hover:border-l-blue-700 hover:bg-blue-200 focus:border-l-blue-800 focus:bg-blue-300")
                }
              >
                {getComponentTitle(c)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
)

export default Sidebar
