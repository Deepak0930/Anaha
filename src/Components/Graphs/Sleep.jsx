import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2';

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
                      ticks: { display: true, fontSize:8},
                      gridLines: {
                          display: false,
                          drawBorder: false
                      }
                  }],
                  yAxes: [{
                    ticks: { 
                      display: true,
                      fontSize: 9,
                      min: 50,
                      max: 150,
                      stepSize:50,
                      callback: function(label){
                        switch(label){
                            case 50:
                                return 'Deep'
                            case 100:
                                return 'Light'
                            case 150:
                                return "Awake"
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
