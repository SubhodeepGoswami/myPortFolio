const prompt = require("prompt-sync")();
function search(arr,item){
    for(var i=0;i<arr.length;i++){
        if(item==arr[i]){
            return true;
            break;
        }
    }
    return false;
}
var arr=[1,3,4,5,2];
var item=2;
console.log(search(arr,item));