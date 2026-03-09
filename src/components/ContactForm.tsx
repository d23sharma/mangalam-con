import { useState, type FormEvent, type ChangeEvent } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ServiceDropdown from "./ServiceDropdown";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.service) {
      alert("Please select a service.");
      return;
    }

    setLoading(true);

    const data = { ...formData };

    try {
      const form = new FormData();

      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("service", formData.service);
      form.append("message", formData.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwkAP-J9WAvbibB30ngy9bJJI1ONKOO6ApNCTYQjMuOOjLyHrQTylep5zCwVEzbs4RnXA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: form
        }
      );
    } catch (error) {
      console.error("Error sending data:", error);
    }

    setSubmitted(true);

    const whatsappMessage = `📩 *New Enquiry - Mangalam Construction*

👤 Name:
${formData.name}

📞 Phone:
${formData.phone}

📧 Email:
${formData.email}

🏗 Service Required:
${formData.service}

📝 Message:
${formData.message}`;

    const whatsappURL = `whatsapp://send?phone=916269785582&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappURL;

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request a Free <span className="text-gradient-gold">Consultation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">

                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>

                <p className="text-muted-foreground text-center">
                  Thank you for submitting your enquiry. Our team has received
                  your details and will get back to you within the next 4 hours.
                </p>

              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                />

                <ServiceDropdown
                  value={formData.service}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      service: value,
                    }))
                  }
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Please specify the details like your bugget, location, timeline etc"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-lg hover:bg-gold-dark transition disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>

              </form>
            )}

          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center gap-8">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  Mangalam Construction <br />
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Phone</h3>

                <a
                  href="tel:+916269785582"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  +91 62697 85582
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  info@mangalamconstruction.com
                </p>
              </div>
            </div>

            <a
              href="tel:+916269785582"
              className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              <Phone size={20} />
              Call Now
            </a>

            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                src="https://maps.google.com/maps?q=Indore%20Madhya%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;