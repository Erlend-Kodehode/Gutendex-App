import { useContext } from "react";
import { bookContext } from "../App";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { setUrl, setShowFavorites, showFavorites, loading, apiURL } =
    useContext(bookContext);
  let searchValue = "";
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
  const { category } = useParams();
  return (
    <>
      <h1>Booklist</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUrl(
            category
              ? `${apiURL}?topic=${category}&${searchValue}`
              : `${apiURL}?${searchValue}`
          );
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) =>
            (searchValue = `search=${e.target.value.replace(" ", "%20")}`)
          }
        />
        <input type="submit" value="Search" />
      </form>
      {categories.map((cat, i) => (
        <Link
          key={i}
          to={
            loading
              ? `/category/${category}`
              : cat === "All"
              ? "/"
              : `/category/${cat}`
          }
        >
          {cat}
        </Link>
      ))}
      <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
        {"<3"}
      </button>
      <h2>{category}</h2>
    </>
  );
}
