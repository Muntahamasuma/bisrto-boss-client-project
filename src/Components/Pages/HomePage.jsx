import Baner from "../Baner";
import CallUs from "../CallUs";
import Categories from "../Categories";
import PopularMenu from "../PopularMenu";
import Recomendations from "../Recomendations";


const HomePage = () => {
    return (
        <div>
            <Baner></Baner>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recomendations></Recomendations>
        </div>
    );
};

export default HomePage;