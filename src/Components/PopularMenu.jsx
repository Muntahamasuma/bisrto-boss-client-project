import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className=" my-10 max-w-screen-lg mx-auto space-y-6">
      <SectionTitle
        subHeading={"FROM OUR MENU"}
        heading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="flex items-center justify-center">
        <button className="btn uppercase  text-white bg-slate-500 border-b-2 border-black">View Full Menu</button>
        </div>
    </section>
  );
};

export default PopularMenu;
