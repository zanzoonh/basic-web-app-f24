export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "zrh" );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "zrh-313" );
  }

  const pattern = /^What is \d+ plus \d+\?$/i;
  if (pattern.test(query)) {
    const match = query.match(/(\d+)\s*plus\s*(\d+)/i);
    
    if (match) {
        const num1 = parseInt(match[1], 10); // First number
        const num2 = parseInt(match[2], 10); // Second number
        const sum = num1 + num2; // Calculate the sum
        return sum.toString(); // Return the result as a string
    }
  }


  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g); // Matches integers and decimals
    const parsedNumbers = numbers ? numbers.map(Number) : []; // Convert strings to numbers

    // Calculate the maximum number
    const maxNumber = Math.max(...parsedNumbers);
    return maxNumber.toString();
  }

  return "";
}
