import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DynamicTable = () => {
    const [tableData, setTableData] = useState([])
    const handleSort = ()=>{

    }
    useEffect(() => {
        axios.get('https://dummyapi.online/api/users')
            .then((res) => {
                console.log("resp", res)
                setTableData(res.data)
            })
    }, [])
    return (
        <table>
            <tr>
                <th onClick={()=>handleSort('id')}>ID</th>                
                <th onClick={()=>handleSort('name')}>Name</th>
                <th onClick={()=>handleSort('username')}>UserName</th>
                <th onClick={()=>handleSort('email')}>Email ID</th>
                <th onClick={()=>handleSort('address')}>Address</th>
            </tr>
           {tableData && tableData.map((i)=>{
            return(<tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.address['street']+','+i.address['city']+','+i.address['state']+','+i.address['zipcode']}</td>
            </tr>)
           })} 
        </table>
    )
}

export default DynamicTable