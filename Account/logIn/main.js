var validation = new Validation()
function getEle(id){
    return document.getElementById(id);
}
document.getElementById("loginbtn").onclick = function(isAdd){
   
    var userName = getEle("username").value;
    var passWord = getEle("passWord").value;
    var isValid = true;
    if(userName == "a" && passWord == "b"){
        window.location.href="/index.html"
    }else{
        alert("Tài Khoản hoặc mật khẩu sai")
    }
    if (isAdd) {
        isValid &=
          validation.kiemTraRong(userName, "alertAccounts", "(*)  Vui lòng nhập tai khoan") 
      }
     
      isValid &= validation.kiemTraRong(
        passWord,
         "alertPassword",
         "(*)  Vui lòng nhập pass"
       )
    
}
