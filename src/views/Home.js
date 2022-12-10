import { useNav } from "../customHooks/useNav";
import DenisCloseUp from "../assets/DenisCloseUp.JPG";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section className="topSection" ref={homeRef} id="homeContainer">
      <img
        className="imgHome"
        src={DenisCloseUp}
        alt="denis-fröbel pouring a cocktail"
      />
    </section>
  );
};

export default Home;
