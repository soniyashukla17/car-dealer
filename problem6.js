function problem6(inventory){
    let BMWAndAudiCars=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW"){
            BMWAndAudiCars[i]=inventory[i];
        }
    }
    console.log(BMWAndAudiCars);
}
module.exports = {problem6}