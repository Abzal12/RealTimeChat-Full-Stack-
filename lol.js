// document.getElementById("send-msg-btn").onclick = function send() {
//     let input = document.getElementById("input-msg").value;
//     if (/\S/.test(input)) {
//         let messages = document.getElementById("messages");
//         let message = document.createElement("div");
//         message.textContent = input;
//         message.classList.add("message");
//         messages.appendChild(document.createElement("hr"));
//         messages.appendChild(message);
//         document.getElementById("input-msg").value = "";
//         messages.scrollTop = messages.scrollHeight;
//
//     }
// }

const setupEventListeners = () => {
    document.getElementById("send-msg-btn").addEventListener("click", sendMessages);
    document.addEventListener("keydown", ev => {
        if (ev.key === "Enter") {
            sendMessages();
        }
    });
}

setupEventListeners();

function sendMessages() {
    let input = document.getElementById("input-msg").value;
    if (/\S/.test(input)) {
        let messages = document.getElementById("messages");
        let message = document.createElement("div");
        message.textContent = input;
        message.classList.add("message");
        messages.appendChild(document.createElement("hr"));
        messages.appendChild(message);
        document.getElementById("input-msg").value = "";
        messages.scrollTop = messages.scrollHeight;

    }
}