import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'validateCPF', async: false })
export class ValidateCPF implements ValidatorConstraintInterface {
  validate(cpf: string): boolean {
    return this.validateCPF(cpf);
  }
  defaultMessage(): string {
    return 'Invalid CPF.';
  }

  private validateCPF(cpf: string): boolean {
    if (!cpf) return false; // check if it's not null or undefined

    const strippedCPF = cpf.replace(/\D/g, ''); // remove non-numeric characters

    if (!/^\d{11}$/.test(strippedCPF)) return false; // check if it has 11 digits

    const cpfNumbers = Array.from(strippedCPF, Number);

    if (new Set(cpfNumbers).size === 1) return false; // check if all digits are the same

    const calculateRest = (sum: number) => {
      const rest = (sum * 10) % 11;
      return rest === 10 || rest === 11 ? 0 : rest;
    }; // calculate the rest of the division

    const sum = Array.from(
      { length: 9 },
      (_, i) => cpfNumbers[i] * (11 - i - 1),
    ).reduce((a, b) => a + b, 0); // calculate the sum of the first 9 digits

    if (calculateRest(sum) !== cpfNumbers[9]) return false; // check if the first digit is correct

    const sum2 = Array.from(
      { length: 10 },
      (_, i) => cpfNumbers[i] * (12 - i - 1),
    ).reduce((a, b) => a + b, 0); // calculate the sum of the first 10 digits

    if (calculateRest(sum2) !== cpfNumbers[10]) return false; // check if the second digit is correct

    return true; // if all checks are correct, return true
  }
}
