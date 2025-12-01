@@ -3,8 +3,9 @@ import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock } from "lucide-react";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
@@ -40,51 +41,108 @@ const Contact = () => {
    });
  };

  const whatsappNumber = "<6303321322>"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Tell me what you need — I'll reply with ideas and a proposal
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span>Prefer WhatsApp?</span>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#20BA5A] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Click here to start a chat
              </a>
              <span>— I usually reply within 24 hours.</span>
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:yeswanthdatalabs@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                yeswanthdatalabs@gmail.com
              </a>
            </Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:yeswanthdatalabs@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  yeswanthdatalabs@gmail.com
                </a>
              </Card>
            </motion.div>

            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">India (IST)</p>
            </Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  Start a conversation
                </a>
              </Card>
            </motion.div>

            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-muted-foreground">Mon-Fri, 9AM-6PM IST</p>
            </Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">India (IST)</p>
                <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM</p>
              </Card>
            </motion.div>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
@@ -177,8 +235,9 @@ const Contact = () => {
              >
                Send Message
              </Button>
            </form>
          </Card>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
