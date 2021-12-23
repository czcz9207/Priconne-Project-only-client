var grades = []
function start(){
    grades.push(document.getElementById('one'));
    grades.push(document.getElementById('two'));
    grades.push(document.getElementById('three'));
    grades.push(document.getElementById('four'));
    grades.push(document.getElementById('five'));
    grades.push(document.getElementById('six'));
    grades.push(document.getElementById('seven'));
    grades.push(document.getElementById('eight'));
    grades.push(document.getElementById('nine'));
    for(i = 0; i < 9; i++)
        grades[i].style.display = 'block';
}
function displayByStar(star){
    var princess = document.getElementsByClassName(star);
    var s1 = document.getElementsByClassName('star1');
    var s2 = document.getElementsByClassName('star2');
    var s3 = document.getElementsByClassName('star3');
    if(princess[0] === undefined){
        s2[0].style.display = 'inline';
        s3[0].style.display = 'inline';
        s1[0].style.display = 'inline';
    }
    else if(princess[0] === s1[0]){
        s1[0].style.display = 'inline';
        s2[0].style.display = 'none';
        s3[0].style.display = 'none';
    }
    else if(princess[0] === s2[0]){
        s2[0].style.display = 'inline';
        s1[0].style.display = 'none';
        s3[0].style.display = 'none';
    }
    else if(princess[0] === s3[0]){
        s3[0].style.display = 'inline';
        s1[0].style.display = 'none';
        s2[0].style.display = 'none';
    }
}
function displayGrade(g){
    var grade = document.getElementById(g);
    var i;
    if(grade == undefined){
        for(i = 0; i < 9; i++)
            grades[i].style.display = 'block';
    }
    else{
        for(i = 0; i < 9; i++)
            if(grade == grades[i])
                grades[i].style.display = 'block';
            else
                grades[i].style.display = 'none';
    }
}
function addItem(selected){
    var cnt = 0;
    var grade;
    for(var i = 0; i < 9; i++){
        if(grades[i].style.display == 'block'){
            cnt++;
            grade = grades[i];
            if(cnt >= 2)
                break;
        }
    }
    if(cnt >= 2){
        alert("등급 결정 후 선택해주세요.");
        return;
    }
    // var slen = document.getElementsByClassName("selectedImg");
    // console.log(grade.id);
    // console.log(grade.innerHTML);
    // console.log(slen.length);
    grade.innerHTML += "<a class=\"selectedImg\" onclick=\"removeItem(this)\"><img src='" + selected.src + "'></a>";
    selected.parentNode.style.display = 'none';
}

function removeItem(el){
    var element = el;
    element.remove();
}

function clearAll(){
    var a = document.getElementsByClassName("selectedImg");
    var b = document.getElementsByClassName("imgbox");
    // for(var i = 0; i < a.length; i++){
    //     a[i].remove();
    //     console.log(a[i]);
    // }
    while(a.length != 0)
        a[0].remove();
    for(var i = 0; i < b.length; i++)
        b[i].removeAttribute('style');
    console.log(a);
}