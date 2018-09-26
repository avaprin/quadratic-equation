module.exports = function solveEquation(equation)
{
  let count = equation.length;
  var A = [];
  var Koef = [];
  for(let i = 0;i<count;++i)
  {
    if ((equation.charAt(i) === "+" || equation.charAt(i) === '-'))
    {
      if (A.length)
      {
        Koef.push(Number(A.join("")));
      }
      A = [];
      A.push(equation.charAt(i));
    }
    if (!isNaN(equation.charAt(i)) && equation.charAt(i) !== " ")
    {
      A.push(equation.charAt(i));
    }
    if (equation.charAt(i) === '^')
    {
      i++;
    }
  }
  Koef.push(Number(A.join("")));
  var a = Koef[0];
  var b = Koef[1];
  var c = Koef[2];
  var d;
    d=b*b - 4*a*c;
    if(a>0)return [Math.round((-b-Math.sqrt(d))/(2*a)),Math.round((-b+Math.sqrt(d))/(2*a))].sort((c,d)=>c>=d);

    else return [Math.round((-b+Math.sqrt(d))/(2*a)),Math.round((-b-Math.sqrt(d))/(2*a))].sort((c,d)=>c>=d);
  // your implementation
}
