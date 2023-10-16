import PhoneCard from "../PhoneCard/PhoneCard";



const Phones = ({phones}) => {
console.log(phones);


  return (
    <div>
           <h1 className=" text-3xl py-10 text-center">All Catagoris Phone {phones.length} </h1>
            
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {
               phones.map(phone => <PhoneCard phone={phone}   > </PhoneCard>)
            }
         </div>

    </div>
  );
};

export default Phones;