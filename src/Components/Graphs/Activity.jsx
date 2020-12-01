import React, { useState, useEffect } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

export default function Activity() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets:[
              {
                data:[
                  40,46,60,37,89,64,28
                ],
                backgroundColor:'blue',
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
                    fontSize:25
                },
                legend:{
                    display:false,
                    position:"right"
                },
                responsive: true,
                maintainAspectRatio: false,
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
                            beginAtZero: true, 
                            max: 100,
                            min: 0,
                            stepSize: 50
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