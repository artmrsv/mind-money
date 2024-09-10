import { z, ZodType } from "zod";

export const authSchema: ZodType<any> = z.object({
  email: z.string().email({ message: "Wrong type of e-mail" }),
  phone: z.string().min(1, { message: "Enter phone number" }),
  refferalCode: z.string(),
  isAgree: z
    .boolean({ message: "Need agree" })
    .refine((isChecked) => isChecked, {
      message: "Need agree",
    }),
  password: z
    .string()
    .min(8, { message: "At least 8 characters" })
    .regex(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]|[0-9]/, {
      message: "Contains a number or(and) symbol",
    })
    .regex(/[A-Z]/, { message: "One or more capitalized letter" })
    .refine(
      (val) => {
        console.log("validate", z.string().email().safeParse(val).success);
        return !z.string().email().safeParse(val).success;
      },
      {
        message: "Can’t contain e-mail address",
      },
    ),
});
