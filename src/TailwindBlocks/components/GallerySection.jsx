import React from "react";

export default function GallerySection({ id }) {
  return (
    <section id={id}>
      <section className="text-gray-600 body-font bg-BgColor">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake1.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1 text-TextColor">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake2.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1 text-TextColor">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake3.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1 text-TextColor">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake4.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1 text-TextColor">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake5.avif"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1 text-TextColor">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake6.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1 text-TextColor">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake7.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1 text-TextColor">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="src\assets\cake8.webp"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-TextLight text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-TextColor title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1 text-TextColor">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
