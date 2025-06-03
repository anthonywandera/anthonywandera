import { Validation } from "../types";

export function validate(
  value: string,
  validation: Validation
): { valid: boolean; value: string; error: string } {
  // check max val
  if (validation.max && typeof +value === "number" && +value > validation.max) {
    return {
      value,
      valid: false,
      error: `Should not exceed ${validation.max}`,
    };
  }
  return { value, valid: true, error: "" };
}
