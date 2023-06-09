import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function Edit({id,firstname,lastname,email,gender,status,mobile,profile}) {

  const[updatefirstname,setUpdatefirstname] = useState('')
const[updateemail,setupdateemail] = useState('')
const[updategender,setupdategender] = useState('')
const[updateprofile,setupdateprofile] = useState('')
const[updatelastname,setupdatelastname] = useState('')
const[updatemobile,setupdatemobile] = useState('')
const[updatestatus,setupdatestatus] = useState('')
const[updatelocation,setupdatelocation] = useState('')
const[updateid,setupdateid] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id,firstname,lastname,email,gender,status,mobile,profile) =>{
    setupdateid(id)
    setUpdatefirstname(firstname)
    setupdatelastname(lastname)
    setupdateemail(email)
    setupdategender(gender)
    setupdatestatus(status)
    setupdatemobile(mobile)
    setupdateprofile(profile)
    
    setShow(true)

  };
///////////////////////////////////





const submitdata = async (e) => {
  e.preventDefault();
  const formData = {
    
    id: updateid,
    first_name: updatefirstname,
    last_name: updatelastname,
    email: updateemail,
    gender: updategender,
    profile: updateprofile,
    mobile: updatemobile,
    status: updatestatus,
    location: updatelocation,
  };
  const data = await axios.put(
    `http://localhost:5500/userupdate/${id}`,
    formData,

  );
  console.log(data, "data");
}


  return (
    <>
      <button className='bg-transparent border-0 ' onClick={()=>handleShow(id,firstname,lastname,email,gender,status,mobile,profile)}>
      Update User
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitdata}>
          <div className="container">
            <div className="row">
       
              <div className="col-6">

              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={updateid} onChange={(e)=>setupdateid(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>first name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" value={updatefirstname} onChange={(e)=>setUpdatefirstname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={updateemail} onChange={(e)=>setupdateemail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Select your Gender</Form.Label>
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="male"
                    label="Male"
                    value="male" onChange={(e)=>setupdategender(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="female"
                    label="Female"
                    value="female" onChange={(e)=>setupdategender(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Select your Profile</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={updateprofile} onChange={(e)=>setupdateprofile(e.target.value)} />
                </Form.Group>


              </div>
              <div className="col-6">

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Password" value={updatelastname} onChange={(e)=>setupdatelastname(e.target.value)}/>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Password" value={updatemobile} onChange={(e)=>setupdatemobile(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" value={updatestatus} onChange={(e)=>setupdatestatus(e.target.value)}>
                      <option>Open this select menu</option>
                      <option value="active" >Active</option>
                      <option value="deactive" >Deactive</option>

                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Enter your location</Form.Label>
                    <Form.Control type="text" placeholder="Password" value={updatelocation} onChange={(e)=>setupdatelocation(e.target.value)} />
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

export default Edit;