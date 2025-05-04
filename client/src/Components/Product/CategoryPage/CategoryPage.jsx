import { useParams } from "react-router-dom";
import { products } from "../../../data/mockProducts";
import ProductCard from "../ProductCard/ProductCard";

const CategoryPage = () => {
    const { categoryName } = useParams();

    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName}</h2>
            {filteredProducts.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
