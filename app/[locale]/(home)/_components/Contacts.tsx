"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Address</h3>
                <p className="mt-1 text-lg text-gray-300 border-b border-blue-500 pb-2">
                  8/1 Toshkent city center
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="mt-1 text-lg text-gray-300">
                  +998 (78) 777-77-07
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="mt-1 text-lg text-gray-300">
                  inter-nation@mail.ru
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full min-h-[400px] lg:min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48831.78714415323!2d65.37161354999999!3d40.09800955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c6d7e12931b3%3A0x613f6eb9636019bb!2z0J3QsNCy0L7QuCwg0KHQsNC80LDRgNC60LDQvdC00YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2s!4v1729336267495!5m2!1sru!2s"
            loading="lazy"
            allowFullScreen
            title="Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
