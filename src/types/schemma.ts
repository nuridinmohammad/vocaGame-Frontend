import { z } from "zod";

export const passwordValidation = z
  .string()
  .min(6, "be at least 6 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).*$/,
    "include both lower and upper case characters"
  )
  .regex(
    /^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?\\[\];',./`~]).*$/,
    "include at least one number and symbol"
  );

export const registerSchema = z
  .object({
    name: z.string().min(3),
    handphone: z
      .string()
      .min(10)
      .refine(
        (value) => {
          const numberValue = Number(value);
          return !isNaN(numberValue);
        },
        {
          message: "Handphone must be a valid number",
        }
      ),
    password: passwordValidation.refine(
      (data) => (data.length < 6 ? false : true),
      {
        message: "be at least 6 characters long",
      }
    ),
    confirmPassword: z
      .string()
      .min(1, "must be fill")
      .refine((data) => (data.length < 6 ? false : true), {
        message: "be at least 6 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["password"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchemma = z.object({
  username: z.string().min(6),
  password: passwordValidation.refine(
    (data) => (data.length < 6 ? false : true),
    {
      message: "be at least 6 characters long",
    }
  ),
});

export const editSchemma = z.object({
  name: z.string().optional(),
  handphone: z.string().optional(),
  password: passwordValidation.refine(
    (data) => (data.length < 6 ? false : true),
    {
      message: "be at least 6 characters long",
    }
  ),
  confirmPassword: z.string().optional(),
});
