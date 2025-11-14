import React, { useState } from 'react';
import { serviceData } from '../../data/services';
import ServiceCard from '../ServiceCard';
import PaymentDialog from '../PaymentDialog';
import { Service } from '../../types';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handlePayClick = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative">
         <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Office background"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            HMPS & Associates – Simplifying Corporate Compliance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
            End-to-end ROC, GST, ITR & Audit services under one roof.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
                <a href="#services">Explore Services</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-brand-accent" asChild>
                <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
              Choose from a wide range of services tailored for your business needs.
            </p>
          </div>

          <Tabs defaultValue={serviceData[0].category} className="w-full mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              {serviceData.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category} className="py-2.5">
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {serviceData.map((cat) => (
              <TabsContent key={cat.category} value={cat.category} className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.services.map((service) => (
                    <ServiceCard key={service.name} service={service} onPay={handlePayClick} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

        </div>
      </section>

      {/* Payment Dialog */}
      <PaymentDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        service={selectedService}
      />
    </div>
  );
};

export default HomePage;