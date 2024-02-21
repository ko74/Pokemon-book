import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import ThemeButton from "./ThemeButton";
import { TopbarProps } from "../types";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/PokemonContext";

const Topbar = ({ themeButtonOnClick, getSearchString }: TopbarProps) => {
  const { color } = useContext(ThemeContext);
  const formattedColor = color?.replace(/\[|\]/g, "");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      getSearchString?.(searchQuery);
    }, 2000);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, getSearchString]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex items-center justify-between px-5 py-2 h-20 bg-white shadow">
      <Link to={"/"}>
        <div className="flex items-center gap-3 ">
          <Logo />

          <h1 className="text-2xl font-semibold">
            Poke
            <span
              style={{ color: formattedColor ? `${formattedColor}` : "#e85382" }}
            >
              book
            </span>
          </h1>
        </div>
      </Link>

      <div className="hidden md:block w-1/3">
        <Search
          prepend
          onSubmit={(param) => getSearchString?.(param)}
          onChange={handleSearchChange} 
        />
      </div>

      <ThemeButton color={color} onClick={themeButtonOnClick} />
    </div>
  );
};

const Logo = () => (
  <img
    src="/img/PokemonLogo.png"
    alt="Pokemon Logo"
    className="h-28 w-full pt-5"
  />
);

export default Topbar;
