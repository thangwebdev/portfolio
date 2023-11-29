import Link from "next/link";
import Button from "~/components/ui/button";

/* eslint-disable react/no-unescaped-entities */
export default function Cta() {
  return (
    <div className="bg-bgLight dark:bg-bgDark pt-36 pb-12">
      <div className="container mx-auto px-[10px] lg:px-0">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I'm here to help
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
