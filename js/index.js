/*
* @Author: nanjiao
* @Date:   2018-09-03 17:35:33
* @Last Modified by:   nanjiao
* @Last Modified time: 2018-09-06 22:08:55
*/
window.onload=function () {
//     // banner轮播
//     let imgs = document.querySelectorAll(".banner img");
//     let dots = document.querySelectorAll(".slip .dot li");
//     let banner = document.querySelectorAll(".slip")[0];
//     let leftbtn=document.querySelectorAll(".leftArrow")[0];
//     let rightbtn=document.querySelectorAll(".rightArrow")[0];
//     let widths = parseInt(getComputedStyle(imgs[0], null).width);
//     let now = 0;
//     let next = 0;
//     let flag=true;
//     console.log(widths);
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].onclick = function () {
//             for (let j = 0; j < dots.length; j++) {
//                 dots[j].classList.remove("active");
//                 imgs[j].style.left = widths + "px";
//             }
//             dots[i].classList.add("active");
//             imgs[i].style.left = "0";
//             now = next;
//         }
//     }
//     imgs[0].style.left="0";
//     dots[0].classList.add("active");
//     let t=setInterval(move,2000);
//     function move() {
//         next++;
//         if (next==dots.length){
//             next=0;
//         }
//         imgs[next].style.left=widths+"px";
//         animate(imgs[now],{left:-widths});
//         animate(imgs[next],{left:0},function () {
//             flag=true;
//         });
//         dots[now].classList.remove("active");
//         dots[next].classList.add(("active"));
//         now=next;
//     }
//     rightbtn.onclick=function(){
//         if (!flag){
//             return;
//         }
//         flag=false;
//         move();
//     }
//     function moveL(){
//         next--;
//         if (next<0){
//             next=dots.length-1;
//         }
//         imgs[next].style.left=-widths+"px";
//         animate(imgs[now],{left:widths});
//         animate(imgs[next],{left:0},function () {
//             flag=true;
//         });
//         dots[now].classList.remove("active");
//         dots[next].classList.add(("active"));
//         now=next;
//     }
//     leftbtn.onclick=function(){
//         if (!flag){
//             return;
//         }
//         flag=false;
//         moveL();
//     }
//     banner.onmouseenter=function () {
//         clearInterval(t); 
//     }
//     banner.onmouseleave=function () {
//         t=setInterval(move,2000);
//     }


    // 置顶
    let wh=window.innerHeight;
    let back=document.querySelector(".back");
    back.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
}
