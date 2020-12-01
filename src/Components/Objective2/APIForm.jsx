import React, { useState, useEffect } from 'react'
import { BASEURL, CATEGORIES } from "./APIEndpoints"
import APIServices from "./APIServices"
import { Table, TableBody, TableContainer, TableCell, TableRow, TableHead } from '@material-ui/core';

export default function APIForm() {
    const [categories, setCategories] = useState([])

    const fetchCategories= async() =>{
        let url = BASEURL + CATEGORIES
        let response = await new APIServices().get(url)
        setCategories(response.results.categories)
    }

    useEffect(()=>{
        fetchCategories()
    },[])

    return (
        <div style={{display: "block"}}>
            <div>Catergories GET API</div>
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
        </div>
    )
}
