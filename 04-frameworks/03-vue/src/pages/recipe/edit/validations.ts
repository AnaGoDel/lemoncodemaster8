import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasItems } from "../../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
    field: {
        name: [Validators.required],
        description: [Validators.required],
        ingredients: [hasItems],
    },
};

export const validations = createFormValidation(validationSchema);