import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { SearchProps } from "../types";

const Search: React.FC<SearchProps> = ({
  prepend,
  append,
  showBorder,
  classes,
  onSubmit,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Call onChange prop with the current value
    onChange?.(value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(searchTerm);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={clsx(
        "flex items-center px-4 rounded-full w-full",
        classes,
        showBorder ? "border-[#E85382] border-[8px] py-2" : "border "
      )}
    >
      {prepend && (
        <div className=" h-5 w-5 flex items-center justify-center">
          <MagnifyingGlassIcon className="h-4 w-4 text-[#E1E1E1] mr-1" />
        </div>
      )}

      <input
        type="text"
        placeholder="Enter Pokémon name"
        className="border-none bg-transparent rounded-md py-2 focus:outline-none focus:border-blue-500 w-full"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />

      {append && (
        <button
          type="submit"
          className=" h-10 w-10 flex items-center justify-center bg-[#E85382] rounded-full"
        >
          <MagnifyingGlassIcon className="h-4 w-4 text-white" />
        </button>
      )}
    </form>
  );
};

export default Search;
