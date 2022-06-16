function insert_message() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://bitfoxtech.com/foxyapi/insert_message", false);
  var data = JSON.stringify({
    "user_name": document.getElementById("cust_name").value,
    "user_email": document.getElementById("cust_email").value,
    "category": document.getElementById("product").innerText,
    "body": document.getElementById("message_body").value
  })
  console.log(data);
  xmlHttp.send(data);
  console.log(xmlHttp.responseText)
  alert("Message sent successfully")
  return xmlHttp.responseText;
}


