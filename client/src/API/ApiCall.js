import Instance from "./Axios";


export const RegisterDatacall=async (data)=>
{
 
  return await Instance.post('/userregister',data)
}
export const Validate=async (data)=>
{

  return await Instance.get(`/userregister?user=${data}`)
}
export const LoginUserdata=async (data)=>
{
  

  return await Instance.post('/loginuser',data)
}
export const PasswordGenerator=async(Name,Password)=>
{
  console.log(Name,Password);
  console.log('dfjgosefjgoiersg');
  return await Instance.post('/newpassword',{Name,Password})
}

export const GetPasswordData=async()=>
{
  

  return await Instance.get('/getpassowrd')
}

export const DeletePassword=async(data)=>
{
  console.log(data);
  console.log('its here');
  return await Instance.get(`/deletepasword?Passid=${data}`)
}