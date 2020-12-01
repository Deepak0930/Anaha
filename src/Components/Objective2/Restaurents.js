import React, { useState, useEffect } from 'react'
import { BASEURL, SEARCH } from './APIEndpoints'
import APIServices from './APIServices'
import { Table, TableBody, TableContainer, TableCell, TableRow, TableHead } from '@material-ui/core';

export default function Restaurents() {
    const [start, setStart] = useState(0)
    const [count, setCount] = useState(0)
    const [updateState, setUpdateState]= useState(false)
    const [submit, setSubmit]= useState(false)
    const [loading, setLoading]= useState(true)
    const [restaurants, setRestaurants] = useState([])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setSubmit(true)
        fetchData()
    }

    const fetchData = async() =>{
        setLoading(true)
        let url = BASEURL + SEARCH + `?start=${start}&count=${count}`
        let response = await new APIServices().get(url)
        setRestaurants(response.results)
        setUpdateState(true)
        setLoading(false)
    }

    useEffect(()=>{
        if(submit){
            fetchData()
        }
    },[updateState])

    return (
        <div style={{display: "block"}}>
        <div>
            <form onSubmit={handleSubmit} className="formCenter">
                <p>Start</p>
                <input
                    className="formInput"
                    type='number'
                    value={start}
                    onChange={(e)=>setStart(e.target.value)}
                    placeholder="start"
                />
                <p>Count</p>
                <input 
                    className="formInput"
                    type='number'
                    value={count}
                    onChange={(e)=>setCount(e.target.value)}
                    placeholder="count"
                />
                <br />
                <br />
                <button type="submit" className="button">Search</button>
            </form>
        </div>
        <br />
        <div style={{textAlign:"center"}}>Restaurants Search API</div>
        {submit &&
            (!loading ? 
                restaurants.restaurants?.length > 0 ?
                <>
                    <div>
                        <p>Start : {restaurants.results_start}</p>
                        <p>Count : {restaurants.results_shown}</p>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Restaurant ID</TableCell>
                                    <TableCell>Restaurant Name</TableCell>
                                    <TableCell>Cuisines</TableCell>
                                    <TableCell>Timings</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {restaurants.restaurants?.length > 0 && restaurants.restaurants.map((r) => (
                                    <TableRow key={r.restaurant.id}>
                                        <TableCell>
                                            {r.restaurant.id}
                                        </TableCell>
                                        <TableCell>
                                            {r.restaurant.name}
                                        </TableCell>
                                        <TableCell>
                                            {r.restaurant.cuisines}
                                        </TableCell>
                                        <TableCell>
                                            {r.restaurant.timings}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </> :
                <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"50vh"}}>
                    <p style={{fontSize:"x-large"}}>No Data Found</p>
                </div>
                :
                <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"50vh"}}>
                    <p style={{fontSize:"x-large"}}>Loading...</p>
                </div>
            )}
        </div>
    )
}
