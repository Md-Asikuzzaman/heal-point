import { products } from "@/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import slugify from "slugify";

interface Props {
  params: Promise<{ slug: string }>;
}

// generateMetadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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
