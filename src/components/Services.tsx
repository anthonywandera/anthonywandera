import Title2 from "./Title2";
import service_image_1 from "../assets/services/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg";

const Services: React.FC = () => {
  return (
    <div>
      <Title2>Services</Title2>
      <div className="grid grid-cols-3">
        <div className="bg-black w-80 aspect-square rounded-xl relative overflow-hidden font-semibold text-2xl">
          <img src={service_image_1} />
          <p className="w-min absolute left-4 bottom-4">Web Development</p>
        </div>
        <div>UI Design</div>
        <div>Graphic Design</div>
      </div>
    </div>
  );
};

export default Services;
