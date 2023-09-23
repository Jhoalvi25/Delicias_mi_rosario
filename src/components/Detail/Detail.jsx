import { useState } from "react";
import image from "../../image/deserts/yogurt-casero-de-fresa-receta.jpg";
import style from "../../style/Detail/Detail.module.css";
import { HiArrowRight } from "react-icons/hi";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Detail() {
  const [name] = useState("Yogurt");
  const [description] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [stock] = useState("Si");
  const [price] = useState("00.000 $");

  return (
    <div>
      <div className={style.cont}>
        <div className={style.btn2}>
          <Link to={"/"} className={style.back}>
            <TbArrowBackUp  className={style.arrow}/>
            Volver
          </Link>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.img}>
          <img
            src={image}
            className={style.ilus}
            alt="desert"
            width="500px"
            height="300px"
          />
        </div>
        <div className={style.info}>
          <h1>{name}</h1>
          <div className={style.des}>
            <p>{description}</p>
          </div>

          <h3>
            Disponiblilidad:
            <span> {stock}</span>
          </h3>
          <h3>
            Precío:
            <span className={style.price}> {price}</span>
          </h3>
          <button className={style.btn}>
            Hacer pedido <HiArrowRight className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
