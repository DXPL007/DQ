import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <a href="https://dq-dashboard.vercel.app">
        <Image
          className="w-auto h-auto max-w-full mx-auto"
          src="/dq.jpg"
          alt="Next.js logo"
          width={3840}
          height={15586}
          priority
        />
      </a>
    </div>


  );
}
