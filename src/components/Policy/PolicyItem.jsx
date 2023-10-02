const PolicyItem = ({ title, desc }) => {
  return (
    <div className="mx-4 mt-4 rounded-lg pt-1">
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm ml-5 mt-2">{desc}</p>
    </div>
  );
};

export default PolicyItem;
