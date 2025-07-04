import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section className="mt-12 px-4">
      <Container className="bg-white py-10 px-6 sm:px-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center justify-between border-b border-muted pb-2 mb-4">
          <Heading text="Unani & Natural Products" />
          <Link
            href="/products"
            className="group flex items-center gap-1 text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
          >
            <span className="relative inline-block">
              <span className="group-hover:underline underline-offset-4">
                See All
              </span>
            </span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
