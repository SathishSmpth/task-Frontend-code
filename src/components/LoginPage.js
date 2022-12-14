import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const LoginPage = () => {

    const {id} = useParams();
    const [user,setUser] = useState()

    useEffect(()=>{
        fetch(`http://localhost:4000/getuser/${id}`)
        .then(response=>response.json())
        .then(data=>setUser(data.data))
    },[id],[user])

    return (
        <div className='table-responsive mt-5'>
            <table className="table table-hover table-success table-striped">
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>Last Name</td>
                        <td>Phone</td>
                        {/* <td>Date of Birth</td> */}
                        <td>Email</td>
                        <td>Password</td>
                        <td>State</td>
                    </tr>
                    <tr>
                        <td>{user?.firstName}</td>
                        <td>{user?.lastName}</td>
                        <td>{user?.phone}</td>
                        <td>{user?.email}</td>
                        <td>{user?.password}</td>
                        <td>{user?.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoginPage;
