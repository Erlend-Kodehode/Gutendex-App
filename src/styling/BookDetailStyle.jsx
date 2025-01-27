import styled from "styled-components";
import FavouriteBtn from "../components/FavouriteBtn";

export const BookDetailContainer = styled.div`
  display: flex;
  gap: 1em;
  height: 80vh;
  align-items: center;
  padding: 2em;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const InfoLists = styled.ul`
  list-style-type: none;
`;

export const DetailFavBtn = styled(FavouriteBtn)`
  padding: 0.9em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  width: 3.9em;
  background-color: #cfe9c3;
  &:hover {
    background-color: #bed8b2;
  }
`;
