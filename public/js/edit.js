function _t(id) {
    return document.getElementById(id);
}

var hey = document.querySelectorAll('input')
let btn1 = _t('startEditing');

btn1.onclick = function(){
    console.log("sucess")
    for (let i = 0; i < hey.length; i++) {
       if( hey[i].readOnly== true) {
        hey[i].readOnly =false
        hey[i].style.backgroundColor ='#ffffff'
       } else {
        hey[i].readOnly =true
        hey[i].style.backgroundColor ='#f5d5b7'
       }
      }
}
