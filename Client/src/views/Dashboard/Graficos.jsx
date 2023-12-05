/* eslint-disable no-unused-vars */
//import style from "./Graficos.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Grafico() {

    const data = [
        {
          name: 'Jun',
          cr: 4000,
          cv: 2400,
          amt: 2400,
        },
        {
          name: 'Jul',
          cr: 3000,
          cv: 1398,
          amt: 2210,
        },
        {
          name: 'Ago',
          cr: 2000,
          cv: 5800,
          amt: 2290,
        },
        {
          name: 'Sept',
          cr: 2780,
          cv: 3908,
          amt: 2000,
        },
        {
          name: 'Oct',
          cr: 1890,
          cv: 4800,
          amt: 2181,
        },
        {
          name: 'Nov',
          cr: 2390,
          cv: 3800,
          amt: 2500,
        },
        {
          name: 'Dic',
          cr: 3490,
          cv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <div className='charts'>
    <ResponsiveContainer width={500} height={300}>
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
        <Bar dataKey="cr" fill="#8884d8" />
        <Bar dataKey="cv" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>

    <ResponsiveContainer width={500} height={300}>
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
  )
}

export default Grafico;