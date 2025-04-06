const Service: React.FC<{ image: string; name: string }> = ({
  image,
  name,
}) => {
  return (
    <div className="bg-black aspect-square rounded-xl relative overflow-hidden font-semibold text-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
      <p className="w-min absolute left-4 bottom-4">{name}</p>
    </div>
  );
};

export default Service;
