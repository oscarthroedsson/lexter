import { Icon } from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useChat from "@/hooks/useChat";
import TypeWriterText from "@/components/animation/TypeWriterText";
import { useParams } from "react-router";
import { teachers } from "@/assets/techers";
import { Teacher } from "@shared/school.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/assets/users";
import { User } from "@shared/chat.types";

export default function Chat() {
  const { startChat, conversation } = useChat("/chat");
  const [message, setMessage] = useState<string>("");
  const { subject, teacher } = useParams();
  const [ai, setAi] = useState<Teacher | null>(null);
  const [user, setUser] = useState<User>({ ...users[0], name: "Oscar" });
  console.log("subject: ", subject);
  console.log("teacher: ", teacher);

  useEffect(() => {
    if (subject && teacher) {
      const person = teachers.find((per) => per.subject === subject);
      if (person) setAi(person);
    }
  }, [subject, teacher]);

  function sendMessage() {
    console.log("💌 Sending");
    startChat(message);
    setMessage("");
  }
  if (!ai) return null;
  return (
    <div className="bg-slate-300 py-4 h-screen">
      <div
        className="glasBG-low min-w-full lg:min-w-[50rem] lg:max-w-4xl mx-auto
      h-full px-4 grid grid-cols-1 grid-rows-[1fr_auto] pt-4
      "
      >
        {/* CONVERSATION */}
        <div className="space-y-4 overflow-y-scroll scrollbar-none">
          {conversation.map((msg, msgIndex) => {
            return (
              <div
                key={msgIndex}
                className={`flex items-end ${msg.user ? "justify-end" : "justify-start"}  gap-2 w-full `}
              >
                {!msg.user && (
                  <Avatar className="mb-1">
                    <AvatarImage src={ai.avatar} alt={`Avatar image of the AI ${ai.name}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                <div className="w-1/2 space-y-1">
                  <p className={`text-xs font-semibold ${msg.user ? "text-end pr-1 " : "text-start pl-1 "}`}>
                    {msg.user ? user.name : ai.name}
                  </p>
                  <div className="border-2 rounded-md p-2 ">
                    <TypeWriterText shouldAnimate={!msg.user} text={msg.text} />
                  </div>
                </div>

                {msg.user && (
                  <Avatar className="mb-1">
                    <AvatarImage src={user.avatar} alt="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
              </div>
            );
          })}
        </div>
        {/* CHAT */}

        <div className="py-4">
          <div className="glasBG-medium p-2 w-full flex flex-col items-center gap-1">
            <Input
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-none shadow-none 
             focus-visible:ring-0 focus-visible:ring-offset-0
              "
            />
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <Button type="button" className="bg-transparent hover:bg-transparent shadow-none px-2">
                  <Icon type="PaperclipIcon" size={5} color="black" />
                </Button>
                <Button onClick={() => {}} className="bg-transparent hover:bg-transparent shadow-none px-2">
                  <Icon type="MicIcon" size={5} color="black" />
                </Button>
                <Button onClick={() => {}} className="bg-transparent hover:bg-transparent shadow-none px-2">
                  <Icon type="Send" size={5} color="black" />
                </Button>
              </div>
              <Button onClick={() => sendMessage()}>
                <Icon type="Send" size={5} color="white" />
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-slate-500">
              Informationen du får kan vara felaktig, försök att alltid dubbelkolla viktigt arbete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
