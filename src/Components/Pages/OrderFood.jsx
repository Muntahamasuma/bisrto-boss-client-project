import { Helmet } from "react-helmet-async";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
// import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"Order Food"}
        subtitle={"Would You Like to Try A Dish"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="flex justify-center gap-10 my-2 ">
    <Tab className="uppercase font-medium">Salad</Tab>
    <Tab className="uppercase font-medium">pizza</Tab>
    <Tab className="uppercase font-medium">soups</Tab>
    <Tab className="uppercase font-medium">desserts</Tab>
    <Tab className="uppercase font-medium">drinks</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
      {/* <div role="tablist" className="tabs tabs-bordered max-w-screen-md mx-auto">
  <Link to='/' role="tab" className="tab uppercase font-medium">Salad</Link>
  <Link to='/' role="tab" className="tab tab-active uppercase font-medium">pizza</Link>
  <Link to='/' role="tab" className="tab uppercase font-medium">soups</Link>
  <Link to='/' role="tab" className="tab uppercase font-medium">desserts</Link>
  <Link to='/' role="tab" className="tab uppercase font-medium">drinks</Link>
</div> */}
    </div>
  );
};

export default OrderFood;
