import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";


function Products(){
  return (
    <main className="py-16 px-6 max-w-7xl mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product)=>(
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </main>
  );
}
export default Products;