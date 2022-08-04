import React from 'react';
import { faker as fakerEn } from '@faker-js/faker/locale/en'
import { faker as fakerHe  } from '@faker-js/faker/locale/he'
import { faker as fakerPl  } from '@faker-js/faker/locale/pl'



const Fakedata = () => {
  const myEnglishName = fakerEn.name.firstName();
  const myPolishName = fakerHe.name.firstName();
  const myHeName = fakerPl.name.firstName();
  
  return (
    <>
    <h1>Fake Data</h1>
    <div>{myPolishName}</div>
    </>
  )
};

export default Fakedata
