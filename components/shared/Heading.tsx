import { cn } from "@/lib/utils";
import { NextPage } from "next";

interface Props extends React.ComponentProps<"h3"> {
  text: string;
}

const Heading: NextPage<Props> = ({ text, className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        "text-2xl text-center font-semibold text-gray-900",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default Heading;
