import React, { useState } from 'react';
import { faker as fakerEn } from '@faker-js/faker/locale/en'
import { faker as fakerRu  } from '@faker-js/faker/locale/ru'
import { faker as fakerPl  } from '@faker-js/faker/locale/pl'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Select } from '@mui/material';
import { Table } from 'react-bootstrap';

function randomNumGenerator() {
  let r = Math.random().toString(36).substring(7);
  return r;
}


const Fakedata = () => {
  const [seedValue, setSeedValue] = useState(0)
  const [language, setLanguage] = useState(1)
  let data=[];
  const [datax, setDatax] = useState(1)
  const [dat, setdat] = useState(0)
  //const myEnglishName = fakerEn.name.firstName();
  //const myPolishName = fakerPl.address.city() 
  //const myRuName = fakerRu.name.firstName()
 const send= ()=>{
  setdat(1)
  if(language==1){
    
    for(let i=0; i<20; i++){
      let index=i+1;
      let identifier= randomNumGenerator();
      let firstName=fakerPl.name.firstName();
      let middleName=fakerPl.name.middleName();
      let lastName=fakerPl.name.lastName();
      let name = firstName+" "+middleName+" "+lastName;
      //let address=fakerPl.address()
      let adressf= fakerPl.address.streetAddress();
      let adresss=fakerPl.address.zipCode();
      let adresst=fakerPl.address.city();
      let address=adressf+" "+adresss+" "+adresst;
      let phone=fakerPl.phone.number();
      data.push({"index": index, "identifier":identifier, "name":name, "address":address, "phone":phone})
    }
   
  }
  if(language==2){

for(let i=0; i<20; i++){
  let index=i+1;
  let identifier= randomNumGenerator();
  let firstName=fakerEn.name.firstName();
  let middleName=fakerEn.name.middleName();
  let lastName=fakerEn.name.lastName();
  let name = firstName+" "+middleName+" "+lastName;
  //let address=fakerPl.address()
  let adressf= fakerEn.address.streetAddress();
  let adresss=fakerEn.address.zipCode();
  let adresst=fakerEn.address.city();
  let address=adressf+" "+adresss+" "+adresst;
  let phone=fakerEn.phone.number();
  data.push({"index": index, "identifier":identifier, "name":name, "address":address, "phone":phone})
  }}
  if(language==3){

for(let i=0; i<20; i++){
  let index=i+1;
  let identifier= randomNumGenerator();
  let firstName=fakerRu.name.firstName();
  let middleName=fakerRu.name.middleName();
  let lastName=fakerRu.name.lastName();
  let name = firstName+" "+middleName+" "+lastName;
  //let address=fakerPl.address()
  let adressf= fakerRu.address.streetAddress();
  let adresss=fakerRu.address.zipCode();
  let adresst=fakerRu.address.city();
  let address=adressf+" "+adresss+" "+adresst;
  let phone=fakerRu.phone.number();
  data.push({"index": index, "identifier":identifier, "name":name, "address":address, "phone":phone})
  }}
  console.log(seedValue);
  console.log(language);
  console.log(data);
  setDatax(data)
 }
  const handleChange = (event) => {
    if(event.target.value<0){
      setSeedValue(0);
    }else if (event.target.value>1000){
      setSeedValue(1000);
    }else{
      setSeedValue(event.target.value);
    }
    
    
  };
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <>
    
    <h1>Fake Data</h1>

    <div className='slider'>
    
    <Box width={300} >
      <h2>Select region</h2>
      <Select
    
    value={language}
    label="Language"
    onChange={handleChangeLanguage}
  >
    <MenuItem value={1}>Polish</MenuItem>
    <MenuItem value={2}>English</MenuItem>
    <MenuItem value={3}>Russian</MenuItem>
  </Select>
    <h2>Choose seed value</h2>
    <Slider 
      
      
      min={0}
      max={1000}
      step={1}
      value={seedValue}
      onChange={handleChange}/>


    <TextField 
    
      min={0}
      max={1000}
      id="outlined-basic" 
      label="seed value" 
      type="number"
     
      variant="outlined" 
      value={seedValue}
      onChange={handleChange}/>
      <br/><br/>
      <Button variant="contained" color="success" onClick={send}>Get Data</Button>
    </Box>
    {dat===1&&<>
    <h3>Data</h3>
    <Table>
    <tr>
      <th>index</th>
      <th>identifier</th>
      <th>name</th>
      <th>address</th>
      <th>phone</th>
    </tr>

    
    {datax.map((value, key)=>{
            return <tr key={value.index}>
            <td>{value.index}</td>
            <td>{value.identifier}</td>
            <td>{value.name}</td>
            <td>{value.address}</td>
            <td>{value.phone}</td>
          </tr>
          })}
    </Table>



  </>
     }
      

    

    </div>
    
    </>
  )
};
 
export default Fakedata;
