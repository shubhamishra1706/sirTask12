import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Tabless from './Tabless'

function Search() {
  const [data, setData] = useState([])
  const [serchItem, setSearchItem] = useState('')

  useEffect(() => {
    getData()
  }, [])
  
  async function getData() {
    let response = await axios.get('http://localhost:5500/userget')
    console.log(response.data)
    setData(response.data)
  }

  // const searchResult = data.filter((item)=>item.first_name.toLowerCase().includes(setSearchItem.first_name.toLowerCase()))


  // const searchedResult = data.filter((item)=>item.first_name.toLowerCase().inclues(setSearchItem.toLowerCase()))

  // const filteredData = data.filter((item) =>
  //   item.toLowerCase().includes(serchItem.toLowerCase())
  // );






  console.log(data)
  return (
    <div>
    {/* <Tabless data = {searchResult}/> */}
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search" value={serchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        {/* <Tabless data = {filteredData} /> */}
        {/* <ul>

          {filteredData.map((item, index) => {
            return (
              <>

                <li>{item.first_name}</li>

              </>
            )
          })}

        </ul> */}



        <Button variant="outline-success bg-danger">Search</Button>
      </Form>
    </div>
  )
}

export default Search