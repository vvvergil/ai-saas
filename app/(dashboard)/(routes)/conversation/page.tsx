import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

const conversationPage = () => {
  return ( 
    <div>
      <Heading 
        title="Conversation"
        description="AI Conversation"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
   );
}
 
export default conversationPage;