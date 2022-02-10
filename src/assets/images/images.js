import goku from "./goku.jpg";
import gohan from "./gohan.jpg";
import vegeta from "./vegeta.jpg";
import uniqid from "uniqid";

const images = [
  { name: "Goku", src: goku, id: uniqid() },
  { name: "Gohan", src: gohan, id: uniqid() },
  { name: "Vegeta", src: vegeta, id: uniqid() },
];

export default images;
