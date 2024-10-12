const ChefCard = ({ chef }) => {
  const { description, image, name } = chef;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={image} className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary bg-amber-500 hover:bg-amber-600 border-none">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
