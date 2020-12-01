import React, { useState, useEffect } from 'react'
import { BASEURL, CATEGORIES } from "./APIEndpoints"
import APIServices from "./APIServices"
import { Table, TableBody, TableContainer, TableCell, TableRow, TableHead } from '@material-ui/core';

export default function APIForm() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading]= useState(true)

    const fetchCategories= async() =>{
        setLoading(true)
        let url = BASEURL + CATEGORIES
        let response = await new APIServices().get(url)
        setCategories(response.results.categories)
        setLoading(false)
    }

    useEffect(()=>{
        fetchCategories()
    },[])

    return (
        <div style={{display: "block"}}>
            <div>Catergories GET API</div>
                {!loading ? 
                    categories?.length > 0 ? 
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Category Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {categories?.length > 0 && categories.map((category) => (
                                        <TableRow key={category.categories.id}>
                                            <TableCell>
                                                {category.categories.id}
                                            </TableCell>
                                            <TableCell>
                                                {category.categories.name}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"50vh"}}>
                        <p style={{fontSize:"x-large"}}>No Data Found</p>
                    </div>
                    :
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"50vh"}}>
                        <p style={{fontSize:"x-large"}}>Loading...</p>
                    </div>
                }
        </div>
    )
}
