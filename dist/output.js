(()=>{"use strict";function t(t){return this.tax*t}function e(){return Math.floor(256*Math.random()+1)}let n=(5,120,44,Math.max(5,120,44));document.querySelector("#hw1").textContent=`Homework 1. Function getMaxPrice: ${n}`;let o=function(t,e,n){let o=0;for(let t=2;t<=6;t++)o+=t%2==0?0:t;return o}();document.querySelector("#hw2").textContent=`Homework 2. Function getSum: ${o}`;let r=function(t){let e=0,n=73951..toString();if(1===n.length)e=Number(n);else{e=Number(n[0]);for(let t=1;t<n.length;t++)Number(n[t])>e&&(e=Number(n[t]))}return e}();document.querySelector("#hw3").textContent=`Homework 3. Function getMaxDigit: ${r}`;const u=function(t=[]){const e=[],n=[];for(let o=0;o<t.length;o++){let r=t[o];"а"===r[r.length-1]?n.push(r):e.push(r)}const o=[];for(let t=0;t<e.length;t++)o.push([e[t],n[t]]);return o}(["Олександр","Ігор","Олена","Іра","Олексій","Світлана"]);document.querySelector("#hw4").textContent=`Homework 4. Function getStudentsPairs: ${u}`;let s=function(t,e,n){const o=[];for(let t=0;t<6;t++)o.push(Math.floor(99*Math.random()+2));return o}();document.querySelector("#hw5").textContent=`Homework 5. Function getRandomArray: ${s}`;let c=(l={name:"Illia",course:2,subjects:{math:[3,4,2,4],algorithms:[2,3,5,4,3,4],data_science:[5,2,3,5]}},Object.keys(l.subjects).map((t=>(t=t[0].toUpperCase()+t.slice(1)).replaceAll("_"," "))));var l,a;document.querySelector("#hw6").textContent=`Homework 6. Function getSubjects: ${c}`,a={tax:.195,middleSalary:1789,vacancies:11476},setInterval((function(){let e=Math.floor(501*Math.random())+1500,n=t.call(a,e),o=e-n;console.log({salary:e,taxes:n,profit:o})}),1e4),document.querySelector("#hw7").textContent="Homework 7. Function getMySalary: output in console";const i=new class{constructor(t,e,n){this.university=t,this.course=e,this.fullName=n,this.marksArr=[5,4,4,5],this.studentStatus=!0}getInfo(){return`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`}get marks(){return this.studentStatus?this.marksArr:null}set marks(t){this.studentStatus&&this.marksArr.push(t)}getAverageMark(){return this.marksArr.reduce(((t,e)=>t+e),0)/this.marksArr.length}dismiss(){this.studentStatus=!1}recover(){this.studentStatus=!0}}("NLTUU",1,"Illia Turovskyi"),m=i.getInfo();document.querySelector("#hw8").textContent=`Homework 8. Function getInfo: ${m}`,function(){const t=document.querySelector(".main-box");for(let n=0;n<25;n++){let n=document.createElement("div");n.classList.add("box"),n.style.backgroundColor="rgb("+e()+", "+e()+", "+e()+")",t.append(n)}}(),document.querySelector("#hw9").textContent="Homework 9. Function createBoxes"})();