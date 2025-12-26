import { useState } from "react";
import { X, Send, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ModalType = "project" | "call" | null;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

const ContactModal = ({ isOpen, onClose, type }: ContactModalProps) => {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<"govind" | "prachi">("govind");

  const phoneNumbers = {
    govind: "919675624255",
    prachi: "918875584397",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let whatsappMessage = "";
    
    if (type === "call") {
      whatsappMessage = `Hi! I'd like to book a call with Lakecity Designs.\n\nName: ${name}\nProject Type: ${projectType}\nPreferred Time: ${preferredTime}\n${message ? `\nAdditional Info: ${message}` : ""}`;
    } else {
      whatsappMessage = `Hi! I'm interested in working with Lakecity Designs.\n\nName: ${name}\nProject Type: ${projectType}\n${message ? `\nDetails: ${message}` : ""}`;
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumbers[selectedNumber]}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
    
    setName("");
    setProjectType("");
    setMessage("");
    setPreferredTime("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="p-6 border-b border-border bg-gradient-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {type === "call" ? (
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-display font-bold">
                  {type === "call" ? "Book a Call" : "Start a Project"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  We'll respond within an hour
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium mb-2">What do you need?</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select a service</option>
              <option value="Wedding Stationery">Wedding Stationery</option>
              <option value="Pitch Deck">Pitch Deck</option>
              <option value="Event Printables">Event Printables</option>
              <option value="Website">Website</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="Other">Something else</option>
            </select>
          </div>

          {/* Preferred Time - Only for call booking */}
          {type === "call" && (
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time for Call</label>
              <input
                type="text"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                placeholder="e.g., Tomorrow 3 PM, Weekday evenings"
                required
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {type === "call" ? "Anything else we should know?" : "Tell us more (optional)"}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share any details about your project..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Contact Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Who would you like to reach?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedNumber("govind")}
                className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedNumber === "govind"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Govind
              </button>
              <button
                type="button"
                onClick={() => setSelectedNumber("prachi")}
                className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedNumber === "prachi"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Prachi
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Send via WhatsApp
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            This will open WhatsApp with your message ready to send
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
