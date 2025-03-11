import styled from "styled-components";
import FavouriteBtn from "../components/FavouriteBtn";

export const BookDetailContainer = styled.div`
  display: flex;
  gap: 1em;
  height: 80vh;
  align-items: center;
  padding: 0 5em;
  margin: 1em;
`;

export const DescContainer = styled.div`
  background-color: #edf5e0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
  border-radius: 2rem;
  padding: 1em;
  min-width: 30em;
  min-height: 25em;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const BookTitle = styled.h3`
  font-size: 2em;
`;

export const InfoLists = styled.ul`
  list-style-type: none;
`;

export const BDetailLinks = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
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
