/* eslint-disable no-unused-vars */
import style from "./Dashboard.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Grafico() {

    const dataUno = [
        {
          name: 'Jun',
          Usuarios: 400,
          Visitas: 330,
          amt: 240,
        },
        {
          name: 'Jul',
          Usuarios: 300,
          Visitas: 139,
          amt: 221,
        },
        {
          name: 'Ago',
          Usuarios: 580,
          Visitas: 200,
          amt: 229,
        },
        {
          name: 'Sept',
          Usuarios: 278,
          Visitas: 390,
          amt: 200,
        },
        {
          name: 'Oct',
          Usuarios: 189,
          Visitas: 530,
          amt: 218,
        },
        {
          name: 'Nov',
          Usuarios: 480,
          Visitas: 120,
          amt: 250,
        },
        {
          name: 'Dic',
          Usuarios: 349,
          Visitas: 430,
          amt: 210,
        },
      ];

      const dataDos = [
        {
          name: 'Jun',
          Paquetes: 500,
          Documentos: 240,
          amt: 240,
        },
        {
          name: 'Jul',
          Paquetes: 190,
          Documentos: 302,
          amt: 221,
        },
        {
          name: 'Ago',
          Paquetes: 450,
          Documentos: 90,
          amt: 229,
        },
        {
          name: 'Sept',
          Paquetes: 410,
          Documentos: 492,
          amt: 200,
        },
        {
          name: 'Oct',
          Paquetes: 189,
          Documentos: 480,
          amt: 218,
        },
        {
          name: 'Nov',
          Paquetes: 239,
          Documentos: 380,
          amt: 250,
        },
        {
          name: 'Dic',
          Paquetes: 349,
          Documentos: 430,
          amt: 210,
        },
      ];
     

  return (
    <div className={style.charts}>
      <div className={style.chartsContainer}>
        <ResponsiveContainer width={500} height={300} style={{ padding: '20px' }}>
        <h4>Gráfico de usuarios</h4>
        <BarChart
        
        width={500}
        height={300}
        data={dataUno}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Usuarios" fill="#82ca9d" />
            <Bar dataKey="Visitas" fill="#e9c732" />
            </BarChart>
        </ResponsiveContainer>
        <br />
        <br />
        </div>

        <div className={style.chartsContainer}>
        <ResponsiveContainer width={500} height={300} style={{ padding: '20px' }}>
          <h4>Gráfico de envíos</h4>
            <LineChart
            width={500}
            height={300}
            data={dataDos}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Paquetes" stroke="#5d45f7" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Documentos" stroke="#fd5000" />
            </LineChart>
        </ResponsiveContainer>
        </div>
</div>
  )
}

export default Grafico;