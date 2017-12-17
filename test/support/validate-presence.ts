import { IValidatorFunc } from '../../src/interfaces/index';
import ValidationResult from '../../src/validation-result';

const validatePresence = (): IValidatorFunc => {
  return (key, value) => {
    return new ValidationResult(value, {
      message: `${key} must be present`,
      validation: !!value
    });
  };
};

export default validatePresence;