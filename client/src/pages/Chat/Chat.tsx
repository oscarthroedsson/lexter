import { Icon } from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Chat() {
  return (
    <div className="h-screen  py-4 grid grid-cols-1 grid-rows-[1fr_auto]">
      <div></div>
      <div className="w-3/5  mx-auto gap-1">
        <div className="w-full flex items-center gap-1">
          <Input id="message" type="text" />
          <Button>
            <Icon type="Send" size={5} color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
