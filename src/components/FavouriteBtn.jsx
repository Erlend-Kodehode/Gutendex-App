import { useContext } from "react";
import { bookContext } from "../App";
import filledHeart from "/icons/mdi--heart.svg";
import emptyHeart from "/icons/mdi-light--heart.svg";
import { ButtonImg } from "../styling/HeaderStyle";

export default function FavouriteBtn({ book, className }) {
  const { setFavoritesList, favoritesList } = useContext(bookContext);

  return (
    <button
      className={className}
      type="button"
      onClick={() =>
        setFavoritesList((prev) => {
          const bookInList = prev.find((e) => e.id === book.id);
          return bookInList
            ? prev.toSpliced(prev.indexOf(bookInList), 1)
            : [...prev, book];
        })
      }
    >
      <ButtonImg
        src={
          favoritesList.find((e) => e.id === book.id) ? filledHeart : emptyHeart
        }
      />
    </button>
  );
}
