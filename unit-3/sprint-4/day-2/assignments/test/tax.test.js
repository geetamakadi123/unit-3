import  {TaxCalculator, SavingCalculator} from './tax_calculator';

  test('Tax Calculation', () => {
    expect(TaxCalculator(300000)).toBe(30000);
  });

  test('Saving Calculation', () => {
    expect(SavingCalculator(400000)).toBe(200000);
  });