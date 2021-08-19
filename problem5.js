function problem5(inventory){
    let arr=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_year<2000){
            arr[i]=inventory[i].car_year;
        }
    }
    console.log(arr.length);
}
module.exports = {problem5}