import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function TableWithSearch() {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5500/userget');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.includes(searchKeyword)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e)=>setSearchKeyword(e.target.value)}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableWithSearch;
