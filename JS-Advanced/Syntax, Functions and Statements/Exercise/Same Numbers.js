function sameNums(input) {
  
    let curr = input.toString();
    let isTheSame = false;
    let lastElement;
    let sum = Number(0);

    for (let index = 0; index < curr.length; index++) {

        const element = parseInt(curr[index]);

        if(lastElement === element) {
            isTheSame = true;
        } else {
            isTheSame = false;
        }
      
        lastElement = element;
        sum += lastElement;
    }
  
    console.log(isTheSame);
    console.log(sum);
}
 //sameNums(1234);
