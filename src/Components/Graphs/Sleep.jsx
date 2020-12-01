import React, { useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

export default function Sleep() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets:[
              {
                fill: true,
                pointBackgroundColor: "white",
                pointBorderWidth: 2,
                borderColor: "#BBDBBE",
                data:[
                  80, 65, 82, 92, 87, 70, 147, 138, 127
                ],
                backgroundColor:[
                  '#BBDBBE'
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
                },
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