import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Lakecity turned our 40-slide mess into a ₹1.2 Cr seed round in 10 days. Investors said it was the best deck they'd seen.",
    author: "Aakriti",
    role: "Founder, GreenLoop",
  },
  {
    quote: "Our wedding invitations were the talk of the event. Guests kept asking where we got them designed. Delivered in just 5 days!",
    author: "Priya & Rahul",
    role: "Wedding Clients",
  },
  {
    quote: "Professional, fast, and incredibly creative. The event signage elevated our entire corporate summit.",
    author: "Vikram Sharma",
    role: "Event Manager, TechCon India",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative min-h-[140px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-lg md:text-xl text-foreground font-medium mb-4 max-w-3xl">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">—</span>
                  <span className="font-semibold text-foreground">{testimonial.author}</span>
                  <span className="text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
