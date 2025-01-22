import { useContext } from "react";
import { bookContext } from "../App";

export default function FavouriteBtn({ book }) {
  const { setFavoritesList, favoritesList } = useContext(bookContext);
  return (
    <button
      type="button"
      onClick={() =>
        setFavoritesList((prev) =>
          favoritesList.find((e) => e.title === book.title)
            ? prev.toSpliced(prev.indexOf(book), 1)
            : [...prev, book]
        )
      }
    >
      {favoritesList.find((e) => e.title === book.title) ? "<03" : "<3"}
    </button>
  );
}
