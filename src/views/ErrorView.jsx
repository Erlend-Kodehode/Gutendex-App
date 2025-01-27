import { useContext } from "react";
import { bookContext } from "../App";

export default function ErrorView() {
  //TODO do something here
  const { error } = useContext(bookContext);
  return <h1>Error: {error}</h1>;
}
