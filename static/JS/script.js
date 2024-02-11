let stompClient = null;
let sock = new SockJS("http://localhost:28852/chat");

stompClient = Stomp.over(sock);

stompClient.connect({},(frame) => {
    stompClient.subscribe("/topic/chat",function(message) {
        let msgInputWindow = document .getElementById("input-msg");
        let messageContainer = document.getElementById("messages");
        let html = "<div class='message'>" + message.body + "</div>";

        if (message.value !=="") {
            messageContainer.insertAdjacentHTML("beforeend",html);
            msgInputWindow.value = "";
        }
    });
});



function send() {

    let message = document.getElementById("input-msg");
    stompClient.send("/app/chat",{},message.value);
}