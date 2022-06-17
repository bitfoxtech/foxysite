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
  console.log(xmlHttp.statusText)
  console.log(xmlHttp.responseText)
  if (xmlHttp.statusText == 200) {
    alert("Message sent successfully")
  } else {
    alert("Oops, something went wrong. Please email us instead at jake@bitfoxtech.com")
  }
  return xmlHttp.responseText;
}


