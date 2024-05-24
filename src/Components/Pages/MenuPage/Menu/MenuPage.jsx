import { Helmet } from "react-helmet-async";
import Cover from "../../../../Shared/Cover";
import menuImg from "../../../../assets/menu/banner3.jpg"
import MenuImages from "../../../../Shared/MenuImages";
import SectionTitle from "../../../SectionTitle";
import useMenu from "../../../../Hooks/UseMenu";

const MenuPage = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered")
    const pizza = menu.filter((item) => item.category === "pizza")
    const dessert = menu.filter((item) => item.category === "dessert")
    const salad = menu.filter((item) => item.category === "salad")
    const soup = menu.filter((item) => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} subtitle={'Would You Like to Try A Dish'}/>
            <SectionTitle heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"}></SectionTitle>
            <MenuImages items={offered}></MenuImages>
            
            <Cover img={menuImg} title={'dessert'} subtitle={'Would You Like to Try A Dish'}/>
             <MenuImages items={dessert}></MenuImages>
            
            <Cover img={menuImg} title={'pizza'} subtitle={'Would You Like to Try A Dish'}/>
             <MenuImages items={pizza}></MenuImages>

            <Cover img={menuImg} title={'salad'} subtitle={'Would You Like to Try A Dish'}/>
             <MenuImages items={salad}></MenuImages>

            <Cover img={menuImg} title={'soup'} subtitle={'Would You Like to Try A Dish'}/>
             <MenuImages items={soup}></MenuImages>
        </div>
    );
};

export default MenuPage;