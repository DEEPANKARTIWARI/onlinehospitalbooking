import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Users() {
  return (
    <div>
        <TableContainer component={Paper} style={{backgroundColor:'#bbdefb', marginTop:'1em'}}>
            <Table>
                <TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight:"bold"}}>Name</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Email id</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Suhail</TableCell>
                        <TableCell>sahamed025@gmail.com</TableCell>
                        <TableCell>173 </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Users