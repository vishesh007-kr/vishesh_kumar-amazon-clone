import './App.css';

const categories = [
  'All',
  'Best Sellers',
  'Amazon Basics',
  'Customer Service',
  'Prime',
  'New Releases',
  'Books',
  'Fashion',
  'Electronics',
  'Home',
];

const products = [
  {
    name: 'Wireless Noise-Canceling Headphones',
    price: '₹8,999',
    tag: 'Top rated',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Smart Fitness Watch',
    price: '₹5,999',
    tag: 'Limited deal',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Minimalist Desk Lamp',
    price: '₹2,499',
    tag: 'Home update',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Travel Backpack',
    price: '₹4,299',
    tag: 'Popular',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ultra HD Smart TV',
    price: '₹24,999',
    tag: 'Trending now',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Portable Blender',
    price: '₹1,899',
    tag: 'Kitchen pick',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Gaming Mechanical Keyboard',
    price: '₹3,499',
    tag: 'Hot deal',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Leather Office Chair',
    price: '₹7,799',
    tag: 'Best seller',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="brand">amazon</div>
          <div className="location">📍 Deliver to India</div>
          <div className="search-bar">
            <select>
              <option>All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <button>🔎</button>
          </div>
          <div className="header-actions">
            <span>EN</span>
            <span>Sign in</span>
            <span>Returns & Orders</span>
            <span>🛒 Cart (0)</span>
          </div>
        </div>
        <nav className="header-nav">
          {categories.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <p className="eyebrow">Amazon Essentials</p>
            <h1>Refresh your space</h1>
            <p>
              Find the perfect home, tech, and lifestyle picks for every room.
            </p>
            <button>Shop now</button>
          </div>
          <div className="hero-card">
            <p>Today's deal</p>
            <h3>Up to 40% off</h3>
            <span>on home & kitchen</span>
          </div>
        </section>

        <section className="quick-links">
          <div>Best Sellers</div>
          <div>New Releases</div>
          <div>Gift Ideas</div>
          <div>Prime Day</div>
        </section>

        <section className="product-section">
          <div className="section-header">
            <h2>Popular picks</h2>
            <a href="/">See more</a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <img src={product.image} alt={product.name} />
                <div className="product-body">
                  <span className="tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <div className="rating">
                    {'★'.repeat(product.rating)}
                    {'☆'.repeat(5 - product.rating)}
                  </div>
                  <p className="price">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="deal-banner">
          <div>
            <p>Save on daily essentials</p>
            <h2>Up to 50% off select items</h2>
          </div>
          <button>Explore deals</button>
        </section>
      </main>
    </div>
  );
}

export default App;
