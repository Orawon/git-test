let login = prompt("Login");

if((login == "Admin")||(login=="admin"))
{
    let pass = prompt("Password");

    if( pass = "codecamp#5")
    {
        alert("ยินดีต้อนรับ");
    }else if((pass == "")||(pass == null))
    {
        alert("ยกเลิก");
    }else
    {
        alert("Wrong password");
    }
}else if((login=="")||(login==null))
{
    alert("ยกเลิก");
}else{
    alert("ผมไม่รู้จักคุณ");
}