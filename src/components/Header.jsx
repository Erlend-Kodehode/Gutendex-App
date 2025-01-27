import { useContext, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import filledHeart from "/icons/mdi--heart.svg";
import cross from "/icons/maki--cross.svg";
import {
  LinkContainer,
  CatLink,
  StyledHeader,
  SearchContainer,
  SearchBar,
  SearchForm,
  ButtonImg,
  FavListBtn,
  SearchBtn,
  TitleContainer,
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
      <TitleContainer>
        <h1>Booklist</h1>
        <SearchContainer>
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
            <ButtonImg src={showFavorites ? cross : filledHeart} />
          </FavListBtn>
        </SearchContainer>
      </TitleContainer>
      <LinkContainer>
        {categories.map((cat, i) => (
          <CatLink
            $selected={
              cat === category || (cat === "All" && !category && !bookID)
            }
            key={i}
            to={
              loading
                ? `/Gutendex-App/category/${category}`
                : cat === "All"
                ? "/Gutendex-App/"
                : `/Gutendex-App/category/${cat}`
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
