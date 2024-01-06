import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-sky-100 h-screen">
      <section className="flex lg:w-[25%] bg-card-background gap-4 justify-center p-4 flex-col text-center sm:w-screen sm: m-8 rounded-2xl">
        <Image
          src={"/image-qr-code.png"}
          alt="qr-code"
          width={600}
          height={600}
          objectFit="contain"
          style={{borderRadius: "16px"}}
        />
        <p className="text-2xl text-black font-bold px-2">
          Improve your front-end skills by building projects
        </p>
        <p className="text-md text-slate-500 font-normal mb-2 px-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}
