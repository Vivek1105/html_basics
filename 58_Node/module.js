console.log("thi is module ")

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
module.exports = {
    avg: average,
    name: "vivek",
    sec: "vc"
}