import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import { Deserts } from "../../Utils/cardDeserts";
import Cards from "../Cards/Cards";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Filters />

      {Deserts &&
        Deserts.map((elem) => {
          return (
            <Cards
              id={elem.id}
              image={elem.image}
              name={elem.name}
              price={elem.price}
            />
          );
        })}
    </div>
  );
}
