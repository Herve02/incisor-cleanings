import { useState } from "react";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/servicesData";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "250785234933";
    let message = `Hello Incisor Cleaning Services!\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Service: ${formData.service || "General Inquiry"}\n`;
    message += `Preferred Date: ${formData.date || "Not specified"}\n`;

    if (formData.message) {
      message += `\nMessage: ${formData.message}`;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact Us - Get Free Quote | Incisor Cleaning Services"
        description="Contact Incisor Cleaning Services for professional cleaning services. Get a free quote via WhatsApp, phone, or contact form. Serving all of kigali, Rwanda."
        keywords="contact cleaning services kigali, cleaning quote kigali, professional cleaners contact, Incisor Cleaning Services phone"
      />

      <div style={styles.page}>
        <section style={styles.header}>
          <div style={styles.container}>
            <h1 style={styles.pageTitle}>Get Your Free Quote</h1>
            <p style={styles.pageSubtitle}>
              Contact us today for professional cleaning services in kigali
            </p>
          </div>
        </section>

        <section style={styles.contactSection}>
          <div style={styles.container}>
            <div style={styles.contentGrid}>
              <div style={styles.formContainer}>
                <h2 style={styles.formTitle}>Request a Quote</h2>
                <p style={styles.formDescription}>
                  Fill out the form below and we'll send you a quote via
                  WhatsApp
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={styles.select}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      style={styles.textarea}
                      placeholder="Tell us more about your cleaning needs..."
                    />
                  </div>

                  <button type="submit" style={styles.submitButton}>
                    Send Quote Request via WhatsApp
                  </button>
                </form>
              </div>

              <div style={styles.infoContainer}>
                <div style={styles.infoCard}>
                  <h3 style={styles.infoTitle}>Contact Information</h3>

                  <div style={styles.infoItem}>
                    <h4 style={styles.infoLabel}>WhatsApp</h4>
                    <a
                      href="https://wa.me/250785234933"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.infoLink}
                    >
                      +250785234933
                    </a>
                  </div>

                  <div style={styles.infoItem}>
                    <h4 style={styles.infoLabel}>Phone</h4>
                    <a href="tel:+25078534933" style={styles.infoLink}>
                      +25078534933
                    </a>
                  </div>

                  <div style={styles.infoItem}>
                    <h4 style={styles.infoLabel}>Email</h4>
                    <a
                      href="mailto:info@zakservice.com"
                      style={styles.infoLink}
                    >
                      info@zakservice.com
                    </a>
                  </div>

                  <div style={styles.infoItem}>
                    <h4 style={styles.infoLabel}>Instagram</h4>
                    <a
                      href="https://instagram.com/zakservice"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.infoLink}
                    >
                      @zakservice
                    </a>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <h3 style={styles.infoTitle}>Operating Hours</h3>
                  <div style={styles.hours}>
                    <p style={styles.hourItem}>
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </p>
                    <p style={styles.hourItem}>Saturday: 8:00 AM - 5:00 PM</p>
                    <p style={styles.hourItem}>Sunday: Closed</p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <h3 style={styles.infoTitle}>Service Areas</h3>
                  <p style={styles.infoText}>
                    We proudly serve all neighborhoods across kigali, Rwanda.
                    Contact us to confirm service availability in your area.
                  </p>
                </div>

                <div style={styles.quickContact}>
                  <h3 style={styles.infoTitle}>Quick Contact</h3>
                  <WhatsAppButton
                    text="Chat on WhatsApp"
                    style={styles.whatsappButton}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <div style={styles.container}>
            <h2 style={styles.ctaTitle}>Why Choose Incisor Cleaning Services?</h2>
            <div style={styles.benefitsGrid}>
              <div style={styles.benefit}>
                <h3 style={styles.benefitTitle}>Fast Response</h3>
                <p style={styles.benefitText}>
                  We respond to all inquiries within 24 hours
                </p>
              </div>
              <div style={styles.benefit}>
                <h3 style={styles.benefitTitle}>Flexible Scheduling</h3>
                <p style={styles.benefitText}>
                  Book services at times that work for you
                </p>
              </div>
              <div style={styles.benefit}>
                <h3 style={styles.benefitTitle}>Transparent Pricing</h3>
                <p style={styles.benefitText}>
                  No hidden fees, clear quotes upfront
                </p>
              </div>
              <div style={styles.benefit}>
                <h3 style={styles.benefitTitle}>Satisfaction Guaranteed</h3>
                <p style={styles.benefitText}>
                  100% satisfaction or we'll make it right
                </p>
              </div>
            </div>
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

const styles = {
  page: {
    width: "100%",
  },
  header: {
    backgroundColor: "#00AA55",
    color: "#ffffff",
    padding: "3rem 1.5rem",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  pageTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  pageSubtitle: {
    fontSize: "1.25rem",
    color: "#ffffff",
    opacity: 0.95,
  },
  contactSection: {
    padding: "4rem 1.5rem",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  formTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5rem",
  },
  formDescription: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#333",
  },
  input: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  select: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#ffffff",
    cursor: "pointer",
  },
  textarea: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "inherit",
    resize: "vertical",
  },
  submitButton: {
    backgroundColor: "#FF6600",
    color: "#ffffff",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  infoCard: {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "12px",
  },
  infoTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
  },
  infoItem: {
    marginBottom: "1rem",
  },
  infoLabel: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#666",
    marginBottom: "0.25rem",
  },
  infoLink: {
    fontSize: "1rem",
    color: "#FF6600",
    textDecoration: "none",
    fontWeight: 600,
  },
  hours: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  hourItem: {
    fontSize: "0.875rem",
    color: "#666",
    margin: 0,
  },
  infoText: {
    fontSize: "0.875rem",
    color: "#666",
    lineHeight: "1.6",
    margin: 0,
  },
  quickContact: {
    backgroundColor: "#00AA55",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  whatsappButton: {
    backgroundColor: "#ffffff",
    color: "#00AA55",
    padding: "1rem 2rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    display: "block",
    marginTop: "1rem",
  },
  cta: {
    backgroundColor: "#f9f9f9",
    padding: "4rem 1.5rem",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "3rem",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  benefit: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
  },
  benefitTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#FF6600",
    marginBottom: "0.5rem",
  },
  benefitText: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
  },
};

const mediaQueries = `
  @media (max-width: 768px) {
    .contentGrid {
      grid-template-columns: 1fr !important;
    }
    .pageTitle, .ctaTitle {
      font-size: 2rem !important;
    }
  }
  input:focus, select:focus, textarea:focus {
    border-color: #FF6600 !important;
  }
  .submitButton:hover {
    background-color: #e55a00;
  }
  .quickContact h3 {
    color: #ffffff;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = mediaQueries;
if (!document.querySelector("style[data-contact-styles]")) {
  styleSheet.setAttribute("data-contact-styles", "true");
  document.head.appendChild(styleSheet);
}

export default Contact;
