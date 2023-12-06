/* eslint-disable no-unused-vars */
import style from "./Dashboard.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Grafico() {

    const data = [
        {
          name: 'Jun',
          cr: 400,
          cv: 240,
          amt: 240,
        },
        {
          name: 'Jul',
          cr: 300,
          cv: 139,
          amt: 221,
        },
        {
          name: 'Ago',
          cr: 200,
          cv: 580,
          amt: 229,
        },
        {
          name: 'Sept',
          cr: 278,
          cv: 390,
          amt: 200,
        },
        {
          name: 'Oct',
          cr: 189,
          cv: 480,
          amt: 218,
        },
        {
          name: 'Nov',
          cr: 239,
          cv: 380,
          amt: 250,
        },
        {
          name: 'Dic',
          cr: 349,
          cv: 430,
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
        data={data}
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
            <Bar dataKey="cr" fill="#e9c732" />
            <Bar dataKey="cv" fill="#82ca9d" />
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
            data={data}
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
            <Line type="monotone" dataKey="cr" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="cv " stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        </div>
</div>
  )
}

export default Grafico;