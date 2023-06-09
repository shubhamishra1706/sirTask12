import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import Edit from './Edit';

function Tabless() {
  const [data, setData] = useState([])

  async function getData() {
    let response = await axios.get('http://localhost:5500/userget')
    console.log(response.data)
    setData(response.data)
  }
  useEffect(() => {
    getData()
  }, [])


  const deleteuser = async (id)=>{
    let response = await axios.delete( `http://localhost:5500/userdelete/${id}`)
    console.log(response)

  }

  return (


    <Table striped bordered hover>

      <thead>
        <tr>
          <th>ID</th>
          <th>FullName</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      {data.map((item, index) => {
        return (
          <>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name} {item.Last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td>{item.profile}</td>
                <td><Dropdown>
                  <Dropdown.Toggle variant="secondary" id="kebab-menu">
                    <i className="fas fa-bars"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#action1"><Edit data={data} id={item.id} firstname={item.first_name} lastname={item.Last_name} email={item.email} gender={item.gender} status={item.status} profile={item.profile} /></Dropdown.Item>
                    <Dropdown.Item href="#action2" onClick={()=>deleteuser(item.id)}>Delete</Dropdown.Item>
                  
                  </Dropdown.Menu>
                </Dropdown></td>

              </tr>

            </tbody>
          </>
        )
      })}
    </Table>
  );
}

export default Tabless;