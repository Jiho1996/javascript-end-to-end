participants = 5
const incorrectHandleling = function (){
    let _incorrect_list = new Array(participants)
    for (let i = 0; i < _incorrect_list.length ; ++i) {
        _incorrect_list[i] = 3;
}
    return function plusTarget(num){
        if (num === undefined){
            return _incorrect_list;
        }
        _incorrect_list[num] -= 1;
        return _incorrect_list;
    }
}
let i = incorrectHandleling();
console.log(i(1));
console.log(i());