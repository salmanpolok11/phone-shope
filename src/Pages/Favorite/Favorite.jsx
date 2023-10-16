import { useEffect, useState } from "react";
import Phone from "../../Components/Phone/Phone";
import PhonesCard from "../../Components/Phone/PhonesCard";

const Favorite = () => {

  const [favorite, setFavorite] = useState([])
  const [notFound, setFound] = useState(false)
  const [isShow , setShow] = useState(false)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
    if (favoriteItems) {
      setFavorite(favoriteItems);
    }
    else {
      setFound("no found data ")
    }
  }, [])

  console.log(favorite);

  return (
    <div> {notFound ? <p>{notFound} </p> : <div>

      <div className="grid md:grid-cols-2 gap-7">

        {

         isShow ?    favorite.map(phone => <PhonesCard key={phone.id} phone={phone} ></PhonesCard>)

         :    favorite.slice(0,2).map(phone => <PhonesCard key={phone.id} phone={phone} ></PhonesCard>)

        }

      </div>
      <button 
      onClick={() => setShow(!isShow)}
      className="px-6 p-3 flex mt-5 bg-red-500 mx-auto text-white font-semibold rounded-md shadow-lg">
         {isShow ? "see less" : "see more"}
        </button>

    </div>}
    </div>
  );
};

export default Favorite;