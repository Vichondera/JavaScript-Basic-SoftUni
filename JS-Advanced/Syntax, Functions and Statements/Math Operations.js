function operations(N1,N2,str) {

    let result;

   switch (str) {
       case '+':
           result = N1 + N2;
       break;
       case '-':
           result = N1 - N2;
       break;
       case '*':
           result = N1 * N2;
       break;
       case '%':
           result = N1 % N2;
       break;
       case '**':
           result = N1 ** N2;
       break;
       default:
           break;
   } 
   console.log(result);
}
