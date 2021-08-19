function problem4(inventory){
    let arr=[];
    for(let i=0;i<inventory.length;i++){
        arr[i]=inventory[i].car_year;
    }
    console.log(arr);
}
module.exports = {problem4}