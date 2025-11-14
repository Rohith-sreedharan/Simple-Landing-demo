import React, { useState, useMemo, useEffect } from 'react';
import { Service } from '../types';
import { processPayment } from '../lib/razorpay';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface PaymentDialogProps {
  service: Service | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({ service, isOpen, setIsOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const GST_RATE = 0.20; // 20%

  useEffect(() => {
    if (!isOpen) {
        // Reset form when dialog is closed
        setName('');
        setEmail('');
        setPhone('');
        setError('');
    }
  }, [isOpen]);

  const priceDetails = useMemo(() => {
    if (!service) return null;
    const gstAndFees = service.price * GST_RATE;
    const finalAmount = service.price + gstAndFees;
    return {
      base: service.price,
      gstAndFees,
      finalAmount,
    };
  }, [service]);

  const handlePayment = () => {
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    if (service && priceDetails) {
      processPayment(service, { name, email, phone }, priceDetails.finalAmount);
      setIsOpen(false);
    }
  };

  if (!service || !priceDetails) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>{service.name}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-4">
            <div className="flex justify-between items-center text-sm text-foreground/80">
              <span>Base Price:</span>
              <span className="font-medium">₹{priceDetails.base.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-foreground/80">
              <span>GST & Processing (20%):</span>
              <span className="font-medium">₹{priceDetails.gstAndFees.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center text-foreground font-bold text-base border-t pt-3 mt-3">
              <span>Total Payable:</span>
              <span>₹{priceDetails.finalAmount.toLocaleString('en-IN')}</span>
            </div>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" placeholder="John Doe" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" placeholder="you@example.com" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">Phone</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3" placeholder="9876543210" required />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <DialogFooter>
          <Button onClick={handlePayment}>
             Pay ₹{priceDetails.finalAmount.toLocaleString('en-IN')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
