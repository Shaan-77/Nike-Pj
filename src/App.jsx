import {
  CostumerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./Sections";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        <SuperQuality />
      </section>
      <section className="padding ">
        <Services />
      </section>
      <section className="padding ">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding ">
        <CostumerReviews />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full  ">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};
export default App;
