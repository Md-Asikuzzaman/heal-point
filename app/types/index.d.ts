type ProductType = {
  id: string;
  title: string;
  price: number;
  image: string;
  brand: string;
  medicineType: string;
  medicineQuantity: string;
  description: string;
  rating: number;
};

type CartProductType = {
  id: string;
  title: string;
  price: number;
  image: string;
  brand: string;
  medicineType: string;
  medicineQuantity: string | null;
  rating: number | null;
  quantity: number;
  description: string;
};
