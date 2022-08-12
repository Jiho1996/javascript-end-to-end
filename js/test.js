participants = 5;

const getParticipantsArray = (arr) =>{
    for (let i = 0; i < arr.length ; ++i) {
        arr[i] = 3;
}
    return arr
}

const incorrectHandleling = function (){
    const _incorrectList = new Array(participants)
    _incorrectList = getParticipantsArray(_incorrectList);
    
    return function (num){
        if (num === undefined){
            return _incorrectList;
        }
        if (_incorrectList[num] === 0){
            return false;
        }
        _incorrectList[num] -= 1;
        return _incorrectList;
    }
}

let a = incorrectHandleling();
console.log(a(1));
console.log(a(1));
