import { useContext, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import {
  LinkContainer,
  CatLink,
  StyledHeader,
  TitleSearchContainer,
  SearchBar,
  SearchForm,
} from "../styling/HeaderStyle";

export default function Header() {
  const { setUrl, setShowFavorites, showFavorites, loading, apiURL } =
    useContext(bookContext);
  const [searchValue, setSearchValue] = useState("");
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
              setSearchValue(`search=${e.target.value.replace(" ", "%20")}`)
            }
          />
        </SearchForm>
        <button type="button" onClick={() => setShowFavorites(!showFavorites)}>
          {"<3"}
        </button>
      </TitleSearchContainer>
      <LinkContainer>
        {categories.map((cat, i) => (
          <CatLink
            color={
              //TODO fix when in detail view
              cat === category || (cat === "All" && category === undefined)
                ? "red"
                : "black"
            }
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
        ))}
      </LinkContainer>
      {/* <h2>{category === undefined ? "All" : category}</h2> */}
    </StyledHeader>
  );
}
