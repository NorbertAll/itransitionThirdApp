import React from 'react';
import { faker as fakerEn } from '@faker-js/faker/locale/en'
import { faker as fakerHe  } from '@faker-js/faker/locale/he'
import { faker as fakerPl  } from '@faker-js/faker/locale/pl'



const Fakedata = () => {
  const myEnglishName = fakerEn.name.firstName();
  const myPolishName = fakerPl.address.city()
  const myHeName = fakerHe.name.firstName();
  
  return (
    <>
    
    <h1>Fake Data</h1>
    
    {console.log(myPolishName)}
    </>
  )
};

export default Fakedata
