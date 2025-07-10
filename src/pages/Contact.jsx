import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

const Contact = () => {
  return (
    <>
      <section className="container mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <Form method="POST" action="/contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="username" className="block text-gray-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="Enter full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="abc@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="We are always here to help you."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </Form>
          </div>

          {/* Contact Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <figure>
              <img
                src="https://img.freepik.com/premium-photo/customer-support-illustration-call-center-vector_906385-42419.jpg?size=626&ext=jpg&ga=GA1.1.1638468388.1724500364&semt=ais_hybrid"
                alt="contact pic"
                className="w-full rounded-lg shadow-lg"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
