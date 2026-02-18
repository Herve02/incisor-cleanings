import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { blogPosts } from '../data/blogData';

function BlogList() {
  return (
    <>
      <SEO
        title="Cleaning Tips & Advice Blog | Incisor Cleaning Services"
        description="Expert cleaning tips, guides, and advice for homes in kigali, Rwanda. Learn how to maintain cleanliness, prevent mold, and keep your space spotless."
        keywords="cleaning tips kigali, home maintenance Rwanda, cleaning advice, hygiene tips, mold prevention kigali"
      />

      <div style={styles.page}>
        <section style={styles.header}>
          <div style={styles.container}>
            <h1 style={styles.pageTitle}>Cleaning Tips & Insights</h1>
            <p style={styles.pageSubtitle}>
              Expert advice for maintaining a clean and healthy home in kigali
            </p>
          </div>
        </section>

        <section style={styles.blog}>
          <div style={styles.container}>
            <div style={styles.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} style={styles.blogCard}>
                  <Link to={`/blog/${post.id}`} style={styles.blogImageLink}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={styles.blogImage}
                    />
                  </Link>
                  <div style={styles.blogContent}>
                    <span style={styles.blogCategory}>{post.category}</span>
                    <span style={styles.blogDate}>{post.date}</span>
                    <Link to={`/blog/${post.id}`} style={styles.blogTitleLink}>
                      <h2 style={styles.blogTitle}>{post.title}</h2>
                    </Link>
                    <p style={styles.blogExcerpt}>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} style={styles.readMore}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Need Professional Cleaning Help?</h2>
            <p style={styles.ctaText}>
              Get expert cleaning services from Incisor Cleaning Services
            </p>
            <WhatsAppButton
              text="Get Free Quote"
              style={styles.primaryButton}
            />
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.notFound}>Post not found</h1>
          <Link to="/blog" style={styles.backLink}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Incisor Cleaning Services Blog`}
        description={post.excerpt}
        keywords={`${post.category}, cleaning tips kigali, ${post.title}`}
      />

      <div style={styles.page}>
        <article style={styles.postContainer}>
          <div style={styles.container}>
            <Link to="/blog" style={styles.backLink}>← Back to Blog</Link>

            <header style={styles.postHeader}>
              <span style={styles.blogCategory}>{post.category}</span>
              <h1 style={styles.postTitle}>{post.title}</h1>
              <p style={styles.postDate}>{post.date}</p>
            </header>

            <div style={styles.postImageContainer}>
              <img
                src={post.image}
                alt={post.title}
                style={styles.postImage}
              />
            </div>

            <div
              style={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div style={styles.postFooter}>
              <WhatsAppButton
                pageUrl={`${window.location.origin}/blog/${post.id}`}
                text="Get Cleaning Service Quote"
                style={styles.ctaButton}
              />
            </div>
          </div>
        </article>

        <section style={styles.relatedPosts}>
          <div style={styles.container}>
            <h2 style={styles.relatedTitle}>More Cleaning Tips</h2>
            <div style={styles.relatedGrid}>
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    style={styles.relatedCard}
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      style={styles.relatedImage}
                    />
                    <div style={styles.relatedContent}>
                      <h3 style={styles.relatedCardTitle}>{relatedPost.title}</h3>
                      <p style={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <WhatsAppButton fixed={true} />
      </div>
    </>
  );
}

function Blog() {
  const { id } = useParams();
  return id ? <BlogPost /> : <BlogList />;
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
  blog: {
    padding: '4rem 1.5rem',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
  },
  blogCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  blogImageLink: {
    display: 'block',
    width: '100%',
    height: '250px',
  },
  blogImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  blogContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flex: 1,
  },
  blogCategory: {
    display: 'inline-block',
    backgroundColor: '#FF6600',
    color: '#ffffff',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 600,
    alignSelf: 'flex-start',
  },
  blogDate: {
    fontSize: '0.875rem',
    color: '#999',
  },
  blogTitleLink: {
    textDecoration: 'none',
  },
  blogTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    lineHeight: '1.3',
    margin: 0,
  },
  blogExcerpt: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    flex: 1,
  },
  readMore: {
    color: '#00AA55',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
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
    backgroundColor: '#ffffff',
    color: '#FF6600',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  },
  postContainer: {
    padding: '3rem 1.5rem',
  },
  backLink: {
    display: 'inline-block',
    color: '#00AA55',
    textDecoration: 'none',
    fontWeight: 600,
    marginBottom: '2rem',
    fontSize: '1rem',
  },
  postHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  postTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    lineHeight: '1.2',
  },
  postDate: {
    fontSize: '1rem',
    color: '#999',
  },
  postImageContainer: {
    width: '100%',
    maxWidth: '800px',
    height: '400px',
    margin: '0 auto 2rem',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  postContent: {
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#333',
  },
  postFooter: {
    maxWidth: '800px',
    margin: '3rem auto 0',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#00AA55',
    color: '#ffffff',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
  },
  relatedPosts: {
    padding: '4rem 1.5rem',
    backgroundColor: '#f9f9f9',
  },
  relatedTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  relatedCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    transition: 'transform 0.3s',
  },
  relatedImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  relatedContent: {
    padding: '1.5rem',
  },
  relatedCardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
  },
  relatedExcerpt: {
    fontSize: '0.875rem',
    color: '#666',
    lineHeight: '1.6',
  },
  notFound: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '4rem 0',
  },
};

const mediaQueries = `
  @media (max-width: 768px) {
    .pageTitle, .postTitle {
      font-size: 2rem !important;
    }
    .ctaTitle {
      font-size: 2rem !important;
    }
    .blogGrid {
      grid-template-columns: 1fr !important;
    }
  }
  .blogCard:hover, .relatedCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
  .postContent h2 {
    font-size: 1.75rem;
    font-weight: bold;
    color: #800080;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .postContent h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .postContent p {
    margin-bottom: 1rem;
  }
  .postContent ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  .postContent li {
    margin-bottom: 0.5rem;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = mediaQueries;
if (!document.querySelector('style[data-blog-styles]')) {
  styleSheet.setAttribute('data-blog-styles', 'true');
  document.head.appendChild(styleSheet);
}

export default Blog;
