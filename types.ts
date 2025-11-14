export interface Service {
  name: string;
  price: number;
  billing: 'yearly' | 'one-time' | 'monthly';
  description: string;
  subtasks: number;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export interface RazorpayOptions {
  key: string;
  amount: number; // in paise
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes?: {
    [key: string]: string;
  };
  theme: {
    color: string;
  };
}

// This is to add the Razorpay constructor to the window object
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}
