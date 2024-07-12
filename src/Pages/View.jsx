import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser , deleteUser } from '../Redux/Action/action'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token){
            navigate('/view')
        }
    },[])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser())
    },[])

    const users = useSelector(state => state.crud.user)

    const deleteRecord = (id) => {
        dispatch(deleteUser(id))
        alert("record delete...")
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto mt-5">
                        <h2 className="mb-5" align="center">View page By firebase firestore</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Courses</th>
                                    <th scope='col'>Department</th>
                                    <th scope='col'>Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((val) => {
                                        return (
                                            <tr key={val.id}>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.password}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.course}</td>
                                                <td>{val.department}</td>
                                                <td>{val.date}</td>
                                                <td>
                                                    <button onClick={() => deleteRecord(val.id)} className='btn btn-sm btn-danger'>Delete</button>
                                                </td>
                                                <td>
                                                    <Link to={'/edit'}><button className='btn btn-sm btn-success'>Edit</button></Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
