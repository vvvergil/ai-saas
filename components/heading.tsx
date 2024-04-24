import { LucideIcon } from "lucide-react";
import React from "react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading:React.FC<HeadingProps> = ({
  title,
  description,
  icon,
  iconColor,
  bgColor
}) => {
  return ( 
    <div></div>
   );
}
 
export default Heading;