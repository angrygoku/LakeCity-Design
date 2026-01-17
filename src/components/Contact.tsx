import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    window.open("https://instagram.com/lakecitydesign", "_blank");

    toast({
      title: "Opening Instagram",
      description: "Send us a DM with your project details!",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
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
                    placeholder="Describe your project... website, e-commerce, social media, etc."
                    rows={5}
                    className="bg-secondary/50 border-border resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                  disabled={isSubmitting}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Message on Instagram
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      FOLLOW US ON INSTAGRAM
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      DM us for quick responses
                    </p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/lakecitydesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-purple-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      @lakecitydesign
                    </p>
                    <p className="text-sm text-muted-foreground">Follow & DM us</p>
                  </div>
                </a>
              </div>

              <p className="text-center text-muted-foreground text-sm">
                We typically respond within an hour during business hours!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
