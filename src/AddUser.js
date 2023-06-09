import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function AddUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
///////////////////////////////////

const[firstname,setFirstname] = useState('')
const[email,setEmail] = useState('')
const[gender,SetGender] = useState('')
const[profile,SetProfile] = useState('')
const[lastname,SetLastname] = useState('')
const[mobile,SetMobile] = useState('')
const[status,setStatus] = useState('')
const[location,SetLocation] = useState('')
const[id,setId] = useState('')


const submitdata = async (e) => {
  e.preventDefault();
  const formData = {
    id: id,
    first_name: firstname,
    last_name: lastname,
    email: email,
    gender: gender,
    profile: profile,
    mobile: mobile,
    status: status,
    location: location,
  };
  const data = await axios.post(
    "http://localhost:5500/userpost",
    formData,

  );
  console.log(data, "data");
}


  return (
    <>
      <button className='bg-transparent border-0 ' onClick={handleShow}>
        + Add User
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitdata}>
          <div className="container">
            <div className="row">
       
              <div className="col-6">

              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={id} onChange={(e)=>setId(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>first name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Select your Gender</Form.Label>
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="male"
                    label="Male"
                    value="male" onChange={(e)=>SetGender(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="female"
                    label="Female"
                    value="female" onChange={(e)=>SetGender(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Select your Profile</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={profile} onChange={(e)=>SetProfile(e.target.value)} />
                </Form.Group>


              </div>
              <div className="col-6">

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={lastname} onChange={(e)=>SetLastname(e.target.value)}/>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Password" value={mobile} onChange={(e)=>SetMobile(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
                      <option>Open this select menu</option>
                      <option value="active" >Active</option>
                      <option value="deactive" >Deactive</option>

                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Enter your location</Form.Label>
                    <Form.Control type="text" placeholder="Password" value={location} onChange={(e)=>SetLocation(e.target.value)} />
                  </Form.Group>
                </Form.Group>
              </div>
            </div>
          </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitdata}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;