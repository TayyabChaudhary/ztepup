import React from "react";
import Image from "next/image";
export default function EditGeneralInformation() {
  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center mb-6 gap-x-2">
          <button
            type="buton"
            className="flex items-center px-2 py-2 text-base font-bold tracking-wider gap-x-1"
          >
            Products
          </button>
          <button
            type="buton"
            className="flex items-center px-6 py-2 text-base font-bold tracking-wider text-gray-400 gap-x-2"
          >
            Collections
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-8 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap lg:flex-nowrap">
          <div className="flex items-center gap-x-4">
            <button
              type="buton"
              className="flex items-center px-2 py-2 text-xs font-bold tracking-wider border border-gray-200 border-solid rounded gap-x-2"
            >
              <Image
                src="/assets/images/adjustments.svg"
                width={20}
                height={20}
                alt="Cale"
              />
              Filter
            </button>
            <button
              type="buton"
              className="flex items-center px-6 py-2 text-xs font-bold tracking-wider border border-gray-200 border-solid rounded gap-x-2"
            >
              Unpublished
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="relative">
              <Image
                src="/assets/images/search-s.svg"
                className="absolute top-2 left-2"
                width={20}
                height={20}
                alt="Cale"
              />
              <input
                type="text"
                className="px-8 text-sm border border-gray-200 border-solid rounded-lg outline-none h-9 w-60"
                placeholder="Find something"
              />
            </div>
            <button
              type="buton"
              className="flex items-center px-6 py-2 text-xs font-bold tracking-wider border border-gray-200 border-solid rounded gap-x-2"
            >
              <Image
                src="/assets/images/plus.svg"
                width={20}
                height={20}
                alt="Cale"
              />
              New Product
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-white">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Collection
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Availability
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Inventory
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide" r>
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-xs font-bold tracking-wider text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/images/rectangle-1665.png"
                      width={20}
                      height={20}
                      alt="Cale"
                    />
                    <span>Classic Bathrobe</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-medium tracking-wider text-gray-400">
                      Limited collab with stussy
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <small className="text-xs font-bold tracking-wider">
                      Website
                    </small>
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      + 3 more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  400 in stock for 4 variants
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">
                  <button
                    type="buton"
                    className="flex items-center px-6 py-2 text-xs tracking-wider border border-gray-200 border-solid rounded gap-x-2"
                  >
                    <div className="w-2 h-2 bg-[#289D99] rounded-full"></div>
                    Published
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
