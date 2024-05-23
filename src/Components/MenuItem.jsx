

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <>
        <div className="flex">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div className="px-2">
                <h3 className="uppercase text-lg">{name}----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
        
        </>
    );
};

export default MenuItem;