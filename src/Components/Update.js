import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CreateThunkAction, UpdateThunkAction } from '../Redux/Thunk/CreateThunk';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Update = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({});
    const [id,setId] = useState('')

const navi = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        
        e.preventDefault();

        const newErrors = {};
        if (!name) newErrors.name = "Name is Required"
        if (!password) newErrors.password = "password is Required"
        if (!gender) newErrors.gender = "gender is Required"

        if(id){
            dispatch(UpdateThunkAction({id:id,name,password,gender}))
        }


        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        console.log('name', name)
        console.log('password', password)
        console.log('gender', gender)

        setName('');
        setPassword('');
        setGender('');

      
        navi('/read')

    }

    useEffect(() => {
        setName(localStorage.getItem('name') || '');
        setPassword(localStorage.getItem('password') || '');
        setGender(localStorage.getItem('gender') || '');
        setId(localStorage.getItem('id') || '');
    }, []);
 const Return_page = () =>{
    navi('/')
 }


    return (
<>
        <div className="wrapper">
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    <div ><span className='dot'></span></div>
    </div>
        <div className='bg'>
            <form onSubmit={handleSubmit} className='form_panel'>
            <h2>Update Page</h2>
                <label className='labels'>UserName:</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <label className='labels'>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

<br></br>
                <label className='labels'>Gender:</label>

                <label className='g_labels'>Male</label>
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "male"}
                />
                <label className='g_labels'>Female</label>
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "female"}
                />
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
<br></br>


                <button type='submit' className='submit'>Submit</button>
            </form>
            <button onClick={Return_page} className='home' > <i class="fa-solid fa-house-circle-exclamation" style={{width:"20px", fontSize:"22px",marginRight:"15px",color:"green",}}></i>HOME</button>
        </div>
        </>

    )
}

export default Update