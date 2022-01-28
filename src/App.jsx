import React,{useState} from "react";
import "./style.css";
export default function App() {
const [inputUser,setInputUser] = useState({
  username:"",
  email:"",
  phone:'',
  password:""
})
const [userRecords,setUserRecords] = useState([])

const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value
setInputUser({...inputUser,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault();
const getRecords = {...inputUser,id:new Date().getTime().toString()}
setUserRecords([...userRecords,getRecords])
setInputUser({username:"",email:"",phone:"",password:""})

}
  return (
    <>
    <form onSubmit={handleSubmit} className="form">
    Name:<input type="text" name="username" value={inputUser.username} onChange={handleInput} autocomplete="off"   />
    Email: <input type="text" name="email" value={inputUser.email} onChange={handleInput} autocomplete="off"   />
    Phone:  <input type="text" name="phone" value={inputUser.phone} onChange={handleInput} autocomplete="off"   />
    Password: <input type="text" name="password" value={inputUser.password} onChange={handleInput} autocomplete="off"   />
     <button>Submit</button>
    </form>

    {userRecords.map((record)=>{
     return <div key={record.id}>
      <li>UserName:{record.username}</li>
      <li>UserEmail:{record.email}</li>
      <li>UserPhone:{record.phone}</li>
      <li>UserPassword:{record.password}</li>
      
     </div>
    })}



    </>
  );
}
