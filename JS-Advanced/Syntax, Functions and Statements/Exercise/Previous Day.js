function prevDay(y,m,d) {

    let dd = d;
    let mm = m;
    let yy = y;
    
    if((d - 1) <= 0) {
        mm--;
        dd = 31;
        if(mm <= 0) {
            yy--;
             mm = 12;
        }
    }
    
    let date = `${yy}-${mm}-${(dd-1)}`;
    console.log(date);
}

// prevDay(2016, 9, 30);
