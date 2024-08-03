const btn = document.querySelector("#btn")
let flag = true;
function click(){
    if(flag){
        console.group("Desktop View");
        console.log('Button clicked');
        document.querySelector("#style").setAttribute("href", "style-end.css");
        console.warn('Style changed to Desktop View!');
        console.groupEnd();
        flag = false
        return
    }
    console.groupCollapsed("Mobile View");
    console.info('Button clicked');
    document.querySelector("#style").setAttribute("href", "style-start.css");
    console.warn('Style changed to Mobile View!');  
    console.groupEnd();  
    flag = true;
}
btn.addEventListener("click",click);


function throwError() {
    function realError(){
        throw new Error('This is a sample error');
    }
    console.error("Close to getting Error")
    realError();

}

// throwError();