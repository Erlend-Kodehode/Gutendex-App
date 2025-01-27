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
  ButtonImg,
  FavListBtn,
  SearchBtn,
} from "../styling/HeaderStyle";

import Favourites from "../components/Favourites";
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
    <StyledHeader>
      <Favourites />
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
          <SearchBtn type="submit">Search</SearchBtn>
          <SearchBar
            type="text"
            name="search"
            id="search"
            onChange={(e) =>
              setSearchValue(`search=${e.target.value.replace(" ", "%20")}`)
            }
          />
        </SearchForm>
        <FavListBtn
          type="button"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <ButtonImg src={filledHeart} />
        </FavListBtn>
      </TitleSearchContainer>
      <LinkContainer>
        {categories.map((cat, i) => (
          <CatLink
            $selected={
              cat === category || (cat === "All" && !category && !bookID)
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
