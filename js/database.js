function insert_message() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://bitfoxtech.com/foxyapi/insert_message", false);
  data = {
    "user_name": document.getElementById("cust_name").value,
    "user_email": document.getElementById("cust_email").value,
    "category": document.getElementById("product").value,
    "body": document.getElementById("message_body").value
  }
  console.log(data);
  xmlHttp.send(data);
  console.log(xmlHttp.responseText)
  return xmlHttp.responseText;
}


