import { useNav } from "../customHooks/useNav";
import { useEffect, useState } from "react";
import specialties from "../assets/specialties.JPG";
import "./views.css";

const words = [
  "Whiskey Sour",
  "Amaretto Sour",
  "Moscow Mule",
  "Espresso Martini",
];

const Drinks = () => {
  const drinksRef = useNav("Drinks");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (
      index === words.length - 1 /* index = end of list */ &&
      subIndex === words[index].length + 1 /* subindex = length of last word */
    ) {
      setIndex(0);
      setSubIndex(0); /*make it infinite */
      return; /* dont do anything, everything is typed */
    }

    if (
      subIndex ===
        words[index].length +
          1 /** subindex = currents word lenght + 1 - word is typed */ &&
      index !== words.length - 1 /** not yet end of list */ &&
      !reverse /* false */
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      /* word was deleted & reverse true*/
      setReverse(false); /* type forward */
      setIndex((prev) => prev + 1); /* next word in list */
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(
        (prev) => prev + (reverse ? -1 : 1)
      ); /* change speed depending on reverse is true or false */
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]); /* changing of these rerenders component */

  return (
    <section className="middleSection" ref={drinksRef} id="drinksContainer">
      <img src={specialties} alt="board with handwriting" />
      <div>
        <h3 className="specialties-header">
          SPECIALTIES <span className="drink-span">for conoisseurs</span>
        </h3>
        <p className="animation">{`${words[index].substring(0, subIndex)}`}</p>
        <span className="material-symbols-outlined">local_bar</span>
      </div>
    </section>
  );
};

export default Drinks;
