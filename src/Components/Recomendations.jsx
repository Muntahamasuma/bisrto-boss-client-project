import SectionTitle from "./SectionTitle";
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
const Recomendations = () => {
  return (
    <section className="mb-10">
      <SectionTitle
        heading={"---Should Try---"}
        subHeading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="max-w-screen-lg px-4 gap-6 flex  mx-auto">
        {/* card-1 */}
        <div className="card w-96 bg-base-100 shadow-xl rounded-md">
  <figure><img className="h-[300px] w-full" src={img1} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-medium">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn bg-base-100 uppercase text-[#BB8506] border-[#BB8506] border-b-2">add to cart</button>
    </div>
  </div>
</div>
{/* card-2 */}
<div className="card w-96 bg-base-100 shadow-xl rounded-md">
  <figure><img className="h-[300px] w-full" src={img2} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-medium">Pizza</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn bg-base-100 uppercase text-[#BB8506] border-[#BB8506] border-b-2">add to cart</button>
    </div>
  </div>
</div>
{/* card-3 */}
<div className="card w-96 bg-base-100 shadow-xl rounded-md">
  <figure><img className="h-[300px] w-full" src={img3} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-medium">Soup</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn bg-base-100 uppercase text-[#BB8506] border-[#BB8506] border-b-2">add to cart</button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Recomendations;
