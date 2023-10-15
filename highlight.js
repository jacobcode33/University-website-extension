function flip(classname){
    var tohighlight = ["(ECM1410) Object-Oriented Programming","(ECM1414) Data Structures and Algorithms","(ECM1416) Computational Mathematics","(ECM1417) Web Development"]
    var elems = document.getElementsByClassName(classname)
    for(var i = 0; i < elems.length; i++)
    {
        var elem = elems[i];
        var present = tohighlight.includes(elem.textContent);
        if (present){
            elem.classList.toggle('highlighted');
        }
        else{
            elem.parentNode.removeChild(elem);
            i--;
        }
    }
}

function replaceimg(classname){
    var elems = document.getElementsByClassName(classname)
    var elem = elems[0].children[0]
    elem.src = "https://www.validate-network.org/sites/default/files/validate/images/media/uo_exeter.png"
}

flip("r0")
flip("r1")
replaceimg("logo")