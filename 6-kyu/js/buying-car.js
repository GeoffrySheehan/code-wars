// Buying a car
// https://www.codewars.com/kata/554a44516729e4d80b000012

function percentDecrease(price, percent) {
  return price - (price * percent / 100);
}

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let months = 1;
  let savings = 0;
  while(startPriceOld + savings < startPriceNew) {
    startPriceOld -= (startPriceOld * percentLossByMonth / 100);
    startPriceNew -= (startPriceNew * percentLossByMonth / 100);
    
    savings += savingperMonth;
    months++;
    
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
  }
  return [months - 1, Math.round((startPriceOld + savings) - startPriceNew)];
}
