function showLab(n) {
document.querySelectorAll(".experiment")
.forEach(e => e.style.display = "none");
document.getElementById("lab"+n).style.display="block";
}

function lab1() {
let f=document.getElementById("f1");
let e=document.getElementById("e1");

f.style.top="120px";
e.innerText="Thức ăn được tế bào bọt biển bắt giữ.";

setTimeout(()=>{
e.innerText="Hình thành không bào tiêu hoá chứa thức ăn.";
},2000);

setTimeout(()=>{
e.innerText="Enzyme của lysosome phân giải thức ăn trong không bào.";
},4000);

setTimeout(()=>{
e.innerText="Chất dinh dưỡng được hấp thụ ngay trong tế bào.";
},6000);
}

function lab2() {
let f=document.getElementById("f2");
let e=document.getElementById("e2");

f.style.top="100px";
e.innerText="Thức ăn đi vào khoang tiêu hoá qua miệng.";

setTimeout(()=>{
e.innerText="Tế bào tuyến tiết enzyme tiêu hoá ngoại bào.";
},2000);

setTimeout(()=>{
e.innerText="Thức ăn tiếp tục được tiêu hoá nội bào trong tế bào.";
},4000);

setTimeout(()=>{
e.innerText="Chất dinh dưỡng được vận chuyển đến các tế bào cơ thể.";
},6000);
}

function lab3() {
let f=document.getElementById("f3");
let e=document.getElementById("e3");

f.style.top="60px";
e.innerText="Thức ăn được nghiền nhỏ (tiêu hoá cơ học).";

setTimeout(()=>{
f.style.top="140px";
e.innerText="Enzyme tiêu hoá hoá học phân giải thức ăn.";
},2000);

setTimeout(()=>{
f.style.top="220px";
e.innerText="Chất dinh dưỡng được hấp thụ qua lông nhung ruột non.";
},4000);

setTimeout(()=>{
e.innerText="Chất cặn được thải ra ngoài qua hậu môn.";
},6000);
}
