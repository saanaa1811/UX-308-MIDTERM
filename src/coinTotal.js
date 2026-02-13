export function coinTotal( nickels, dimes, quarters, loonies, toonies ) {

   let total = 0;

  total += nickels * 0.05;
  total += dimes * 0.10;
  total += quarters * 0.25;
  total += loonies * 1.00;
  total += toonies * 2.00;

  return total;
   
}
