
import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Clients } from "@/components/landing/Clients";
import { Community } from "@/components/landing/Community";
import { Features } from "@/components/landing/Features";
import { Achievements } from "@/components/landing/Achievements";
import { Testimonials } from "@/components/landing/Testimonials";
import { Updates } from "@/components/landing/Updates";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Community />
        <Features />
        <Achievements />
        <Testimonials />
        <Updates />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
