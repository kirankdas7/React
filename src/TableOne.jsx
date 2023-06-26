import React from 'react'
import { Table } from 'react-bootstrap'

function TableOne() {
  var i=0;
 
  const table=[
    {
      no:'1',
      firstName:'kiran',
      lastName:'kdas',
      userName:'@kira'
    },
    {
      no:'2',
      firstName:'sajil',
      lastName:'mr',
      userName:'@saji'
    },
    {
      no:'3',
      firstName:'kich',
      lastName:'kp',
      userName:'@kp123'
    },
    {
      no:'4',
      firstName:'ashwin',
      lastName:'raj',
      userName:'@ash'
    }
  ]
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
     
      <tbody>
      {table.map((tabCont,index)=>
      <tr>
     
      
        <td>{index+1} </td>
        <td>{tabCont.firstName} </td>
        <td>{tabCont.lastName} </td>
        <td>{tabCont.userName} </td>
        
      </tr>
      )}
    </tbody>
      
   
     
    </Table>
    </div>
  )
}

export default TableOne