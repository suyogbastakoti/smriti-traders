import dealer from "../assets/dealer.png";
import expert from "../assets/expert.png";
import customer from "../assets/customer.png";
function About() {
  return (
    <main className="py-16 px-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-10">
        About Smriti Traders
      </h1>

      {/* Intro */}
      <section className="mb-12 text-center">
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Smriti Traders is a trusted and authorized dealer of Berger Paints
          based in Kathmandu. We provide high-quality paint products and
          professional guidance for residential and commercial projects.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="p-6">
          <img
            src={dealer}
            alt="dealer picture"
            className="h-64 w-64 mx-auto mb-5 rounded-2xl"
          />
          <h3 className="text-xl font-semibold mb-2">
            Authorized Dealer
          </h3>
          <p className="text-gray-600">
            Genuine Berger Paints with manufacturer assurance.
          </p>
        </div>

        <div className="p-6">
          <img
            src={expert}
            alt="expert picture"
            className="h-64 w-64 mx-auto mb-5 rounded-2xl"
          />
          <h3 className="text-xl font-semibold mb-2">
            Expert Guidance
          </h3>
          <p className="text-gray-600">
            Professional advice for paint selection and application.
          </p>
        </div>

        <div className="p-6">
          <img
            src={customer}
            alt="customer picture"
            className="h-64 w-64 mx-auto mb-5 rounded-2xl"
          />
          <h3 className="text-xl font-semibold mb-2">
            Customer Focused
          </h3>
          <p className="text-gray-600">
            Reliable service and long-term customer relationships.
          </p>
        </div>

      </section>
    </main>
  );
}

export default About;
