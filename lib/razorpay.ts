import { Service } from '../types';

interface UserDetails {
  name: string;
  email: string;
  phone: string;
}

export const processPayment = (service: Service, userDetails: UserDetails, finalAmount: number) => {
  const options = {
    key: process.env.RAZORPAY_KEY_ID || 'rzp_test_1DPQoV3B4b4h3X', // A public test key
    amount: finalAmount * 100, // amount in the smallest currency unit (paise)
    currency: "INR",
    name: "HMPS & Associates",
    description: `Payment for ${service.name}`,
    image: "https://images.unsplash.com/photo-1583324113620-92e72b964b63?q=80&w=100&auto=format&fit=crop", 
    handler: function (response: any) {
      alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
      // You can handle the success callback here. e.g., redirect to a success page or update UI
    },
    prefill: {
      name: userDetails.name,
      email: userDetails.email,
      contact: userDetails.phone,
    },
    notes: {
      service_name: service.name,
      base_price: service.price.toString(),
    },
    theme: {
      color: "#1E40AF", // Royal Blue
    },
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Razorpay Error: ", error);
    alert("Error initializing payment. Please check console for details.");
  }
};