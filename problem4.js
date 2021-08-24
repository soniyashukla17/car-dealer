function problem4(inventory){
    let carYear=[];
    for(let i=0;i<inventory.length;i++){
        carYear[i]=inventory[i].car_year;
    }
    console.log(carYear);
}
module.exports = {problem4}