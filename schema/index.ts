import z from "zod";

export const orderFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Enter a valid name.",
  }),
  phone: z
    .string()
    .min(11, { message: "Phone is required." })
    .regex(/^(\+8801|8801|01)[0-9]{9}$/, {
      message: "Invalid Bangladeshi number.",
    }),
  address: z.string().min(5, {
    message: "Enter a valid address.",
  }),
  city: z.string().min(2, {
    message: "Enter a valid city.",
  }),
  zipCode: z
    .string()
    .length(4, { message: "Zip must be 4 digits." })
    .regex(/^[0-9]{4}$/, {
      message: "Zip must be numeric.",
    }),
});

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Enter a valid name.",
  }),
  password: z.string().min(2, {
    message: "Enter a valid name.",
  }),
});

export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Enter a valid name.",
  }),
  email: z.string().min(2, {
    message: "Enter a valid name.",
  }),
  password: z.string().min(2, {
    message: "Enter a valid name.",
  }),
});
