import style from "../../style/SubmitOrder/SelectDesert.module.css";
import { HiArrowRight } from "react-icons/hi";
import LogoRegister from "../Logo/LogoRegister";
import image from "../../image/deserts/decorar-un-pastel-y-hacerlo-ligero-y-saludable.jpg";

export default function SelectDesert() {
  const submitRegister = () => {
    console.log("Te haz registrado correctamente");
  };
  return (
    <div className={style.container}>
      <div className={style.log}>
        <LogoRegister />
      </div>
      <div className={style.form}>
        <h2 className={style.title}>
          Completa los siguientes campos <br /> para agendar tu pedido
        </h2>

        <div className={style.cont}>
          <img src={image} alt="desert" className={style.img} />
        </div>

        <div className={style.inputs}>
          <div className={style.label}>
            <label>Postre seleccionado:</label>
          </div>

          <select name="deserts" className={style.input}>
            <option>Pastel</option>
            <option>Gelatina</option>
          </select>
          <div className={style.label}>
            <label className={style.label}>Instrucciones del postre:</label>
          </div>

          <textarea
            className={style.input}
            name="direction"
            placeholder="Ingrese una descripción detallada del postre que desea."
          />
        </div>

        <button className={style.btn} onSubmit={submitRegister}>
          Subir petición <HiArrowRight />
        </button>
      </div>
    </div>
  );
}
