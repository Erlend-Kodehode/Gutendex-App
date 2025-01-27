import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDialog = styled.dialog`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4% 2% 0 auto;
  border: 2px #e4f0d1 solid;
  background-color: #f6faf0;
  border-radius: 1em;
  padding: 1em;
  overflow-y: auto;
  max-height: 88vh;
  max-width: 95vw;
  @media only screen and (max-width: 1000px) {
    margin-top: 6%;
  }

  @media only screen and (max-width: 650px) {
    margin-top: 9%;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 18%;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 24%;
  }
`;

export const FavouritesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
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
  background-color: #cfe9c3;
  &:hover {
    background-color: #bed8b2;
  }
`;

export const UnFavImg = styled.img`
  filter: invert(24%) sepia(83%) saturate(3031%) hue-rotate(349deg)
    brightness(107%) contrast(103%);
`;
