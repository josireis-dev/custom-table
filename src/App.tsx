import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import CustomTable from './components/CustomTable/CustomTable';
import { ColDef } from './types';
import { IRendererParams } from './components/Cell/Cell';

export interface User {
  first_name: string
  last_name: string
  email: string
  avatar: string
}

const colDef: ColDef<User> = [
  {
    id: "first_name",
    name: "First Name",
    accessor: "first_name",
  },
  {
    id: "last_name",
    name: "Last Name",
    accessor: "last_name",
  },
  {
    id: "email",
    name: "Email",
    accessor: "email",
  },
  {
    id: "avatar",
    name: "Avatar",
    accessor: "avatar",
    renderer: 'img',
    rendererParams: (params: IRendererParams<User>) => ({src: params.data, style: {borderRadius: '50%'}})
  }
]

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(res => setUsers(res.data.data))
  }, [setUsers])

  return (
    <div className="App">
      <CustomTable data={users} colDef={colDef} />
    </div>
  );
}

export default App;

