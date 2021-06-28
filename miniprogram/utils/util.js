
function getDate(){
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth()+1;
  var d = now.getDate();
  var hours = now.getHours();
  var minu = now.getMinutes();
  
  if(m<10) m = '0'+m;
  if(d<10) d = '0'+d;

  
  return y+'-'+m+'-'+d+' '+[hours, minu].map(formatNumber).join(':');
}

function formatNumber(n){
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getTime(){
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  
  if(h<10) h = '0'+h
  if(m<10) m = '0'+m;
  if(s<10) s = '0'+s;
  
  return h+':'+m+':'+s;
}

// 暴露函数
module.exports = {
  getDate:getDate,
  getTime:getTime,
}