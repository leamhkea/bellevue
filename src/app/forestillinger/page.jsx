import ListServer from "@/components/listview/forestillinger/ListServer";
import Image from "next/image";

export default function Forestillinger() {
  return (
    <div className="py-40 relative">
      <div className="absolute -right-40 top-20 -z-10 hidden lg:block">
              <Image
                src="/svg/snoerkel-top-right.svg"
                alt=""
                width={600}
                height={350}
              />
            </div>
      <ListServer />;
    </div>
  );
}
