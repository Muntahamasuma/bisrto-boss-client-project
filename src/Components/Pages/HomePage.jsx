import { Helmet } from "react-helmet-async";
import Baner from "../Baner";
import CallUs from "../CallUs";
import Categories from "../Categories";
import OurMenu from "../OurMenu";
import PopularMenu from "../PopularMenu";
import Recomendations from "../Recomendations";
import Testimonials from "../Testimonials";


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Baner></Baner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recomendations></Recomendations>
            <OurMenu></OurMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;