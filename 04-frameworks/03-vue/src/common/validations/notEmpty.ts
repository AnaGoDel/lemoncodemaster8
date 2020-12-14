import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const notEmpty: FieldValidationFunctionSync = ({ value }) => {
  const isValid = value !== "";
  return {
    type: "NOT_EMPTY",
    succeeded: isValid,
    message: isValid ? "" : "Should not be empty",
  };
};

export { notEmpty };