function updateDate(){
    var date=new Date();
    var setTime= document.getElementById("setTime");
    setTime.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var setDate=document.getElementById("setDate");
    setDate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
setInterval(updateDate,100);
onload=()=>{
    updateDate();
}
function getColor(){
  var getColor=document.getElementById("setColor").value ;
  localStorage.setItem("color",getColor);
  document.getElementById("time").style.background=localStorage.getItem("color");
  document.getElementById("body").style.background=localStorage.getItem("color");

}
function putColor(){
  document.getElementById("setColor").value=localStorage.getItem("color");
  document.getElementById("time").style.background=localStorage.getItem("color");
  document.getElementById("body").style.background=localStorage.getItem("color");

}
setInterval(putColor,100);