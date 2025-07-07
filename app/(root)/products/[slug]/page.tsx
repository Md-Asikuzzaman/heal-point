import { products } from "@/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import slugify from "slugify";

interface Props {
  params: Promise<{ slug: string }>;
}

// generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(({ title }) => {
    const slugs = slugify(title, { lower: true, strict: true });
    return slugs === slug;
  });

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  return {
    title: `${product.title}`,
    description: `Buy ${product.title} at only ৳${product.price}. 100% organic and authentic natural products.`,
    openGraph: {
      title: `${product.title}`,
      description: `Buy ${product.title} at only ৳${product.price}. 100% organic and authentic natural products.`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;

  const product = products.find(({ title }) => {
    const slugs = slugify(title, { lower: true, strict: true });
    return slugs === slug;
  });

  if (!product) {
    redirect("/products");
  }

  return (
    <>
      <ProjectDetailsCard {...product} />
    </>
  );
}
