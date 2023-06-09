import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabless from './Tabless';
import AddUser from './AddUser';
import Demo from './Demo'
import Search from './Search';
function App() {


  

  return (
    <>

{/* <Demo/> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col bg-danger text-center bg-dark text-white "><h4 className='my-2'>MERN Stack Developer Practical Task</h4></div>
        </div>
      </div>


      <div className="container my-4">
        <div className="row">
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col-7"><Search/></div></div>
              <div className="col-5"></div>
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col-4 "></div>
                <div className="col-4  "><Button variant="danger"><AddUser/></Button></div>
                <div className="col-4 "><Button variant="danger">Export to Csv</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

<Tabless/>
    </>
  )
}

export default App