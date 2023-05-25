
window.onload = function(){ 
    function _f(id) {
        return document.getElementById(id);
    }
    
    let div = _f('Text');
    let btn = _f('Btn');
    let bn = _f('ye');
    let di = _f('no')
    btn.onclick = function(){
        if (div.style.height == '357px' ){
            div.style.height = 'auto';
            Btn.style.transform = 'rotate(180deg)';
        } else {
            div.style.height = '357px';
            Btn.style.transform = 'rotate(0deg)';
        }
    }
    
    bn.onclick = function(){
        if (di.style.height == '800px' ){
            di.style.height = 'auto';
            ye.style.transform = 'rotate(180deg)';
        } else {
            di.style.height = '800px';
            ye.style.transform = 'rotate(0deg)';
        }
    }
};
