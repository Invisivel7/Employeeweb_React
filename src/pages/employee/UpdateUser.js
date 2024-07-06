import "./UpdateUser.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const UpdateUser = () =>{
    const {id} = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        departament: ""
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    };

    useEffect( () =>{
        const fetchEmployee = async () =>{
            try {
              const response = await fetch(`http://localhost:8080/api/employee/${id}`);  
              const data = await response.json();
              setFormData(data);
            } catch (error) {
                console.error("Error fetching user", error.message);
            }
        }
        fetchEmployee();
    }, [id])

    return(
        <>
        <div className="center-form">
             <h6>Update Employee</h6>
            <Form >
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="departament"
                        placeholder="Enter department"
                        value={formData.departament}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Update
                </Button>
            </Form>
        </div>
    </>

    )
}

export default UpdateUser;