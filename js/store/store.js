export const store = {
    setLocalStorage(word){
        localStorage.setItem("word", JSON.stringify(word));
    },
    getLocalStorage(){
        return JSON.parse(localStorage.getItem("word"))
    },
};