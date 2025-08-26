import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-8 w-full max-w-md text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <span className="text-muted-foreground">seeyannewaz@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <span className="text-muted-foreground">+1 (945) 400-7069</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">
                  Richardson, TX, USA
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/seeyan-newaz/" target="_blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/seeyan_236/" target="_blank">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/seeyan.newaz" target="_blank">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
