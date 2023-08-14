import axios from "axios";
import { FormEvent, useRef } from "react";
import config from "../config";

const ContactUs = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const contact = { id: 0, interest: "", phone_number: "", name: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (textRef.current !== null) {
      contact.interest = textRef.current.value;
      textRef.current.value = "";
    }
    if (phoneRef.current !== null) {
      contact.phone_number = phoneRef.current.value;
      phoneRef.current.value = "";
    }
    if (nameRef.current !== null) {
      contact.name = nameRef.current.value;
      nameRef.current.value = "";
    }

    const reference = axios
      .post(config.api.contactUsURL, contact)
      .then((res) => res.status);

    console.log(reference);
  };

  return (
    <div
      className="container-xxl custom-statistic-bg newsletter py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h1 className="text-center text-white mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <textarea
                  ref={textRef}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <input
                ref={phoneRef}
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Enter Your Email"
                style={{ height: "48px" }}
              />
              <div className="position-relative w-100 mt-3">
                <input
                  ref={nameRef}
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5 my-3"
                  type="text"
                  placeholder="Enter Your Name"
                  style={{ height: "48px" }}
                />

                <button
                  type="submit"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane fs-4"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
