import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import { BsPlayCircle } from "react-icons/bs";
import { Card } from 'react-bootstrap'; // or your preferred library
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="lg:flex">
      <div className="flex flex-col lg:flex-row z-10 items-center relative lg:flex gap-4 lg:gap-0">
        <div className="lg:w-[50%] lg:px-32 mx-auto text-start lg:text-start px-4 py-10">
          <p className="text-[#F27405] font-light">HELPING BUSINESSES THRIVE WITH DATA</p>
          <h1 className="text-2xl mt-4 lg:text-6xl font-bold relative after:absolute after:content-[''] after:top-0 after:bg">Gain Insights,<br />Drive Growth</h1>
          <p className="lg:my-8 my-2">Integrate all your data sources to unlock insights and drive strategic decisions that propel your business forward.</p>
          
          <div className="bg-white shadow-lg absolute left-0 lg:w-[40%] p-4 lg:ps-[8rem] rounded-ee-[1rem] rounded-se-[1rem]">
            <div className="flex gap-12">
              <Button className="bg-[#F27405] text-white rounded-lg shadow-lg">Book a Call</Button>
              <div className="flex items-center gap-2">
                <BsPlayCircle color="#F27405" size="2em" />
                <p>Play Demo</p>
              </div>
            </div>
          </div>
          <div className="absolute lg:-left-14 -left-10 w-40 lg:w-full">
            <Image src="/images/Arrow.png" alt='arrow' width={290} height={328}/>
          </div>
        </div>
        <div className="-order-1 lg:order-2">
          <Image src="/images/Heero Image Circular.png" alt="Hero Image" width={712} height={712} />
          <Image className={`${styles.theImage} absolute right-0 top-32`} src="/images/laptop_mockup2.png" alt="Laptop Image" width={712} height={712} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
