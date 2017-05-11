// task2
var tel=document.querySelector('#t2');
var telv;
document.querySelector('#t2').onkeyup= function () {
    telv=tel.value.split('',9);
    if (telv.length==3) {
    telv.splice(3,0,'\-');
    }
    else if (telv.length==6) {
    telv.splice(6,0,'\-');
    }
    var yyy=telv.join('');
    tel.value=yyy;
}

//task1 внизу рабочий вариант, это я еще оптимизирую
// document.querySelector('#chek-email').onclick = function(){
//
// }
// function emailF() {
//     var input_email = document.querySelector('#t1');
//     var email = document.querySelector('#t1').value;
//     var count = 0;
//     if (email.length != 0) {
//         for (var i = 0; i < email.length; i++) {
//             if (email[i] == '@') {
//                 count++;
//             }
//             else if (email[i] == '"' || email[i] == ')' || email[i] == '(' || email[i] == ',' || email[i] == '/' || email[i] == '\\' || email[i] == ';' || email[i] == '#' || email[i] == ' ' || email[0] == '@' || email[email.length - 1] == '@') {
//                 input_email.className = 'error';
//                 return false;
//             }
//
//         }
//         if (count == 1) {
//             return true;
//         }
//
//     } else {
//         input_email.className = 'error';
//         return false;
//     }
// }
document.querySelector('#chek-email').onclick = function(){
	var input_email = document.querySelector('#t1');
	var email=document.querySelector('#t1').value;
	var count=0;
    if (email.length != 0) {
        for (var i=0; i<email.length; i++) {
            if (email[i]=='@') { count++; }
            else if (email[i]=='"' || email[i]==')'|| email[i]=='(' || email[i]==',' || email[i]=='/' || email[i]=='\\' || email[i]==';' ||email[i]=='#'){
                input_email.style.border='3px solid red';
                return alert('в поле e-mail не могут содержаться символы:\", \), \(');
            }
            else if (email[i]==' ') {
                input_email.style.border='3px solid red';
                return alert('в поле e-mail не могут содержаться пробелы');
            }
        }
        if (count == 1) {
            console.log(count);

            if (email[0]== '@' || email[email.length-1]=='@') {
                input_email.style.border='3px solid red';
                return alert('e-mail введен некорректно, знак \@ не может быть первым или последним');
            } else {
                input_email.style.border='3px solid lightgreen';
                alert('e-mail введен корректно, спасибо');}
        } else {
            input_email.style.border='3px solid red';
            return alert('в поле e-mail должен присутствовать один знак \@');
        }

        } else {
            input_email.style.border='3px solid red';
            alert('поле e-mail не может быть пустым');
            }

}

// document.querySelector('#t1').oninput = function(){
//     var p = document.querySelector('.t1');
//     p.innerHTML = this.value;
//
//
// }


// document.querySelector("#t2").onchange = function(){
// 	//console.log(this.checked);
// 	if (this.checked){
// 			console.log(this.value);
// 	}
// }
//
// document.querySelector('button').onclick = function(){
// 	var radio = document.getElementsByName('ppp');
// 	for (var i=0; i<radio.length; i++){
// 		if (radio[i].checked) {
// 			//console.log(radio[i].value);
// 			break;
// 		}
// 	}
// 	var select = document.querySelector('#t3');
// 	var s = select.selectedIndex;
// 	var options = document.querySelectorAll('#t3 option');
// 	console.log(options[s].innerHTML);
// }