import { useState } from "react";
import { X, Send, Calendar, MessageCircle, Instagram } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    window.open("https://instagram.com/lakecity.designs", "_blank");
    onClose();
    
    setName("");
    setProjectType("");
    setMessage("");
    setPreferredTime("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
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

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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

          <div>
            <label className="block text-sm font-medium mb-2">What do you need?</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select a service</option>
              <option value="Business Website">Business Website</option>
              <option value="E-Commerce Store">E-Commerce Store</option>
              <option value="Landing Page">Landing Page</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Social Media">Social Media Management</option>
              <option value="Other">Something else</option>
            </select>
          </div>

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

          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              <span className="font-medium">Connect with us on Instagram</span>
            </div>
            <p className="text-sm text-muted-foreground">
              DM us @lakecity.designs with your project details
            </p>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white" size="lg">
            <Instagram className="w-4 h-4 mr-2" />
            Open Instagram
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            This will open Instagram where you can message us directly
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
