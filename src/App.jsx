import { Outlet, useParams } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";

export const bookContext = createContext();

export default function App() {
  const apiURL = "https://gutendex.com/books";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //TODO rename
  const [bookList, setBooklist] = useState([]);
  const { category, bookID } = useParams();
  const [url, setUrl] = useState(
    category
      ? `${apiURL}?topic=${category}`
      : bookID
      ? `${apiURL}/${bookID}`
      : apiURL
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const storedFavorites = localStorage.getItem("favoritesList");
  const [favoritesList, setFavoritesList] = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  useEffect(() => {
    if (favoritesList.length > 0)
      localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
    else localStorage.removeItem("favoritesList");
  }, [favoritesList]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Error fetching data: ${response.status}`);

        const bookData = await response.json();
        setBooklist(bookData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <bookContext.Provider
      value={{
        bookList,
        error,
        setError,
        loading,
        setLoading,
        url,
        setUrl,
        showFavorites,
        setShowFavorites,
        favoritesList,
        setFavoritesList,
        apiURL,
      }}
    >
      <Header />
      <Outlet />
    </bookContext.Provider>
  );
}
