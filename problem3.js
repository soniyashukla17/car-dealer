function problem3(inventory){
    let arr=[];
    for(let i=0;i<inventory.length;i++){
        arr[i]=inventory[i].car_model;
    }
    arr.sort();
    console.log(arr);
}
module.exports = {problem3}