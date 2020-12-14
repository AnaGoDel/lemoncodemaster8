import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasItems: FieldValidationFunctionSync = ({ value }) => {
  const isValid = Array.isArray(value) && value.length > 0;
  console.log(Array.isArray(value));
  console.log(value);
  return {
    type: "ARRAY_HAS_ITEMS",
    succeeded: isValid,
    message: isValid ? "" : "Should has one or more ingredients",
  };
};

export { hasItems };