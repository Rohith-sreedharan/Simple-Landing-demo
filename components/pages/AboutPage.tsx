import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


const AboutPage: React.FC = () => {
  const coreValues = [
    "Integrity",
    "Client-Centricity",
    "Accuracy",
    "Innovation",
    "Confidentiality",
    "Reliability",
  ];

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-accent tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Your Trusted Partner in Corporate Compliance
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            At HMPS & Associates, we are dedicated to simplifying the complexities of corporate compliance, allowing you to focus on what you do best: growing your business.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Our Mission & Vision</h3>
              <p className="mt-3 text-lg text-gray-500">
                Our mission is to provide seamless, tech-driven, and reliable compliance solutions to businesses of all sizes. We envision a business ecosystem where compliance is not a burden but a catalyst for sustainable growth and transparency. We strive to be the most trusted one-stop platform for all corporate, legal, and financial services.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
                <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1556761175-b413da4b2489?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional team collaborating" />
            </div>
          </div>
        </div>

        <div className="mt-20 bg-secondary p-12 rounded-lg">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-gray-900">Our Core Values</h3>
            <p className="mt-4 text-lg text-gray-500">The principles that guide our work and our commitment to you.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">{value}</h4>
                  <p className="mt-2 text-base text-gray-500">
                    We uphold the highest standards of {value.toLowerCase()} in every interaction and service we deliver.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;