function ProductCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow
                    transform transition duration-300 hover:scale-105 hover:shadow-lg">

      <img
        src={image}
        alt={title}
        className="h-52 w-52 mx-auto"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
