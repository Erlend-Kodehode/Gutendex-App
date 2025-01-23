import { useContext } from "react";
import { bookContext } from "../App";

export default function Favourites({ className }) {
  const { showFavorites, favoritesList, setFavoritesList } =
    useContext(bookContext);
  return (
    showFavorites && (
      <dialog open className={className}>
        <h3>Favorites</h3>
        <ul>
          {favoritesList.map((book) => (
            <li key={book.id}>
              <p>{book.title}</p>
              <img src={book.formats["image/jpeg"]} alt="Book Cover" />
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
