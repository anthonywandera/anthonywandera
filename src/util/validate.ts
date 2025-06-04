import { Validation } from "../types";

export function validate(
  value: string,
  validation: Validation
): { valid: boolean; value: string; error: string } {
  // check if empty
  if (!value.trim()) {
    return { value, valid: false, error: "This field is required" };
  }

  // check email format
  if (validation.email && !/^[^\s@]+@[^\s@]+\.[^\s@]$/.test(value.trim())) {
    return { value, valid: false, error: "Please enter the correct format" };
  }

  // check max length
  if (validation.maxLength && value.trim().length > validation.maxLength) {
    return {
      value,
      valid: false,
      error: `Should not exceed ${validation.maxLength} characters`,
    };
  }

  // check for min length
  if (validation.minLength && value.trim().length < validation.minLength) {
    return {
      value,
      valid: false,
      error: `At least ${validation.minLength} characters are required`,
    };
  }

  // check for whitespace
  if (!validation.whitespace && value.trim().includes(" ")) {
    return { value, valid: false, error: "Should not include any spaces" };
  }

  return { value, valid: true, error: "" };
}
