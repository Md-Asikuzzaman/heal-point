import { products } from "@/constants";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetailsCard from "../components/ProjectDetailsCard";

interface Props {
  params: Promise<{ id: string }>;
}

// generateMetadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  return {
    title: `${product.title} | My Store`,
    description: `Buy ${product.title} at only $${product.price}. 100% organic and authentic natural products.`,
    openGraph: {
      title: `${product.title} | My Store`,
      description: `Buy ${product.title} at only $${product.price}.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProjectDetailsCard {...product} />
    </>
  );
}
