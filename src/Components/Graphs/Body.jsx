import React, { useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

export default function Body() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets:[
              {
                fill:true,
                pointBackgroundColor: "white",
                pointBorderWidth: 2,
                borderWidth:2,
                borderColor: "red",
                data:[
                  36, 35, 38, 34, 31, 37, 39
                ],
                backgroundColor:[
                  '#FFAC81'
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
                elements:{
                  point:{
                    radius:0
                  }
                },
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
                      min: 30,
                      max: 40,
                      stepSize:5
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
