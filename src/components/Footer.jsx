import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.column}>
            <h3 style={styles.heading}>Incisor Cleaning Services</h3>
            <p style={styles.text}>
              Professional cleaning services in Kigali, Kigali. We deliver exceptional results for homes, offices, and vehicles.
            </p>
            <div style={styles.socialLinks}>
              <a
                href="https://wa.me/250785234933"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/zakservice"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnHeading}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/services" style={styles.link}>Services</Link></li>
              <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
              <li><Link to="/blog" style={styles.link}>Blog</Link></li>
              <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            </ul>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnHeading}>Our Services</h4>
            <ul style={styles.linkList}>
              <li style={styles.link}>House Cleaning</li>
              <li style={styles.link}>Sofa Cleaning</li>
              <li style={styles.link}>Mattress Cleaning</li>
              <li style={styles.link}>Carpet Cleaning</li>
              <li style={styles.link}>Bathroom Cleaning</li>
              <li style={styles.link}>Window Cleaning</li>
              <li style={styles.link}>Car Interior Cleaning</li>
            </ul>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnHeading}>Contact Info</h4>
            <p style={styles.text}>Kigali, Kigali</p>
            <p style={styles.text}>Phone: +250785234933</p>
            <p style={styles.text}>Email: info@zakservice.com</p>
            <p style={styles.text}>Hours: Mon-Sat, 7AM-6PM</p>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Incisor Cleaning Services. All rights reserved. developed by <a href="http://www.incisordigital.com" style={{color:"orange"}}>Incisor Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '3rem 1.5rem 1.5rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FF6600',
    margin: 0,
  },
  columnHeading: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#ffffff',
    margin: 0,
  },
  text: {
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#cccccc',
    margin: 0,
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    color: '#FF6600',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 600,
    transition: 'color 0.3s',
  },
  bottom: {
    borderTop: '1px solid #333',
    paddingTop: '1.5rem',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '0.875rem',
    color: '#999',
    margin: 0,
  },
};

export default Footer;
