import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-[95%] md:w-[80%] mx-auto mt-10 space-y-5 py-20 text-white"
    >
      <div className="flex flex-col justify-center gap-5 items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Workflow?</h2>
        <p style={{color:"white"}} className="max-w-[60ch]">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          Start your free trial today.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 md:gap-10">
        <button className="common-btn">Explore Products</button>
        <button className="inactive-btn">View Pricing</button>
      </div>
      <p className="text-center"  style={{color:"white"}}>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Testimonials;
