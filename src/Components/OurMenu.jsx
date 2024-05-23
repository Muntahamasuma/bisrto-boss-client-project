import SectionTitle from "./SectionTitle";
import menuImg from "../assets/home/featured.jpg";

const OurMenu = () => {
  return (
    <div className="bg-fixed bg-[url('/src/assets/home/featured.jpg')] bg-black opacity-90">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center text-white py-8 px-16 ">
        <img className="w-[600px] h-[400px]" src={menuImg} alt="" />
        <div className="space-y-4 py-14 px-4 bg-slate-900 opacity-80 w-[600px] h-[400px]">
        <h3>
          March 20, 2023
        </h3>
        <h3>WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error voluptate facere, deserunt dolores
          maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
          tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className="uppercase btn text-white btn-outline border-b-4 border-white">read more</button>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
