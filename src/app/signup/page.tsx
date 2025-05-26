"use client";

import { registerUser } from "@/actions/registerUser";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

function FormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? "가입중..." : " 회원가입"}
    </button>
  );
}

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold">회원가입</h2>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`w-full mt-1 p-2 border rounded ${
            state.errors?.name ? "border-red-400" : "border-gray-300"
          }`}
        />
        {state.errors?.name && (
          <p className="text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">전화번호</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full mt-1 p-2 border rounded border-gray-300"
        />
        {state.errors?.phone && (
          <p className="text-sm text-red-600">{state.errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`w-full mt-1 p-2 border rounded ${
            state.errors?.email ? "border-red-400" : "border-gray-300"
          }`}
        />
        {state.errors?.email && (
          <p className="text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={`w-full mt-1 p-2 border rounded ${
            state.errors?.password ? "border-red-400" : "border-gray-300"
          }`}
        />
        {state.errors?.password && (
          <p className="text-sm text-red-600">{state.errors.password}</p>
        )}
      </div>

      <FormSubmitButton />
      {isPending && <p>회원가입 보내는중 ...</p>}

      {state.message && (
        <p
          className={`mt-4 p-2 text-center rounded ${
            state.success
              ? "text-green-700 bg-green-100"
              : "text-red-700 bg-red-100"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
