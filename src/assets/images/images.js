import goku from "./goku.jpg";
import gohan from "./gohan.jpg";
import vegeta from "./vegeta.jpg";
import androide from "./18.jpg";
import broly from "./broly.jpeg";
import bulma from "./bulma.jpeg";
import gogeta from "./gogeta.jpg";
import goten from "./goten.jpeg";
import krillin from "./krillin.png";
import trunks from "./trunks.jpg";
import vegito from "./vegito.jpg";
import yamcha from "./yamcha.png";
import piccolo from "./piccolo.jpg";
import roshi from "./roshi.png";

import uniqid from "uniqid";

const images = [
  { name: "Goku", src: goku, id: uniqid() },
  { name: "Gohan", src: gohan, id: uniqid() },
  { name: "Vegeta", src: vegeta, id: uniqid() },
  { name: "Android 18", src: androide, id: uniqid() },
  { name: "Broly", src: broly, id: uniqid() },
  { name: "Bulma", src: bulma, id: uniqid() },
  { name: "Gogeta", src: gogeta, id: uniqid() },
  { name: "Goten", src: goten, id: uniqid() },
  { name: "Krillin", src: krillin, id: uniqid() },
  { name: "Trunks", src: trunks, id: uniqid() },
  { name: "Vegito", src: vegito, id: uniqid() },
  { name: "Yamcha", src: yamcha, id: uniqid() },
  { name: "Piccolo", src: piccolo, id: uniqid() },
  { name: "Master Roshi", src: roshi, id: uniqid() },
];

export default images;
