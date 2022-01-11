function stop(input) {
    let c = 0;

    while(true) {
        let inputec = input[c];
        if(inputec === 'Stop') {
            break;
        }
        console.log(inputec);
        c++;
    }
}
//stop(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
