import { useContext, useRef } from "react";
import { bookContext } from "../App";

export default function Header() {
  const { setUrl, setShowFavorites, showFavorites, apiURL } =
    useContext(bookContext);
  let searchValue = useRef("");
  let category = useRef("");
  //TODO dynamisk kategori linker
  return (
    <>
      <h1>booklist</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUrl(`${apiURL}?${searchValue.current}&${category.current}`);
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
      <select
        name="category"
        id="category"
        onChange={(e) => {
          category.current =
            e.target.value === "All" ? "" : `topic=${e.target.value}`;
          setUrl(`${apiURL}?${category.current}&${searchValue.current}`);
        }}
      >
        <option value="All">All</option>
        <option value="Fiction">Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Thriller">Thriller</option>
        <option value="Romance">Romance</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Morality">Morality</option>
        <option value="Society">Society</option>
        <option value="Power">Power</option>
        <option value="Justice">Justice</option>
        <option value="Adventure">Adventure</option>
        <option value="Tragedy">Tragedy</option>
        <option value="War">War</option>
        <option value="Philosophy">Philosophy</option>
      </select>
      <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
        {"<3"}
      </button>
    </>
  );
}
