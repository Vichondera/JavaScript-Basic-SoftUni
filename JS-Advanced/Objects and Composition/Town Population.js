function townPopulation(input) {
   let towns = {};

   for (const info of input) {
       
    let infoArr = info.split(' <-> ');
    let town = infoArr[0];
    let population = Number(infoArr[1]);

    if(!towns[town]) {
        towns[town] = 0;
    }

    towns[town] += population;
   }

   for (const town in towns) {
       console.log(`${town} : ${towns[town]}`);
   }
}
