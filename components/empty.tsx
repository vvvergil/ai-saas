import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({
  label
}:EmptyProps) => {
  return ( 
    <div className="h-full p-20 flex flex-col
     items-center justify-center">
      <div className="relative h-72 w-[36rem]">
        <Image
          alt="Empty"
          fill
          src="/empty.png"
        />
      </div>
      <p className="text-muted-foreground text-center text-lg">
        {label}
      </p>
    </div>
   );
}
 
export default Empty;