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

  if (query.toLowerCase().includes("What is 12 plus 22?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "34" );
  }
  

  return "";
}
