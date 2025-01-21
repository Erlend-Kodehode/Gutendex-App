import { useContext } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import {
  LinkContainer,
  CatLink,
  StyledHeader,
  CurrentCatLink,
  TitleSearchContainer,
  SearchBar,
  SearchForm,
} from "../styling/HeaderStyle";

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

  // TODO onchange fix type while loading
  return (
    <StyledHeader>
      <TitleSearchContainer>
        <h1>Booklist</h1>
        <SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            setUrl(
              category
                ? `${apiURL}?topic=${category}&${searchValue}`
                : `${apiURL}?${searchValue}`
            );
          }}
        >
          <button type="submit">Search</button>
          <SearchBar
            type="text"
            name="search"
            id="search"
            onChange={(e) =>
              (searchValue = `search=${e.target.value.replace(" ", "%20")}`)
            }
          />
        </SearchForm>
        <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
          {"<3"}
        </button>
      </TitleSearchContainer>
      <LinkContainer>
        {categories.map((cat, i) =>
          cat === category || (cat === "All" && category === undefined) ? (
            <CurrentCatLink
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
            </CurrentCatLink>
          ) : (
            <CatLink
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
            </CatLink>
          )
        )}
      </LinkContainer>
      <h2>{category === undefined ? "All" : category}</h2>
    </StyledHeader>
  );
}
