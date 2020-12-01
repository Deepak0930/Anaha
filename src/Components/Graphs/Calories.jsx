import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function Calories() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['Calories'],
            datasets:[
              {
                label:'Calories',
                data:[
                  160,
                ],
                backgroundColor:[
                  '#9967c7',
                ],
                borderWidth	: 10
              }
            ]
          }
          setData(data)
    },[])

    return (
        <div className="chart" style={{width: "135px", height:"120px", display:"block"}}>
        <Doughnut
            data={data}
            options={{
                title:{
                    display:false,
                },
                legend:{
                    display:false,
                }
            }}
        />
      </div>
    )
}
