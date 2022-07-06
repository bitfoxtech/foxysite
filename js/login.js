function login() {

    hashCode = s =>
        s.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "https://bitfoxtech.com/foxyapi/login", false);
    var data = JSON.stringify({
      "cust_email": document.getElementById("cust_email").value,
      "cust_password": hashCode(document.getElementById("cust_password").value)
    })
    console.log(data);
    xmlHttp.send(data);
    console.log(xmlHttp.status)
    console.log(xmlHttp.responseText)
    if (xmlHttp.status == 200) {
      alert("Successfully logged in as " + document.getElementById("cust_email").value)
      var userName = document.getElementById("cust_email").value;
      '<%Session["UserName"] = "' + userName + '"; %>';
      alert('<%=Session["UserName"] %>');
    } else {
      alert("Oops, something went wrong. Please email us instead at jake@bitfoxtech.com")
    }
    return xmlHttp.responseText;
}
  
  