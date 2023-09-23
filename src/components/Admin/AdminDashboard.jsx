import style from "../../style/Admin/AdminDashboard.module.css";
import logo from "../../image/Favicon.png";
import { useState } from "react";
import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export default function AdminDashboard() {
  const [rol] = useState("Administrador");
  // Sample data
  const data = [
    { name: "Gelatina", students: 400 },
    { name: "Tequeños", students: 700 },
    { name: "Quesillos", students: 200 },
    { name: "Yogurt", students: 1000 },
  ];

  return (
    <div className={style.container}>
      <div className={style.bar}>
        <div className={style.img}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h3>{rol}</h3>
        </div>
        <div className={style.options}>
          <button className={style.btn}>PANEL DE CONTROL</button>
          <button className={style.btn}>VENTAS</button>
          <button className={style.btn}>CONFIGURACIÓN</button>
          <button className={style.btn}>SALIDA</button>
        </div>
      </div>

      <div className={style.info}>
        <h1>PANEL DE CONTROL</h1>
        <BarChart width={450} height={450} data={data}>
          <Bar dataKey="students" fill="orange" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </div>
    </div>
  );
}
