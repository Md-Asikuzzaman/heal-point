import { Product } from "@prisma/client";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ProjectDetailsCard from "../_components/ProjectDetailsCard";

interface Props {
  params: Promise<{ slug: string }>;
}

type ProductApiResponse = {
  success: boolean;
  data: Product;
};

// generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-cache",
  });

  const { data: product }: ProductApiResponse = await res.json();

  if (!product) {
    redirect("/products");
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

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-cache",
  });

  const product: ProductApiResponse = await res.json();

  if (!product) {
    redirect("/products");
  }

  return (
    <>
      <ProjectDetailsCard {...product.data} />
    </>
  );
}
