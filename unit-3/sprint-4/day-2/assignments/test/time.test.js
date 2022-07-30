import  {convertsTime , TaxCalculator, SavingCalculator} from './time';



  test('time in seconds', () => {
    expect(convertsTime(2000)).toBe(2+"second");
  });

  test('Tax Calculation', () => {
    expect(TaxCalculator(300000)).toBe(30000);
  });

  test('Saving Calculation', () => {
    expect(SavingCalculator(400000)).toBe(200000);
  });