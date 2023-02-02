var validation = new Validation()
function getEle(id){
    return document.getElementById(id);
}
document.getElementById("loginbtn").onclick = function(isAdd){
   
    var userName = getEle("username").value;
    var passWord = getEle("passWord").value;
    var isValid = true;
    if(userName == "205051621" && passWord == "Revolutions2608"){
        window.location.href="../MainPage/index.html"
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
