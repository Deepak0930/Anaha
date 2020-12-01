import React, { useState, useEffect } from 'react'
import {Bar, Line, Pie,} from 'react-chartjs-2';

export default function Blood() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets:[
              {
                data:[
                    80, 65, 132, 92, 147, 70
                ],
                backgroundColor:'orangered',
                barThickness: 3,
              }
            ]
          }
          setData(data)
    },[])

    return (
        <div className="barChart">
        <Bar
            data={data}
            width={185}
            height={80}
            options={{
                title:{
                    display:false,
                    text:'Largest Cities In India',
                },
                legend:{
                    display:false,
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { 
                            display: true,
                            min: 50,
                            max: 150,
                            stepSize:50
                          },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                }
              }}
        />
      </div>
    )
}
