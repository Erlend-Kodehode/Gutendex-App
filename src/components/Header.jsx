import { useContext, useRef } from "react";
import { bookContext } from "../App";
import { Link } from "react-router-dom";

export default function Header() {
  const { setUrl, setShowFavorites, showFavorites, apiURL } =
    useContext(bookContext);
  let searchValue = useRef("");
  // let category = useRef("");
  const categories = [
    "All",
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];
  //TODO dynamisk kategori linker
  return (
    <>
      <h1>booklist</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUrl(`${apiURL}?${searchValue.current}`);
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => (searchValue.current = `search=${e.target.value}`)}
        />
        <input type="submit" value="Search" />
      </form>
      {categories.map((category) => (
        <Link to={category === "All" ? "/" : `/category/${category}`}>
          {category}
        </Link>
      ))}
      <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
        {"<3"}
      </button>
    </>
  );
}
