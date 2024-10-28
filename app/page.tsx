import Banner from "@/Components/Banner/Banner"
import ContactsList from "@/Components/ContactsList/ContactsList";


export default function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto ">
        <ContactsList />
      </div>

    </>
  );
}
