function getInput() {
    var p = document.querySelector('#photo').value;

    var c = document.querySelector('#caption').value;
    var h = document.querySelector('#output').innerHTML;
    document.querySelector('#output').innerHTML=
            '<div class="photolist"><img src="'+p+'" class="imgResponsive"><br>'+c+'</div>'+h;
}


