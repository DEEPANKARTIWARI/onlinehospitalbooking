import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Users() {

    let userDetails=JSON.parse(localStorage.getItem('registeredusers'))
    console.log(userDetails);
  return (
    <div>
        <TableContainer component={Paper} elevation={20} style={{backgroundColor:'#90caf9', marginTop:'4em'}}>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight:"bold"}}>First Name</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Last Name</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Eamil</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Location</TableCell>
                            <TableCell style={{fontWeight:"bold"}}>Contact Number</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {userDetails.map((e,i)=>{
                        return(
                    <TableRow>
                        <TableCell>{e.name}</TableCell>
                        <TableCell>{e.lname}</TableCell>
                        <TableCell>{e.email}</TableCell>
                        <TableCell>{e.location}</TableCell>
                        <TableCell>{e.contactnumber}</TableCell>
                    </TableRow>
  )})}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Users