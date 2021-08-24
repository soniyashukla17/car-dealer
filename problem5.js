function problem5(inventory){
    let olderThan2000=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_year<2000){
            olderThan2000[i]=inventory[i].car_year;
        }
        
    }
    console.log(olderThan2000.length);
}
module.exports = {problem5}