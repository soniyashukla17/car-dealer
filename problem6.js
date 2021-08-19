function problem6(inventory){
    let BMWAndAudi=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW"){
            BMWAndAudi[i]=inventory[i];
        }
    }
    console.log(BMWAndAudi);
}
module.exports = {problem6}