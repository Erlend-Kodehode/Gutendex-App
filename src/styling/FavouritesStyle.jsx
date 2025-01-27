import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDialog = styled.dialog`
  z-index: 2;
  margin: 3% 2% 0 auto;
  border: 2px #e4f0d1 solid;
  background-color: #f6faf0;
  border-radius: 1em;
  padding: 1em;
  overflow-y: auto;
  max-height: 88vh;
`;

export const FavouritesList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$favNum},
    ${(props) => 100 / props.$favNum - 2 + "%"}
  );
  justify-content: center;
  gap: 1em;
`;

export const FavItem = styled.div`
  position: relative;
  height: 100%;
`;

export const FavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  height: 100%;
`;

export const FavBookTitle = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 13em;
  color: black;
  text-align: center;
`;

export const UnFavBtn = styled.button`
  padding: 0.9em;
  position: absolute;
  right: 5%;
  bottom: 1em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  /* TODO adjust color maybe */
  background-color: #cfe9c3;
  &:hover {
    background-color: #bed8b2;
  }
`;

export const UnFavImg = styled.img`
  filter: invert(24%) sepia(83%) saturate(3031%) hue-rotate(349deg)
    brightness(107%) contrast(103%);
`;
