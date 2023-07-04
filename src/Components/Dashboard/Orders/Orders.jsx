import Image from "next/image";
import React from "react";

export default function Orders() {
  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-xl">
        <div className="flex flex-wrap items-center justify-between mb-8 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap lg:flex-nowrap">
          <div className="flex items-center gap-x-4">
            <Image
              src="/assets/images/add-s.svg"
              width={20}
              height={20}
              alt="Cale"
            />
            <Image
              src="/assets/images/funnel.svg"
              width={20}
              height={20}
              alt="Cale"
            />
            <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-lg">
              <Image
                src="/assets/images/arrowsdown.png"
                width={20}
                height={20}
                alt="Cale"
              />
            </div>
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <span className="text-sm font-bold tracking-wider">2 Selected</span>
            <Image
              src="/assets/images/trash-r.svg"
              width={20}
              height={20}
              alt="Cale"
            />
            <Image
              src="/assets/images/dotsthree.svg"
              width={20}
              height={20}
              alt="Cale"
            />
          </div>
          <div className="relative">
          <Image
              src="/assets/images/search-s.svg"
              className="absolute top-2 left-2"
              width={20}
              height={20}
              alt="Cale"
            />
            <input type="text" className="h-8 px-8 text-sm border border-gray-200 border-solid rounded-lg outline-none w-60" placeholder="Search" />
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
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Date Order
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Costomer
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Order Status
                </th>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">$89</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">$31</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">$700</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide" r>
                  $120
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">$123</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">$698</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">$345</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wide">$621</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
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
                  #CM9802
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/calendar.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      A minute ago
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    <Image
                      src="/assets/images/3d03.svg"
                      width={15}
                      height={15}
                      alt="Cale"
                    />
                    <small className="text-xs font-bold tracking-wider">
                      Koray Okumus
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold tracking-wider">
                  Lodon United State
                </td>
                <td className="px-6 py-4 font-bold tracking-wider">$89</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#289D99] tracking-wider font-bold">
                      Filled
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
