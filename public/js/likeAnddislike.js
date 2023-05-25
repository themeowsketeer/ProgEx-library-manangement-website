function _t(id) {
    return document.getElementById(id);
}

let input = _t('rating');
let like= _t('like');
let dislike =_t('dislike')


like.onclick = function(){
    console.log("sucess")
    input.value = "Recommended"

}
dislike.onclick = function(){
    console.log("sucess")
    input.value = 'Not Recommended'
    
}