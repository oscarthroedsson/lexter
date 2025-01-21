import { Icon } from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState<string>("");
  function onClickis() {
    console.log("M: ", message);
  }

  return (
    <div className="h-screen py-4 grid grid-cols-1 grid-rows-[1fr_auto]">
      <div className="container">
        <div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis tempore consectetur quo nam,
            exercitatio
          </p>
        </div>
        <div className="w-3/5  mx-auto gap-1 space-y-2">
          <div className="w-full flex items-center gap-1">
            <Input id="message" type="text" onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={() => onClickis()}>
              <Icon type="Send" size={5} color="white" />
            </Button>
          </div>
          <div className="text-center">
            <p>The information can be incorrect, always try to double check</p>
          </div>
        </div>
      </div>
    </div>
  );
}
