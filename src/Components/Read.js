import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteThunkAction, ReadThunkAction } from '../Redux/Thunk/CreateThunk'
import { useNavigate } from 'react-router-dom'
import './Read.css';

const Read = () => {
const details = useSelector(state => state.readSlice.data)
console.log("selector",details)
const dispatch  = useDispatch()
const navi = useNavigate()
useEffect(()=>
{
    dispatch(ReadThunkAction())
},[])

const handleDelete = (id)=>{
    dispatch(DeleteThunkAction(id))
}

const patch_data = (data)=>{
    localStorage.setItem("name",data.name)
    localStorage.setItem("password",data.password)
    localStorage.setItem("gender",data.gender)
    localStorage.setItem('id',data.id)
   navi('/update')

}
const Return_Home = () =>{
    navi('/')
}

  return (
<>
<div className="table_background">
<h2>ReadPage</h2>
<table>
    <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Password</th>
        <th>Gender</th>
        <th>Action</th>

    </tr>
    <tbody>
{details.map((data,index)=>(
       
        <tr key={data.index}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.password}</td>
            <td>{data.gender}</td>
            <td>
                <button onClick={()=>handleDelete(data.id)} className='delete'>Delete</button>
                <button onClick={()=>patch_data(data)} className='update'>Edit</button>
            </td>


        </tr>
   
))}
 </tbody>
</table>
<button onClick={Return_Home} className='home' > <i class="fa-solid fa-house-circle-exclamation" style={{width:"20px", fontSize:"22px",marginRight:"15px",color:"green",}}></i>HOME</button>
</div>
</>
  )
}

export default Read