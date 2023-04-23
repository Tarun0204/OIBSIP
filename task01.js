function Solve(val) {
    var v = document.getElementById('cal');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('cal').value;
    var num2 = eval(num1);
    document.getElementById('cal').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('cal');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('cal');
    ev.value = ev.value.slice(0,-1);
 }