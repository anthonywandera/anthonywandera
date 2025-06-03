import { Validation } from "../types";

export function validate(
  value: string,
  validation: Validation
): { valid: boolean; value: string; error: string } {
  if (validation.max && typeof +value === "number" && +value > validation.max) {
    return { value, valid: false, error: `` };
  }
  return { value, valid: true, error: "" };
}
