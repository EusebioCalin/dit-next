"use client";
import NewsLatterBox from "./NewsLatterBox";
import { emailValidationSchema, handleEmailSubmit } from "./actions";
import { Formik } from "formik";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* <div className="w-full items-center px-4 lg:w-7/12 xl:w-8/12"> */}
          <div className="w-full items-center px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={emailValidationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  const data = await handleEmailSubmit(values);
                  console.log("in form", data);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Name
                          </label>
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                          {errors.name && touched.name && (
                            <div className=" text-sm text-amber">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />

                          {errors.email && touched.email && (
                            <div className=" text-sm text-amber">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                          {errors.message && touched.message && (
                            <div className=" text-sm text-amber">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          {isSubmitting ? "Submitting" : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
