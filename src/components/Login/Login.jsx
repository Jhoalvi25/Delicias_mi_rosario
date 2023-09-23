import Logo from "../Logo/Logo";
import style from "../../style/Login/Login.module.css";
import { HiArrowRight } from "react-icons/hi";

export default function Login() {
  const submitLogin = () => {
    console.log("Te haz logeado correctamente");
  };

  return (
    <div>
      <Logo />
      <div className={style.container}>
        <h2 className={style.title}>Login</h2>

        <div className={style.inputs}>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Nombre de usuarío"
          />

          <input
            className={style.input2}
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>

        <h2 className={style.rol}>Selecciona tu rol</h2>

        <div className={style.others}>
          <select className={style.select} name="rol">
            <option value="administrador">Administrador</option>
            <option value="contador"> Contador</option>
          </select>
        </div>
        <button className={style.btn} onSubmit={submitLogin}>
          INGRESAR <HiArrowRight />
        </button>
      </div>

    </div>
  );
}
