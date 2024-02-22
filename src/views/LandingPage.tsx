import { useState } from "react";
import Search from "../components/Search";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (param: string) => {
    setSearchString(param);
    navigate("/list");
  };

  console.log(searchString);
  return (
    <div className="h-screen w-full flex flex-col gap-5  items-center justify-center">
      <>
        <img src="/img/PokemonLogo.png" alt="Pokemon Logo" />
      </>

      <>
        <span className="text-5xl font-semibold">
          Poké<span className="text-primary-main">book</span>
        </span>
      </>

      <>
        <p className="text-center text-wrap">
          Largest Pokémon index with information <br />
          about every Pokemon you canthink of.
        </p>
      </>
      <div className="px-4 w-full md:max-w-2xl mx-auto md:p-4 ">
        <Search
          showBorder
          append
          classes="justify-between"
          onSubmit={(param) => handleSubmit(param)}
        />
      </div>

      <>
        <Link
          to="/list"
          className="underline cursor-pointer underline-offset-2"
        >
          view all
        </Link>
      </>
    </div>
  );
};

export default LandingPage;
