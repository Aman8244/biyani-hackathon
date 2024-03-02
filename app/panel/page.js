"use client";
import { useRouter } from 'next/navigation';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import ComplaintForm from '../Components/ComplaintFrom';
import dbConnect from '../utils/dbConnect';
const Panel = ()=>{
    const [User,setUser] = useState({});
    const [userComplaints,setUserComplaints] = useState([]);
    const navigate = useRouter();
    useEffect(() => {
        dbConnect();
        let t = localStorage.getItem('token')
        if (!t) {
            navigate.push('/auth');
        }
        else {
            axios.post(`/api/verifytoken`, {
                token: t
            }).then(res => {
                axios.post(`/api/getuser`, {
                    email: res.data.email
                }).then(user => {
                    setUser(user.data);
                })
            })
            axios.post('/api/getcomplaint',{email:User.email}).then(com=>{
                console.log(com.data)
                setUserComplaints(com.data.data);
            })
            
        }
        
    }, [navigate])
    
    const handleLogout = (e)=>{
        localStorage.removeItem('token');
        navigate.push('/');
    }
    if(User.isStudent){
        console.log(userComplaints)
        return (
            <div>
                <div>
                    <h1>{User.name}</h1>
                </div>
                <div>
                    <button onClick={handleLogout}>logout</button>
                </div>
                <p>Raise a Complaint</p>
                <ComplaintForm/>
                <hr />
                <div>
               {(userComplaints && userComplaints[0])?userComplaints.map((el,key)=>{
                return (
                    <div key={key}>
                        <hr />
                        <p>{el.name}</p>
                        <p>{el.details}</p>
                        <img src={`data:image/jpeg;base64,${el.image}`} alt="image" height={100} width={100} />
                    </div>
                )
               }):''}
            </div>
            </div>
        )
    }
    return (
        <div>
            {User.name}
            <div>
                <button onClick={handleLogout}>logout</button>
            </div>
        </div>
    )
}
export default Panel;