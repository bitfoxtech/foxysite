function send_message() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://bitfoxtech.com/foxyapi/", false);
  xmlHttp.send(null);
  console.log(xmlHttp.responseText)
  return xmlHttp.responseText;
}


