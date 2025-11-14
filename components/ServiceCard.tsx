import React from 'react';
import { Service } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ServiceCardProps {
  service: Service;
  onPay: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPay }) => {
  return (
    <Card className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-lg">{service.name}</CardTitle>
        <CardDescription className="pt-2">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-blue-100 text-brand-dark px-2.5 py-1 rounded-full font-medium">
            Subtasks: {service.subtasks}
          </span>
          <span className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-medium capitalize">
            {service.billing}
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 flex items-center justify-between">
         <p className="text-xl font-bold text-foreground">
          ₹{service.price.toLocaleString('en-IN')}
          <span className="text-xs font-normal text-foreground/60"> + taxes</span>
        </p>
        <Button onClick={() => onPay(service)}>
          Proceed to Pay
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;