function max(input) {
    let idx = 0;
    let element = input[idx];
    let maxInt = Number.MIN_SAFE_INTEGER;

    while(element !== "Stop") {
      let current = Number(element);

        if(current > maxInt) {
            maxInt = current;
        } 
  element = input[idx];
  idx++;
  }
  console.log(maxInt);
}
//max(["100","99","80","70","Stop"]);
