function insert_message() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://bitfoxtech.com/foxyapi/insert_message", false);
  data = {
    "user_name": document.getElementById("cust_name").innerText,
    "user_email": document.getElementById("cust_email").innerText,
    "category": document.getElementById("product").innerText,
    "body": document.getElementById("message_body").innerText
  }
  console.log(data);
  xmlHttp.send(data);
  console.log(xmlHttp.responseText)
  return xmlHttp.responseText;
}


