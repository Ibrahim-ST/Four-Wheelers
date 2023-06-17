import React from "react";

const Testimonial = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-6">
          <h5 className="mb-2 text-center text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
            Testimonials
          </h5>
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                "I have been using the services provided by Four Wheeler for
                over a year now, and I must say that they have exceeded my
                expectations. The team is highly professional, responsive, and
                knowledgeable. They have helped us achieve great results with
                their innovative solutions. I would highly recommend ABC Inc. to
                anyone looking for top-notch quality and exceptional service.',"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-12 h-12 rounded-full"
                src="https://media.istockphoto.com/id/1145045107/photo/portrait-of-a-beautiful-mature-indian-woman.jpg?s=612x612&w=0&k=20&c=ezBRqDoUXJmSx2uoVUm0kw6Dj0N4CxtS49CoGs2TeKw="
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Arteta
                </div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at TechVerse
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
