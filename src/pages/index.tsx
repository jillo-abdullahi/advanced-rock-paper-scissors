import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock Paper</title>
        <meta name="description" content="a fun rock paper scissors game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="h-full min-h-screen"
        style={{
          background:
            "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full pt-12">
          {/* title and score  */}
          <div className="w-full max-w-[700px] p-5 rounded-xl flex items-center justify-between border-2 border-gray-400">
            <Image
              src="/images/logo-bonus.svg"
              width={159}
              height={96}
              alt="logo"
            />
            <div className="flex flex-col space-y-1 items-center rounded-md text-center px-12 py-8 bg-white">
              <h1
                className="uppercase"
                style={{
                  color: "#2A45C2",
                }}
              >
                score
              </h1>
              <h2
                className="text-6xl font-bold"
                style={{
                  color: "#565468",
                }}
              >
                13
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
