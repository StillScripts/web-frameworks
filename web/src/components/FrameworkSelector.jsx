/** @jsxImportSource react */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { classNames } from "../utils/helpers";

const frameworks = [
  {
    name: "React",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Vue",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Svelte",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    name: "Solid",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Preact",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function FrameworkSelector({ component }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            )}
          >
            <span>Select Framework</span>
            <svg
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-36 -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-4 bg-white px-3 py-4 sm:gap-6 sm:p-4">
                  {frameworks.map((framework, id) => (
                    <a
                      key={framework.name + id}
                      href={`/${framework.name.toLowerCase()}/${component}`}
                      className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-sky-50"
                    >
                      <span className="flex items-center">
                        <img
                          src={framework.avatar}
                          alt={framework.name}
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block">{framework.name}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
