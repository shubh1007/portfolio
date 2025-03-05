
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      link: "https://github.com",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://linkedin.com",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      link: "https://twitter.com",
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      name: "Portfolio",
      link: "#",
      color: "hover:bg-purple-600 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover-effect animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center text-primary/80">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-hover-effect overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-medium mb-6 text-center">Connect with me</h3>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${item.color}`}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center mb-4">Subscribe to my newsletter</p>
                  <div className="flex">
                    <Input 
                      placeholder="Enter your email" 
                      className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                    />
                    <Button className="rounded-l-none" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="card-hover-effect overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2 group">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Shubham Kumar Sharma"
                          required
                          className="transition-all border-border focus-visible:border-primary/50 group-hover:border-primary/30"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@example.com"
                          required
                          className="transition-all border-border focus-visible:border-primary/50 group-hover:border-primary/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                        className="transition-all border-border focus-visible:border-primary/50 group-hover:border-primary/30"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        className="transition-all border-border focus-visible:border-primary/50 group-hover:border-primary/30 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto transition-transform hover:scale-105 relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg 
                            className="animate-spin -ml-1 mr-2 h-4 w-4" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                          >
                            <circle 
                              className="opacity-25" 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="4"
                            ></circle>
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                      <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-300"></span>
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
