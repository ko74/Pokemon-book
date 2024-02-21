import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { PaginationProps } from "../types";
import { ThemeContext } from "../context/PokemonContext";
import { formattedColor } from "../functions";

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const [pageSize, setPageSize] = useState<number>(itemsPerPage);
  const totalPages: number = Math.ceil(totalItems / pageSize);
  const { color } = useContext(ThemeContext);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    onPageChange(newPage);
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize: number = parseInt(event.target.value, 10);
    setPageSize(newSize);
    onPageSizeChange(newSize);
  };

  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between p-5">
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={<ChevronLeftIcon className="h-4 w-4" />}
        nextLabel={<ChevronRightIcon className="h-4 w-4 " />}
        activeLinkClassName="active"
        breakClassName="break-me"
        pageClassName="page-me"
      />

      <div className="relative inline-block">
        <div className="flex items-center justify-between border rounded p-1 cursor-pointer gap-5 h-10 w-fit bg-secondary-main">
          <span className="px-4 py-1 bg-white rounded">{pageSize}</span>

          <ChevronDownIcon className="h-5 w-5" />
        </div>

        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full appearance-none bg-transparent"
        >
          <option className="" value="8">8</option>
          <option className="" value="12">12</option>
          <option className="" value="14">14</option>
          <option className="" value="24">24</option>
        </select>
      </div>

      <style>{`
        .pagination li.active {
          background-color: ${formattedColor(color)};
        }
      `}</style>
    </div>
  );
};

export default Pagination;
