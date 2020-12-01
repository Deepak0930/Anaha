import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

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
                },
                legend:{
                    display:false,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: true, fontSize:8 },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { 
                            display: true, 
                            beginAtZero: true, 
                            fontSize:10,
                            max: 100,
                            min: 0,
                            stepSize: 50,
                            callback: function(label){
                                switch(label){
                                    case 0:
                                        return '0%';
                                    case 50:
                                        return '50%'
                                    case 100:
                                        return "100%"
                                }
                            }
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
