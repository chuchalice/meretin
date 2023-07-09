import classes from "./projects.module.scss";
import Card from "../../components/Card/Card";
import Pocmon from "../../assets/pocmon.png";
import Crypterra from "../../assets/crypterra.png";
import Adev from "../../assets/adev.png";
import { ICard } from "../../Interface/Interface";
import { useState } from "react";

const Projects = () => {
  const [cards, setCards] = useState([
    {
      pin: "LATEST",
      img: Pocmon,
      name: "Pocmon Lootboxes",
      description:
        "A marketplace specialized in sales of NFT-themed collections for fandoms of various games, films and other elements of a pop culture",
      styleName: "pocmon",
    },
    {
      pin: "COMPLICATED UX & LEAD POS",
      img: Crypterra,
      name: "Crypterra",
      description:
        "A P2E Crypto game with huge mechanical robots, detailed biomes and its own currency",
      styleName: "crypterra",
    },
    {
      pin: "IDENTICS, UI & LEAD POS",
      img: Adev,
      name: "Another Dev",
      description:
        "A young company focused on a blockchain, smart contracts and development in the broadest sense of the word.",
      styleName: "adev",
      adev: true,
    },
  ]);

  return (
    <article className={classes["article-wrapper"]}>
      <h1 className={classes.article}>
        Library of projects in which I took a leading position as a designer
      </h1>
      <div className={classes["card-wrapper"]}>
        {cards.map((el: ICard) => (
          <Card {...el} styleName={el.styleName} />
        ))}
      </div>
    </article>
  );
};
export default Projects;
