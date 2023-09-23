import style from "../../style/Filters/Filters.module.css";

export default function Filters() {
  return (
    <div className={style.containerFilter}>
      <div className={style.filter}>
        <label>Filtrar por categoria:</label>
        <select className={style.select}>
          <option value="asc">Dulces</option>
          <option value="desc">Salados</option>
        </select>
      </div>

      <div className={style.filter}>
        <label>Filtrar por precio:</label>
        <select className={style.select}>
          <option value="highAttack">5.000 - 10.000</option>
          <option value="lowAtack"> 10.000 - 20.000 </option>
        </select>
      </div>

      <div className={style.filter}>
        <label>Filtrar por disponibilidad:</label>
        <select className={style.select}>
          <option value="All">Disponible</option>
          <option value="normal">No disponible</option>
        </select>
      </div>
    </div>
  );
}
