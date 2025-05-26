export function validateSignupForm(data: {
  name: string;
  phone: string;
  email: string;
  password: string;
}) {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "이름은 최소 2자 이상이어야 합니다.";
  }

  if (!data.email || !data.email.includes("@")) {
    errors.email = "올바른 이메일 주소를 입력해주세요.";
  }

  if (!data.password || data.password.length < 6) {
    errors.password = "비밀번호는 최소 6자 이상이어야 합니다.";
  }

  return errors;
}
