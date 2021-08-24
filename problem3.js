function problem3(inventory){
    let carModelinAlphabeticalOrder=[];
    for(let i=0;i<inventory.length;i++){
        carModelinAlphabeticalOrder[i]=inventory[i].car_model;
    }
    carModelinAlphabeticalOrder.sort();
    console.log(carModelinAlphabeticalOrder);
}
module.exports = {problem3}