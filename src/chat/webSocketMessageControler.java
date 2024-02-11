package chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class webSocketMessageControler {

    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public String distributeMessage(String msg) {
        return msg;
    }
}
