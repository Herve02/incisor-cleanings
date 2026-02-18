import { useState } from "react";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/servicesData";

function Services() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  return (
    <>
      <SEO
        title="Cleaning Services in Kigali - Incisor Cleaning Services | Professional Cleaning"
        description="Professional cleaning services in Kigali, Rwanda: House cleaning, sofa cleaning, mattress cleaning, carpet cleaning, bathroom cleaning, window cleaning, and car interior cleaning. Affordable rates, satisfaction guaranteed."
        keywords="cleaning services Kigali, nettoyage maison Kigali, sofa cleaning Kigali, carpet cleaning Rwanda, car cleaning Kigali, professional cleaners Kigali"
      />

      <div className="page">
        <section className="header">
          <div className="services-container">
            <h1 className="services-pageTitle">Our Cleaning Services</h1>
            <p className="services-pageSubtitle">
              Professional cleaning solutions for homes, offices, and vehicles
              in Kigali, Rwanda
            </p>
          </div>
        </section>

        <section className="services">
          <div className="services-container">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`serviceSection ${index % 2 === 0 ? {} : "serviceSectionReverse"}`}
               
              >
                <div className="serviceImage">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="image"
                  />
                </div>
                <div className="serviceContent">
                  <h2 className="serviceTitle">{service.title}</h2>
                  <p className="serviceDescription">
                    {service.fullDescription}
                  </p>
                  <div className="benefits">
                    <h3 className="benefitsTitle">What's Included:</h3>
                    <ul className="benefitsList">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="benefitItem">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="price">{service.price}</p>
                  <WhatsAppButton
                    service={service.title}
                    name={formData.name}
                    phone={formData.phone}
                    date={formData.date}
                    pageUrl={`${window.location.origin}/services#${service.id}`}
                    text={`Request ${service.title} Quote`}
                    className="ctaButton"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="servicesCta">
          <div className="servicesCtaContent">
            <h2 className="servicesCtaTitle">Need Multiple Services?</h2>
            <p className="servicesCtaText">
              Contact us for package deals and discounts on multiple services
            </p>
            <WhatsAppButton
              text="Get Custom Package Quote"
              className="primaryButton"
            />
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

export default Services;
