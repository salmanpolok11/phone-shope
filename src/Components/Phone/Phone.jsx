import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhonesCard from "./PhonesCard";



const Phone = () => {

  const {id} = useParams()

const  [phone , setPhone] = useState({})
const phones = useLoaderData()

useEffect( () => {
     const phoneFind = phones.find( phone => phone.id === id)
     setPhone(phoneFind)
}, [id, phones])

console.log(phone.id);

  return (
    <div>
         <PhonesCard phone={phone} ></PhonesCard>
    </div>
  );
};

export default Phone;