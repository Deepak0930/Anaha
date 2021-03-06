import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2';

export default function Health() {
    const [data, setData] =  useState({})

    useEffect(()=>{
        const data ={
            labels: ['week1', 'week2', 'week3', 'week4'],
            datasets:[
              {
                fill: true,
                pointBackgroundColor: "white",
                pointBorderWidth: 2,
                borderColor: "#9967c7",
                data:[
                  49, 35, 48, 90, 48, 90
                ],
                borderWidth:2,
                backgroundColor:[
                  '#ddceeb'
                ]
              }
            ]
          }
          setData(data)
    },[])

    return (
        <div className="lineGraph">
        <Line
            width={760}
            height={280}
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
                    ticks: { 
                      display: true,
                      fontSize:10
                    },
                      gridLines: {
                          display: true,
                          drawBorder: false
                      }
                  }],
                  yAxes: [{
                    ticks: { 
                      display: true,
                      fontSize:10,
                      min: 0,
                      max: 100,
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
                          display: true,
                          drawBorder: true
                      }
                  }]
              }
            }}
        />
      </div>
    )
}
