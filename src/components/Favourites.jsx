import { useContext, useState } from "react";
import { bookContext } from "../App";
import {
  StyledDialog,
  FavouritesList,
  FavBookTitle,
  FavLink,
  UnFavBtn,
  FavItem,
  UnFavImg,
  BackgroundClick,
} from "../styling/FavouritesStyle";
import emptyHeart from "/icons/mdi-light--heart.svg";
import filledHeart from "/icons/mdi--heart.svg";

export default function Favourites() {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const { showFavorites, favoritesList, setFavoritesList, setShowFavorites } =
    useContext(bookContext);

  return (
    showFavorites && (
      <>
        <BackgroundClick onClick={() => setShowFavorites(false)} />
        <StyledDialog open>
          <h3>Favorites</h3>
          <FavouritesList>
            {favoritesList.length ? (
              favoritesList.map((book) => (
                <li key={book.id}>
                  <FavItem>
                    <FavLink
                      to={`/Gutendex-App/book/${book.id}`}
                      title={book.title}
                    >
                      <FavBookTitle>{book.title}</FavBookTitle>
                      <img src={book.formats["image/jpeg"]} alt="Book Cover" />
                    </FavLink>
                    <UnFavBtn
                      type="button"
                      onMouseEnter={() => setHoveredBtn(book.id)}
                      onMouseLeave={() => setHoveredBtn(null)}
                      onClick={() => {
                        setFavoritesList((prev) =>
                          prev.toSpliced(prev.indexOf(book), 1)
                        );
                        setHoveredBtn(null);
                      }}
                    >
                      <UnFavImg
                        src={hoveredBtn === book.id ? emptyHeart : filledHeart}
                      />
                    </UnFavBtn>
                  </FavItem>
                </li>
              ))
            ) : (
              <p>Favorites list is empty</p>
            )}
          </FavouritesList>
        </StyledDialog>
      </>
    )
  );
}
