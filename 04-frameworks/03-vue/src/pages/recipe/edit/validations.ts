import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasItems } from "../../../common/validations/hasItems";
import { notEmpty } from "../../../common/validations/notEmpty";

const validationSchema: ValidationSchema = {
    field: {
        name: [Validators.required],
        description: [Validators.required],
        ingredients: [hasItems],
        ingredient: [notEmpty],
    },
};

export const validations = createFormValidation(validationSchema);