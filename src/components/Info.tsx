const Info: React.FC<{ name: string; value: string | number }> = ({
  name,
  value,
}) => {
  return (
    <div className="bg-black py-2 px-8 rounded-full font-semibold">
      {name}: {value}
    </div>
  );
};

export default Info;
