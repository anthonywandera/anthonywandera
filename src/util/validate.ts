import { Validation } from "../types";

export function validate(
  value: string,
  validation: Validation
): { valid: boolean; value: string; error: string } {
  // check max length
  if (validation.maxLength && value.length > validation.maxLength) {
    return {
      value,
      valid: false,
      error: `Should not exceed ${validation.max} characters`,
    };
  }

  // check for min length
  if (validation.minLength && value.length < validation.minLength) {
    return {
      value,
      valid: false,
      error: `At least ${validation.max} characters are required`,
    };
  }

  return { value, valid: true, error: "" };
}
