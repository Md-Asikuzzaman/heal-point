import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import { CategoryCard } from "../components/CategoryCard";

const CategorySection = () => {
  return (
    <section className="mt-12 px-4">
      <Container className="bg-white py-10 px-6 sm:px-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <Heading text="Shop By Natural Product Category" />

        <div className="flex items-center justify-center gap-12 mt-12">
          <Link href="/shop">
            <CategoryCard icon={<FaBagShopping size={50} />} title="Shop" />
          </Link>

          <Link href="/sexual-wellness">
            <CategoryCard
              icon={<PiGenderIntersexBold size={70} />}
              title="Sexual Wellness"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
