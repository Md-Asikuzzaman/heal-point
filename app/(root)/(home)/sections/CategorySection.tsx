import Container from "@/components/shared/Container";
import React from "react";
import { CategoryCard } from "../components/CategoryCard";
import { FaBagShopping } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import Link from "next/link";

const CategorySection = () => {
  return (
    <section>
      <Container>
        <h3 className="text-2xl text-center font-medium mt-12">
          Shop By Natural Product Category
        </h3>

        <div className="grid grid-cols-6 gap-4 mt-12">
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
