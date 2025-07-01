export default function ContactSection({ id }) {
  return (
    <section id={id}>
      <section className="text-TextLight body-font relative bg-BgColor">
        <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-BgColor rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=TNGO's Colony,+Hyderabad,+Telangana&output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-600">
                  Building A-109, Sai Krishna towers, Near TNGO's central park, TNGO's colony, Hyderabad, Telangana, 500032
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  saikrishnacakes@email.com
                </a>
                <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed mt-1 text-gray-600">
                  +91900099989
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-BgColor flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-TextColor text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-TextLight font-medium">
              We'd Love to Hear From You!
            </p>
            <p className="leading-relaxed mb-5 text-TextLight">
              Whether you've just tried one of our cakes, placed an order, or visited our store—we want to know what you think!
Share your feedback, suggestions, or ask us anything. We're always baking up ways to serve you better. 🍰
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-TextColor">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-TextColor">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-TextColor">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-TextLight mt-3">
             We read every message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
