import { useContext } from "react";
import { bookContext } from "../App";

export default function Favourites() {
  const { showFavorites, favoritesList, setFavoritesList } =
    useContext(bookContext);
  //TODO local storage
  return (
    showFavorites && (
      <dialog open>
        <h3>Favorites</h3>
        <ul>
          {favoritesList.map((book) => (
            <li key={book.id}>
              {book.title}
              <button
                type="button"
                onClick={() =>
                  setFavoritesList((prev) =>
                    prev.toSpliced(prev.indexOf(book), 1)
                  )
                }
              >
                {"</3"}
              </button>
            </li>
          ))}
        </ul>
      </dialog>
    )
  );
}
