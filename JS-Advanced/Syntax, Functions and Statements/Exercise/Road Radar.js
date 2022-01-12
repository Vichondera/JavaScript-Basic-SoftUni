function speedLimit(speed,area) {
    
    let limit = Number(0);
    
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
            case 'interstate':
                limit = 90;
            break;
            case 'city':
                limit = 50;
            break;
            case 'residential':
                limit = 20;
            break;
    }

    let diff = 0;
    if(speed > limit) {
        diff = speed - limit;
        if(diff >= 0 && diff <= 20) { 
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`);
        } else if(diff > 20 && diff <= 39) { 
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`);
        }
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

}
// speedLimit(200, 'motorway');
