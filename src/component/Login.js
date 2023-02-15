import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

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

        const getuserArr = localStorage.getItem("registeredusers");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <>
            <div >
                <section className='d-flex  justify-content-evenly'>
                    <div className="left_data mt-3   w-50 text-center"  style={{paddingTop:"10%"}}>
                        <h3 className='text-center'>Sign IN</h3>
                        <Form >
                        <div >

                            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail"  style={{marginLeft:"25%"}} >

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb- col-lg-6" controlId="formBasicPassword"  style={{marginLeft:"25%"}}>

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" width={"100%"} />
                            </Form.Group>
                            </div>
                            <Button variant="primary" className='col-lg-3 my-3' onClick={addData} style={{ background: "#2196f3" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login