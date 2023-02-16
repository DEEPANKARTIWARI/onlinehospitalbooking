import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Image } from '@mui/icons-material'

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        lname: "",
        email: "",
        date: "",
        contactnumber: "",
        location:"",
        password: ""

    })
        const [confirmpwd,setConfirmpwd]=useState('')
    const [data,setData] = useState([]);
    console.log(inpval);
    let local = JSON.parse( localStorage.getItem("registeredusers"))
    let useremail=local.map((e)=>e.email)
        
    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name,lname,email,date,contactnumber,location, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else if (useremail.includes(email)) {
            toast.error('email already exists',{
               position: "top-center",
           });
       } 
      
        else {

            console.log("data added succesfully");
            history("/")
           
            let local = localStorage.getItem("registeredusers");
            let temp;
            if (local === null){

                temp = [];
            }
              else{
                temp = JSON.parse(local);
            
              }
                 temp.push(inpval);
                 localStorage.setItem("registeredusers",JSON.stringify(temp));
        }

    }
    let pwderror 

    if(confirmpwd!== inpval.password  )
    { pwderror= true;}
    else {  pwderror= false;}

 


    return (
        <div className='bg-hero d-flex justify-content-space ' >
            <div className=" mt-3 login-content">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-5 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control type="text" name='lname' onChange={getdata} placeholder="Last Name" sx={{marginTop:'22px'}} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email"  sx={{marginTop:'22px'}}  />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='date' type="date"   sx={{marginTop:'22px'}} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control type="email" name='contactnumber' onChange={getdata} placeholder="Contact Number"  sx={{marginTop:'22px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicEmail">

                                <Form.Control type="text" name='location' onChange={getdata} placeholder="Location"   sx={{marginTop:'22px'}} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password"  sx={{marginTop:'22px'}} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 border border-dark rounded shadow" controlId="formBasicPassword">

                            <Form.Control type="password" name='password' onChange={(e)=>{setConfirmpwd(e.target.value)}} placeholder="Confirm Password"  sx={{marginTop:'22px'}}/>
                        </Form.Group>
                       { pwderror && <div> <label style={{color:"red"}}>Password didn't match</label></div>}
                       

                            <Button variant="primary" className='col-lg-6 shadow' onClick={addData} style={{ background: "#2196f3" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account? <span><NavLink to="/">  SignIn</NavLink></span> </p>
                    </div>
                    
                </section>
                <ToastContainer />
            </div>
            <div className='background-img' >
                <img src='./img/medical-g042a21d5f_1280.png'/>
            </div>
        </div>
    )
}

export default Home