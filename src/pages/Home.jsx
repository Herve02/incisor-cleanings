import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/servicesData";

function Home() {
  return (
    <>
      <SEO
        title="Incisor Cleaning Services - Professional Cleaning Services in Kigali, Rwanda"
        description="Professional cleaning services in Kigali, Rwanda. House cleaning, sofa cleaning, carpet cleaning, car interior cleaning, and more. Get a free quote today!"
        keywords="cleaning services Kigali, nettoyage Kigali, professional cleaning Kigali Rwanda, house cleaning Kigali, sofa cleaning, carpet cleaning, car cleaning Kigali"
      />

      <div className="page">
        {/* Hero sectio starts */}
        <section className="hero">
          <div className="heroContent">
            <h1 className="heroTitle">
              Professional Cleaning Services in Kigali
            </h1>
            <p className="heroSubtitle">
              Your trusted partner for house cleaning, sofa cleaning, carpet
              cleaning, and more. Serving homes, offices, and vehicles across
              Kigali, Rwanda.
            </p>
            <div className="heroCTA">
              <WhatsAppButton text="Get Free Quote" className="primaryButton" />
              <Link to="/contact" className="secondaryButton homeSecondaryButton">
                Book a Cleaning
              </Link>
            </div>
          </div>
          <div className="heroImage heroImg">
            <img
              src="https://i.pinimg.com/736x/a3/02/27/a30227a2e3613de37fd5c9b8bd5a4b6f.jpg"
              alt="Professional cleaning team"
              className="image"
            />
          </div>
        </section>
        {/* Hero section ends */}

        {/* Featured services section starts*/}
        <section className="services">
          <div className="container">
            <h2 className="sectionTitle">Our Cleaning Services</h2>
            <p className="sectionSubtitle">
              We offer comprehensive cleaning solutions for every need in Kigali
            </p>
            <div className="servicesGrid">
              {services.map((service) => (
                <div key={service.id} className="serviceCard">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="serviceImage"
                  />
                  <div className="serviceContent">
                    <h3 className="serviceTitle">{service.title}</h3>
                    <p className="serviceDescription">
                      {service.shortDescription}
                    </p>
                    <p className="servicePrice">{service.price}</p>
                    <Link to="/services" className="serviceLink">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work section starts */}
        <section className="howItWorks">
          <div className="container">
            <h2 className="sectionTitle">How It Works</h2>
            <p className="sectionSubtitle">
              Simple, fast, and efficient cleaning service in 4 easy steps
            </p>
            <div className="stepsGrid">
              <div className="step">
                <img
                  src="https://i.pinimg.com/736x/36/1a/7f/361a7f95331b3abd78c53a1e8d3b1a35.jpg"
                  alt="Contact us"
                  className="stepImage"
                />
                <div className="stepNumber">1</div>
                <h3 className="stepTitle">Contact Us</h3>
                <p className="stepDescription">
                  Reach out via WhatsApp, phone, or our contact form to request
                  a quote
                </p>
              </div>
              <div className="step">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
                  alt="Get a quote"
                  className="stepImage"
                />
                <div className="stepNumber">2</div>
                <h3 className="stepTitle">Get a Quote</h3>
                <p className="stepDescription">
                  We provide a free, transparent quote based on your specific
                  cleaning needs
                </p>
              </div>
              <div className="step">
                <img
                  src="https://i.pinimg.com/1200x/e6/b5/d5/e6b5d558cea3530f64594eb2ce4ae021.jpg"
                  alt="Schedule service"
                  className="stepImage"
                />
                <div className="stepNumber">3</div>
                <h3 className="stepTitle">Schedule Service</h3>
                <p className="stepDescription">
                  Choose a convenient date and time that works for you
                </p>
              </div>
              <div className="step">
                <img
                  src="https://i.pinimg.com/736x/f0/e0/f7/f0e0f7abac9d83bb4b9492b2dbdef857.jpg"
                  alt="Enjoy clean space"
                  className="stepImage"
                />
                <div className="stepNumber">4</div>
                <h3 className="stepTitle">Enjoy Clean Space</h3>
                <p className="stepDescription">
                  Relax while our professional team delivers exceptional results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="trust">
          <div className="container">
            <h2 className="sectionTitle">Why Choose Incisor Cleaning Services?</h2>
            <div className="trustGrid">
              <div className="trustItem">
                <h3 className="trustTitle">100% Satisfaction Guarantee</h3>
                <p className="trustDescription">
                  We stand behind our work. If you're not satisfied, we'll make
                  it right.
                </p>
              </div>
              <div className="trustItem">
                <h3 className="trustTitle">Experienced Professionals</h3>
                <p className="trustDescription">
                  Our trained cleaning experts deliver consistent, high-quality
                  results.
                </p>
              </div>
              <div className="trustItem">
                <h3 className="trustTitle">Eco-Friendly Products</h3>
                <p className="trustDescription">
                  We use safe, environmentally friendly cleaning products for
                  your health.
                </p>
              </div>
              <div className="trustItem">
                <h3 className="trustTitle">Affordable Pricing</h3>
                <p className="trustDescription">
                  Competitive rates with transparent pricing and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testmonials */}
        <section className="testimonials">
          <div className="container}">
            <h2 className="sectionTitle">What Our Clients Say</h2>
            <div className="testimonialsGrid">
              <div className="testimonial">
                <img
                  src="https://i.pinimg.com/736x/e8/94/65/e89465305c53fe5e7f552bac7c164eec.jpg"
                  alt="Happy client"
                  className="testimonialImage"
                />
                <p className="testimonialText">
                  "Incisor Cleaning Services transformed my home! Their attention to detail is
                  incredible. I now use them every month for house cleaning."
                </p>
                <p className="testimonialAuthor">- Marie K., Kigali</p>
              </div>
              <div className="testimonial">
                <img
                  src="https://i.pinimg.com/1200x/98/b8/13/98b8131048711a8ef9d6be1bc096ed58.jpg"
                  alt="Satisfied customer"
                  className="testimonialImage"
                />
                <p className="testimonialText">
                  "Professional service from start to finish. My car interior
                  looks brand new! Highly recommend their services."
                </p>
                <p className="testimonialAuthor">- Jean-Paul M., Kigali</p>
              </div>
              <div className="testimonial">
                <img
                  src="https://i.pinimg.com/1200x/7f/66/13/7f661392a1d5c59296c70324134acdc4.jpg"
                  alt="Happy customer"
                  className="testimonialImage"
                />
                <p className="testimonialText">
                  "Best cleaning service in Kigali! They cleaned my office
                  carpets and sofas. The results exceeded my expectations."
                </p>
                <p className="testimonialAuthor">- Grace N., Kigali</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION STARTS */}
        <section className="cta">
          <div className="ctaContent">
            <h2 className="ctaTitle">Ready for a Spotless Space?</h2>
            <p className="ctaText">
              Get your free quote today and experience the Incisor Cleaning Services
              difference in Kigali
            </p>
            <div className="ctaButtons">
              <WhatsAppButton
                text="Get Free Quote Now"
                className="primaryButton uniqueColorBtn"

              />
              <Link to="/services" className="secondaryButton homeSecBtn">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

export default Home;
