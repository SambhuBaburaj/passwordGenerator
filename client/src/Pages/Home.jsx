import React, { useEffect, useState } from 'react';

import DataTable from '../Components/DataTable';
import NavBar from '../Components/Navbar';
import AddPAssword from '../Components/AddPAssword';
import { DeletePassword, GetPasswordData } from '../API/ApiCall';
import ConfirmModal from '../Components/Confirmation';



function App() {
const [Popup,setPopup] = useState(false)
const [Delete, setDelete] = useState(false)
const [Data, setData] = useState([])
const [passId, setPassId] = useState('')
const DeletePass=async ()=>
{
 
await DeletePassword(passId).then(data=>
  {
   console.log('edrkugesg');
   GetPassword()
   setDelete(false)
  })
}

  const GetPassword=()=>
  {
    GetPasswordData().then(data=>
      {
        console.log(data);
        setData(data.data)
      })
  }
useEffect(()=>
{
  GetPassword()
},[Popup])



  return (
    <div>
      <NavBar />
     {Data?<DataTable  data={Data} passpop={setPopup} setDelete={setDelete} setPassId={setPassId}/>:null} 
      {Popup ? <AddPAssword setPopup={setPopup}  /> : null}
{Delete?<ConfirmModal setDelete={setDelete} DeletePass={DeletePass} />:null}
    </div>
  );
}

export default App;
