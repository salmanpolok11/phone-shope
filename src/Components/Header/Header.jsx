import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    <div className="">
      <ul className="flex gap-5">


        <NavLink to="/" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400 underline" : ""}>Home</NavLink>
        <NavLink to="/favorite" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400  underline" : " "}>Favorite</NavLink>
        <NavLink to="/login" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-400 underline " : ""}> Login</NavLink>

      </ul>
    </div>
  );
};

export default Header;