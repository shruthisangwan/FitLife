import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Filter, Heart, Eye } from 'lucide-react';
import './ShopPage.css';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const categories = ['All', 'Supplements', 'Apparel', 'Equipment', 'Accessories', 'Courses'];

  const products = [
  

  {
    name: 'FitLife Whey Protein (2kg)',
    category: 'Supplements',
    price: 49.99,
    originalPrice: 64.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://img2.hkrtcdn.com/37800/prd_3779981-MuscleBlaze-Whey-Gold-100-Whey-Protein-Isolate-4.4-lb-Rich-Milk-Chocolate_o.jpg',
    badge: 'Bestseller',
    inStock: true
  },
  
  {
    name: 'Protein bars (Box of 12)',
    category: 'Supplements',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 145,
    image: 'https://m.media-amazon.com/images/I/618ReTqzmPL.jpg',
    badge: 'Sale',
    inStock: true
  },
  {
    name: 'FitLife Performance T-Shirt',
    category: 'Apparel',
    price: 34.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    image: 'https://m.media-amazon.com/images/I/71A8ynpYeoL._SX679_.jpg',
    badge: 'New',
    inStock: true
  },
  {
    name: 'Compression Leggings',
    category: 'Apparel',
    price: 44.99,
    originalPrice: 54.99,
    rating: 4.8,
    reviews: 267,
    image: 'https://cdn.shopify.com/s/files/1/0568/3996/2795/files/129879-981_2000x1667_15c6a50f-d8f1-43f6-90c3-e5934315294d_480x480.jpg?v=1704315861',
    badge: null,
    inStock: true
  },
  {
    name: 'Training Hoodie',
    category: 'Apparel',
    price: 59.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: 'https://therugbyshop.co.uk/wp-content/uploads/2023/07/Screen-Shot-2023-07-12-at-11.48.15.png',
    badge: null,
    inStock: true
  },
  {
    name: 'Adjustable Dumbbells Set',
    category: 'Equipment',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 89,
    image: 'https://corehomefitness.com/cdn/shop/files/twist_and_lock_dumbbells_2024-449694.png?v=1723835854&width=1445',
    badge: 'Popular',
    inStock: true
  },
  {
    name: 'Resistance Bands (Set of 5)',
    category: 'Equipment',
    price: 24.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 456,
    image: 'https://wearbands.com/cdn/shop/files/BandsFullSet_2048x2048.jpg?v=1725566782',
    badge: 'Bestseller',
    inStock: true
  },
  {
    name: 'Yoga Mat Premium',
    category: 'Equipment',
    price: 39.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 334,
    image: 'https://www.cockatooindia.com/cdn/shop/files/615SO3eSEDL._SL1400.jpg?v=1737374340&width=1400',
    badge: null,
    inStock: true
  },
  {
    name: 'Smart Fitness Watch',
    category: 'Accessories',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 178,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/watch_1_278b37b1-e509-49af-9467-3549ef693328.png?v=1767009643&width=400',
    badge: 'Sale',
    inStock: true
  },
  {
    name: 'Gym Bag (Duffle)',
    category: 'Accessories',
    price: 49.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 122,
    image: 'https://hackathletics.com/cdn/shop/files/Artboard1_2000x.jpg?v=1745997613',
    badge: null,
    inStock: true
  },
  {
    name: 'Shaker Bottle',
    category: 'Accessories',
    price: 14.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 567,
    image: 'https://nutrija.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/steel-pro-shaker.jpg',
    badge: null,
    inStock: true
  },
  
  {
    name: 'Nutrition Masterclass',
    category: 'Courses',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 345,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4KIy2uyKGm8I85d5MFOoiwjUKRGfj77vhg&s',
    badge: null,
    inStock: true
  },
  {
    name: 'Yoga for Beginners (Online)',
    category: 'Courses',
    price: 39.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 289,
    image: 'https://i.ytimg.com/vi/j7rKKpwdXNE/maxresdefault.jpg',
    badge: 'New',
    inStock: true
  },
  
];;

  const addToCart = (product) => {
    setCart([...cart, product]);
    setToast(`${product.name} added to cart!`);
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><ShoppingBag size={14} /> Shop</div>
            <h1 className="page-hero-title">FITNESS <span>SHOP</span></h1>
            <p className="page-hero-desc">
              Premium supplements, apparel, equipment, and online courses. Everything you need for your fitness journey.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          {/* Cart indicator */}
          {cart.length > 0 && (
            <div className="cart-indicator">
              <ShoppingBag size={18} />
              <span>{cart.length} items in cart — Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
              <Link to="/join" className="btn btn-primary btn-sm">Checkout</Link>
            </div>
          )}

          {/* Filters */}
          <div className="classes-filter">
            <Filter size={18} />
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="results-count">{filtered.length} products found</p>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image" style={{ backgroundImage: `url('${product.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  {!product.image && <span className="product-emoji">{product.emoji}</span>}
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <div className="product-actions">
                    <button className="product-action-btn" aria-label="Wishlist"><Heart size={16} /></button>
                    <button className="product-action-btn" aria-label="Quick view"><Eye size={16} /></button>
                  </div>
                </div>
                <div className="product-body">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <div className="stars-mini">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={12} fill={si < Math.floor(product.rating) ? '#ffd166' : 'transparent'} color="#ffd166" />
                      ))}
                    </div>
                    <span>{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default ShopPage;