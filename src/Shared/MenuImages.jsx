import MenuItem from "../Components/MenuItem";


const MenuImages = ({items}) => {
    return (
        <section className=" my-10 max-w-screen-lg mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="flex items-center justify-center">
        <button className="btn uppercase  text-black bg-white border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    </section>
    );
};

export default MenuImages;