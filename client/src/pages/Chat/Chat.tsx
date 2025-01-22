import { Icon } from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useChat from "@/hooks/useChat";
import TypeWriterText from "@/components/animation/TypeWriterText";

export default function Chat() {
  const { startChat, conversation, answering } = useChat("/chat");
  const [message, setMessage] = useState<string>("");

  function sendMessage() {
    console.log("💌 Sending");
    startChat(message);
    setMessage("");
  }

  return (
    <div className="h-screen  px-2 grid grid-cols-1 grid-rows-[1fr_auto] pt-4">
      <div className="space-y-4">
        {conversation.map((msg, msgIndex) => {
          return (
            <div key={msgIndex} className="grid grid-cols-[auto_1fr] gap-2">
              <span>{msg.user ? "👱🏼" : "🤖"}</span>
              <div className="border-2 rounded-md p-2 ">
                <TypeWriterText text={msg.text} />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" space-y-2">
        <div
          className={`flex gap-2 items-center bg-slate-200 p-2 rounded-md transition-opacity ${
            answering ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-2 w-2 bg-teal-500 rounded-full animate-ping ml-2" />
          <p className="text-[11px] font-medium">Lexter förbereder ett svar</p>
        </div>
        <div className="w-full flex items-center gap-1">
          <Input
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full"
          />
          <Button onClick={() => sendMessage()}>
            <Icon type="Send" size={5} color="white" />
          </Button>
        </div>
        <div className="text-center">
          <p>The information can be incorrect, always try to double check</p>
        </div>
      </div>
    </div>
  );
}
