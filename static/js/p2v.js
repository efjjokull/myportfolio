function randomGeneratorName(){
    var num = Math.floor(Math.random()*927);
    document.selectName.poke_name.selectedIndex = num;
    $('form').submit();
}

function randomGeneratorType(){
    var num = Math.floor(Math.random()*18);
    document.selectName.poke_type.selectedIndex = num;
    $('form').submit();
}

function randomGenerator(){
    var nameNum = Math.random()*927;
    var typeNum = Math.random()*18;
    document.selectName.poke_name.selectedIndex = nameNum;
    document.selectName.poke_type.selectedIndex = typeNum;
    $('form').submit();    
}