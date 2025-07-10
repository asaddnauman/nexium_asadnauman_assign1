import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <QuoteForm />
    </main>
  );
}
