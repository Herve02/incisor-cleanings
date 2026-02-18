import { useEffect } from 'react';

function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title || 'Zak service - Professional Cleaning Services in kigali, Rwanda';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Professional cleaning services in kigali, Rwanda. House cleaning, sofa cleaning, carpet cleaning, car interior cleaning, and more. Get a free quote today!';

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'cleaning services kigali, nettoyage kigali, professional cleaning kigali Rwanda, house cleaning kigali, sofa cleaning, carpet cleaning, car cleaning kigali';
  }, [title, description, keywords]);

  return null;
}

export default SEO;
