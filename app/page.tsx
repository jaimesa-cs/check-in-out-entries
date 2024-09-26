import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Content Lock App</h1>
        <div className="flex flex-row justify-center items-center w-full p-2">
          <Image
            src="/padlock.png"
            alt="Content Lock App"
            width={128}
            height={128}
          />
        </div>
      </main>
    </div>
  );
}
