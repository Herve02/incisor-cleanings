function WhatsAppButton({ service, name, phone, date, pageUrl, style, text, fixed }) {
  const WHATSAPP_NUMBER = '250785234933';

  const generateMessage = () => {
    let message = 'Hello Incisor Cleaning Services! ';

    if (name) {
      message += `My name is ${name}. `;
    }

    if (phone) {
      message += `My phone number is ${phone}. `;
    }

    if (service) {
      message += `I'm interested in ${service}. `;
    } else {
      message += `I'd like to get a quote for cleaning services. `;
    }

    if (date) {
      message += `Preferred date: ${date}. `;
    }

    if (pageUrl) {
      message += `Reference: ${pageUrl}`;
    }

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateMessage()}`;

  const defaultStyle = fixed ? styles.fixedButton : styles.button;
  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={mergedStyle}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#128C7E';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = fixed ? '#25D366' : (style?.backgroundColor || '#00AA55');
      }}
    >
      {text || 'Get Quote on WhatsApp'}
    </a>
  );
}

const styles = {
  button: {
    display: 'inline-block',
    backgroundColor: '#FF6600',
    color: '#ffffff',
    padding: '1rem 2rem',
    // border: '2px solid #FF6600',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    border: 'none',
    cursor: 'pointer',
  },
  fixedButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    padding: '1rem 1.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.875rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 999,
    transition: 'background-color 0.3s',
  },
};

export default WhatsAppButton;
