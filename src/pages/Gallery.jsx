import { useState } from 'react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { galleryItems } from '../data/galleryData';

function Gallery() {
  const [selectedService, setSelectedService] = useState('All');

  const services = ['All', ...new Set(galleryItems.map(item => item.service))];

  const filteredItems = selectedService === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.service === selectedService);

  return (
    <>
      <SEO
        title="Gallery - Before & After Cleaning Results | Incisor Cleaning Services"
        description="View our before and after cleaning results in Kigali, Rwanda. Real photos of house cleaning, sofa cleaning, carpet cleaning, and more. See the Incisor Cleaning Services difference!"
        keywords="cleaning before after Kigali, cleaning results Kigali, professional cleaning photos, house cleaning gallery, carpet cleaning results"
      />

      <div style={styles.page}>
        <section style={styles.header}>
          <div style={styles.container}>
            <h1 style={styles.pageTitle}>Our Work Gallery</h1>
            <p style={styles.pageSubtitle}>
              See the transformation - Real before & after results from our cleaning services in Kigali
            </p>
          </div>
        </section>

        <section style={styles.filters}>
          <div style={styles.container}>
            <div style={styles.filterButtons}>
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  style={{
                    ...styles.filterButton,
                    ...(selectedService === service ? styles.filterButtonActive : {}),
                  }}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.gallery}>
          <div style={styles.container}>
            <div style={styles.galleryGrid}>
              {filteredItems.map((item) => (
                <div key={item.id} style={styles.galleryItem}>
                  <div style={styles.serviceTag}>{item.service}</div>
                  <div style={styles.imagesContainer}>
                    <div style={styles.imageWrapper}>
                      <span style={styles.imageLabel}>Before</span>
                      <img
                        src={item.before}
                        alt={`${item.service} before cleaning`}
                        style={styles.image}
                      />
                    </div>
                    <div style={styles.imageWrapper}>
                      <span style={styles.imageLabel}>After</span>
                      <img
                        src={item.after}
                        alt={`${item.service} after cleaning`}
                        style={styles.image}
                      />
                    </div>
                  </div>
                  <div style={styles.caption}>
                    <p style={styles.captionText}>{item.caption}</p>
                    <WhatsAppButton
                      service={item.service}
                      pageUrl={`${window.location.origin}/gallery#item-${item.id}`}
                      text="Get This Service"
                      style={styles.ctaButton}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready for Your Transformation?</h2>
            <p style={styles.ctaText}>
              Get the same professional results for your home, office, or vehicle
            </p>
            <WhatsAppButton
              text="Get Your Free Quote"
              style={styles.primaryButton}
            />
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

const styles = {
  page: {
    width: '100%',
  },
  header: {
    backgroundColor: '#00AA55',
    color: '#ffffff',
    padding: '3rem 1.5rem',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  pageSubtitle: {
    fontSize: '1.25rem',
    color: '#ffffff',
    opacity: 0.95,
  },
  filters: {
    padding: '2rem 1.5rem',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #e0e0e0',
  },
  filterButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: '#ffffff',
    color: '#333',
    border: '2px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  filterButtonActive: {
    backgroundColor: '#FF6600',
    color: '#ffffff',
    borderColor: '#FF6600',
  },
  gallery: {
    padding: '4rem 1.5rem',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  galleryItem: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  serviceTag: {
    backgroundColor: '#800080',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    textAlign: 'center',
  },
  imagesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  imageWrapper: {
    position: 'relative',
    height: '250px',
  },
  imageLabel: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#ffffff',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: 600,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  caption: {
    padding: '1.5rem',
  },
  captionText: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  ctaButton: {
    backgroundColor: '#00AA55',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.875rem',
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  cta: {
    backgroundColor: '#00AA55',
    padding: '4rem 1.5rem',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.25rem',
    color: '#ffffff',
    marginBottom: '2rem',
  },
  primaryButton: {
    backgroundColor: '#FF6600',
    color: '#ffffff',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  },
};

const mediaQueries = `
  @media (max-width: 768px) {
    .pageTitle {
      font-size: 2rem !important;
    }
    .ctaTitle {
      font-size: 2rem !important;
    }
    .galleryGrid {
      grid-template-columns: 1fr !important;
    }
  }
  .galleryItem:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = mediaQueries;
if (!document.querySelector('style[data-gallery-styles]')) {
  styleSheet.setAttribute('data-gallery-styles', 'true');
  document.head.appendChild(styleSheet);
}

export default Gallery;
