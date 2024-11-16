import { z } from "zod";

export const qouteFormSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  email: z.string().min(1, { message: "Enter your email" }),
  businessName: z.string().min(1, { message: "Enter your Business name" }),
  platforms: z.string().min(1, { message: "Select social media platforms" }),
  industry: z.string().min(1, { message: "Select your industry" }),
  country: z.string().min(1, { message: "Select your country" }),
  teamSize: z.string().min(1, { message: "Select your team size" }),
});
