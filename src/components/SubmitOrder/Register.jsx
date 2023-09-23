import style from "../../style/SubmitOrder/Register.module.css";
import { HiArrowRight } from "react-icons/hi";
import LogoRegister from "../Logo/LogoRegister";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Register() {
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

        <div className={style.inputs}>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Nombre completo"
          />

          <input
            className={style.input}
            type="tel"
            name="cellphone"
            placeholder="Telefono o celular"
          />

          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Correo electronico"
          />

          <textarea
            className={style.input}
            name="direction"
            placeholder="Ingrese su dirección de domicilio."
          />
        </div>
        <Link to={"/submit"}>
          <button className={style.btn} onSubmit={submitRegister}>
            Seguir <HiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
