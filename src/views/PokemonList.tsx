import { useContext, useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import useModal from "../hooks/modalHook";
import PokemonDetails from "./PokemonDetails";
import ThemeModal from "../components/ThemeModal";
import { PokemonContext, ThemeContext } from "../context/PokemonContext";
import { getPokemon } from "../api/requests";

const PokemonList = () => {
  const { ModalComponent, updateModalStates, closeModal } = useModal();
  const { pokemonRequest } = useContext(PokemonContext);
  const { color } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState<number>(8);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTopbarFixed, setIsTopbarFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showPokemonDetailsModal = async (pokemon: any) => {
    const details = await getPokemon(pokemon.name);
    updateModalStates({
      isCenter: false,
      show: true,
      children: (
        <div className="p-3">
          <PokemonDetails data={details} onBack={closeModal} />
        </div>
      ),
    });
  };

  const showThemeModal = () => {
    updateModalStates({
      isCenter: true,
      show: true,
      children: (
        <ThemeModal
          closeModal={closeModal}
          getThemeColor={(color) => console.log(color)}
        />
      ),
    });
  };

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const filteredPokemons = pokemonRequest?.results?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPokemons = filteredPokemons?.length ?? 0;
  const startIdx = currentPage * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedPokemons = filteredPokemons?.slice(startIdx, endIdx);

  return (
    <div className="w-full bg-secondary-main overlay">
      <div
        style={{
          position: isTopbarFixed ? "fixed" : "static",
          width: "100%",
          zIndex: 50,
          transition: "top 0.3s ease-in-out",
          top: isTopbarFixed ? "0" : "-80px",
        }}
      >
        <Topbar
          themeButtonOnClick={showThemeModal}
          getSearchString={(query: string) => setSearchQuery(query)}
          className={isTopbarFixed ? "sticky top-0 z-50" : ""}
        />
      </div>
      <section className="flex flex-col justify-center md:min-h-[calc(100vh-80px)] pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full md:max-w-7xl mx-auto">
          {paginatedPokemons?.map((pokemon: any, index: number) => (
            <Card
              onView={() => showPokemonDetailsModal(pokemon)}
              showHover
              key={index}
              name={pokemon.name ?? ""}
              img={"/img/PokemonLogo.png"}
              typeIcon={""}
              typeText={""}
              hoverColor={color}
            />
          ))}
        </div>

        <div className="w-full md:max-w-7xl mx-auto p-4">
          <Pagination
            totalItems={totalPokemons}
            itemsPerPage={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPageSizeChange={(newPageSize: number) => {
              setPageSize(newPageSize);
              setCurrentPage(0);
            }}
          />
        </div>
      </section>
      <ModalComponent />
    </div>
  );
};

export default PokemonList;
