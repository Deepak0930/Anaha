import React, { useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

export default function Heart() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM'],
            datasets:[
              {
                fill: false,
                pointBackgroundColor: "white",
                pointBorderWidth: 2,
                borderColor: "red",
                data:[
                  80, 65, 82, 92, 87, 70
                ],
                borderWidth:2,
                backgroundColor:[
                  'rgba(54, 162, 235, 0.6)'
                ]
              }
            ]
          }
          setData(data)
    },[])

    return (
        <div className="barChart">
        <Line
            width={185}
            height={80}
            data={data}
            options={{
                title:{
                    display:false,
                },
                legend:{
                    display:false,
                },
                scales: {
                  xAxes: [{
                      ticks: { display: true},
                      gridLines: {
                          display: false,
                          drawBorder: false
                      }
                  }],
                  yAxes: [{
                      ticks: { 
                        display: true,
                        min: 50,
                        max:150,
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