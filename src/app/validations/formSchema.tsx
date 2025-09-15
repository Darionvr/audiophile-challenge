import { z } from "zod";

export const formSchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email_adress: z.string().email("Invalid email address"),
  phone_number: z.string().min(8, "Phone is required"),
  adress: z.string().min(5, "Address is required"),
  zip_code: z.string().min(4, "ZIP is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  method: z.enum(["e-Money", "Cash-on Delivery"], "Select a payment method"),
});