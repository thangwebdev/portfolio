import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="py-24 min-h-screen flex items-center justify-center">
      <Image src="/assets/notfound.svg" width={300} height={300} alt="" />
    </div>
  );
}
