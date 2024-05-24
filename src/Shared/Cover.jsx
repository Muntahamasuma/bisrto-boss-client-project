import { Parallax } from 'react-parallax';


const Cover = ({img, title, subtitle}) => {
    return (
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <section>
            <div className="hero h-[500px]">
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-lg bg-black bg-opacity-50 py-14 w-[1000px]">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 uppercase">{subtitle}</p>
     
    </div>
  </div>
</div>
        </section>
    </Parallax>
        
    );
};

export default Cover;