var wsUri = "ws://localhost:7000/websocket";
var websocket = new WebSocket(wsUri);

websocket.onerror = function (evt) {
 onError(evt);
};

function onError(evt) {
 console.log(evt);
}

// For testing purposes
var output = document.getElementById("mensagens");
websocket.onopen = function (evt) {
 onOpen(evt);
};

function writeToScreen(message) {
 output.innerHTML += message + "<br>";
}

function onOpen() {
 writeToScreen("Connected to " + wsUri);
}
// End test functions


websocket.onmessage = function (evt) {
 onMessage(evt);
};

function sendText(json) {
 console.log("sending text: " + json);

}

function onMessage(evt) {
 console.log("received: " + evt.data);
 writeToScreen(evt.data);
}

var txtMensagem = document.getElementById("mensagem");
var btnEnvia = document.getElementById("btnEnvia");
btnEnvia.addEventListener("click", function () {
 var m = txtMensagem.value;
 console.log("sending text: " + m);
 websocket.send(m);
 writeToScreen(m);
}, false);