function reverse(N,input) {
   let arr = [];

   for (let i = 0; i < N; i++) {
       const element = input[i];
       arr.push(element);
   }

   let output = "";
   for (let index = arr.length - 1; index >= 0; index--) {
       const element = arr[index];
       output += element + " ";
   }
   console.log(output);
}
// 3, [10, 20, 30, 40, 50]
