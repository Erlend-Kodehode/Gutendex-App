import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Favourites from "./components/Favourites";
import { createContext, useEffect, useState } from "react";

export const bookContext = createContext();

export default function App() {
  const apiURL = "https://gutendex.com/books";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookList, setBooklist] = useState([]);
  const [url, setUrl] = useState(apiURL);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

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
        setUrl,
        showFavorites,
        setShowFavorites,
        favoritesList,
        setFavoritesList,
        apiURL,
      }}
    >
      <Header />
      <Favourites />
      <Outlet />
    </bookContext.Provider>
  );
}
