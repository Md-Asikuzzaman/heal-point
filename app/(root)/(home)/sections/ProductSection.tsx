import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { ProductCard } from "@/components/shared/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section className="mt-8">
      <Container className="bg-white py-8 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <Heading text="Unani & Natural Products" />
          <Link
            href={"/products"}
            className="flex items-center gap-0.5 text-primary"
          >
            See All <ChevronRight />
          </Link>
        </div>

        {/* Products list */}

        <div>
          <ProductCard price={20} title={"Unani Product 1"} url={"/products/product-1.jpeg"} />
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
