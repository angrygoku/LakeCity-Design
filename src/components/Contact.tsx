import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (phoneNumber: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in required fields",
        description: "Name and message are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const message = `Hi! I'm ${formData.name}${formData.phone ? ` (${formData.phone})` : ""}.

${formData.message}

---
Sent from Lakecity Designs website`;

    // Send to Govind's number
    sendToWhatsApp("919675624255", message);

    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send. We'll get back to you soon!",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              Ready to bring your <span className="text-gradient">vision</span>{" "}
              to life?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you right away.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-secondary/50 border-border"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tell us about your project *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project... wedding cards, pitch deck, website, etc."
                    rows={5}
                    className="bg-secondary/50 border-border resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Call Us Directly */}
            <div className="flex flex-col justify-center">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      CALL US DIRECTLY
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We appreciate that.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+919675624255"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        +91-9675624255
                      </p>
                      <p className="text-sm text-muted-foreground">Govind</p>
                    </div>
                  </a>

                  <a
                    href="tel:+918875584397"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        +91-8875584397
                      </p>
                      <p className="text-sm text-muted-foreground">Prachi</p>
                    </div>
                  </a>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm">
                Or message us on WhatsApp for a quicker response!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
