const Service: React.FC<{ image: string; name: string }> = ({
  image,
  name,
}) => {
  return (
    <div className="bg-black aspect-square rounded-xl relative overflow-hidden font-semibold text-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
      <p className="w-min absolute left-4 max-sm:left-1.5 bottom-4 max-sm:bottom-1.5">
        {name}
      </p>
    </div>
  );
};

export default Service;
