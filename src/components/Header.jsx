import { useContext, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import filledHeart from "/icons/mdi--heart.svg";
import {
  LinkContainer,
  CatLink,
  StyledHeader,
  TitleSearchContainer,
  SearchBar,
  SearchForm,
  StyledFavorites,
  ButtonImg,
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
  const { category, bookID } = useParams();

  return (
    <>
      <StyledFavorites />
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
          <button
            type="button"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            <ButtonImg src={filledHeart} />
          </button>
        </TitleSearchContainer>
        <LinkContainer>
          {categories.map((cat, i) => (
            <CatLink
              color={
                cat === category || (cat === "All" && !category && !bookID)
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
    </>
  );
}
