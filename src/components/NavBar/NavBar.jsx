import style from "../../style/NavBar/NavBar.module.css";
import image from "../../image/Favicon.png"
import { HiArrowPath, HiMagnifyingGlass } from "react-icons/hi2";



export default function NavBar() {
  const handleInputChange = (e) => {
    console.log("sii");
  };

  const handleSubmit = (e) => {
    console.log("postre");
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={image} alt="logo" className={style.log}/>
        <h1>Delicias mi Rosario</h1>
      </div>

      <div className={style.search}>
        <input
          type="text"
          placeholder="Buscar postre"
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
        <HiMagnifyingGlass/>
        </button>
      </div>
      <div className={style.link}>
        <button>Recargar <HiArrowPath/></button>
      </div>
    </div>
  );
}
