import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch flex-grow p-8 container h-full mx-auto">
      <div className="mx-auto mt-20 w-fit h-full prose">
        <h1>What OS product should I use?</h1>
        <p>
          Ask our virtual Danny Hyam what OS products would best fit your needs!
        </p>
      </div>
      <Form />
    </main>
  );
}
