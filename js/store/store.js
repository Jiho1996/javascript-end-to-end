
export const store = {
    setLocalWordStorage(word){
        localStorage.setItem("word", JSON.stringify(word));
        // localStorage.setItem("incorrectList", JSON.stringify(incorrectList));
    },
    setLocalArrayStorage(incorrect_list){
        localStorage.setItem("incorrectList", JSON.stringify(incorrect_list));
    },
    getLocalWordStorage(word){
        return JSON.parse(localStorage.getItem("word"));
    },
    getLocalArrayStorage(){
        return JSON.parse(localStorage.getItem("incorrectList"));
    },
};