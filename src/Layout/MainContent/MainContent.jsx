import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const MainContent =() => {
  return (
    <div className=" max-w-[1300px]  mx-auto  ">
               <nav className="">
              <section className="flex justify-between items-center shadow-xl py-6  px-5">
              <h1 className=" text-2xl font-semibold">Phone Shope</h1>
                <Header/>
              </section>
                </nav>
                <Outlet></Outlet>
    </div>
  );
};

export default MainContent;