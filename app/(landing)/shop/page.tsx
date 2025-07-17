import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/constants";

export default function Shop() {
  return (
    <section className="my-12 px-4">
      <Container className="bg-white py-10 px-6 sm:px-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <Heading text="Shop Natural Products" />

        {/* Products list */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
