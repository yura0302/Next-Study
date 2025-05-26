"use server";

import { validateSignupForm } from "@/utils/validateSignupForm";

interface RegisterFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
}

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
    message?: string;
  };
}

export async function registerUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data: RegisterFormData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const errors = validateSignupForm(data);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "에러 고치기",
      errors,
    };
  }

  console.log("회원가입 요청", data);

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return {
    success: true,
    message: "회원가입 완료",
  };
}
