import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Award, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './PricingPage.css';

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    { name: 'Basic', monthlyPrice: 1999, annualPrice: 1699, tagline: 'Perfect for beginners', features: { 'Gym floor access': true, 'Basic equipment': true, 'Locker room': true, '2 group classes/week': true, 'Fitness assessment (yearly)': true, 'Mobile app access': true, 'Personal trainer sessions': false, 'Nutrition consultation': false, 'Sauna & steam room': false, 'Guest passes': false, '24/7 trainer support': false, 'Recovery & spa': false }, popular: false },
    { name: 'Premium', monthlyPrice: 3999, annualPrice: 3299, tagline: 'Most popular choice', features: { 'Gym floor access': true, 'Basic equipment': true, 'Locker room': true, '2 group classes/week': true, 'Fitness assessment (yearly)': true, 'Mobile app access': true, 'Personal trainer sessions': true, 'Nutrition consultation': true, 'Sauna & steam room': true, 'Guest passes': true, '24/7 trainer support': false, 'Recovery & spa': false }, popular: true },
    { name: 'Elite', monthlyPrice: 6999, annualPrice: 5999, tagline: 'For serious athletes', features: { 'Gym floor access': true, 'Basic equipment': true, 'Locker room': true, '2 group classes/week': true, 'Fitness assessment (yearly)': true, 'Mobile app access': true, 'Personal trainer sessions': true, 'Nutrition consultation': true, 'Sauna & steam room': true, 'Guest passes': true, '24/7 trainer support': true, 'Recovery & spa': true }, popular: false },
    { name: 'Corporate', monthlyPrice: 2999, annualPrice: 2499, tagline: 'Per employee, min 10', features: { 'Gym floor access': true, 'Basic equipment': true, 'Locker room': true, '2 group classes/week': true, 'Fitness assessment (yearly)': true, 'Mobile app access': true, 'Personal trainer sessions': true, 'Nutrition consultation': true, 'Sauna & steam room': true, 'Guest passes': true, '24/7 trainer support': false, 'Recovery & spa': false }, popular: false },
  ];

  const addons = [
    { name: 'Extra Personal Training Session', price: '₹2,500/session' },
    { name: 'Nutrition Meal Plan (Monthly)', price: '₹2,499/month' },
    { name: 'Towel Service', price: '₹499/month' },
    { name: 'Premium Locker Rental', price: '₹999/month' },
    { name: 'Child Care Service', price: '₹1,499/month' },
    { name: 'Parking Pass', price: '₹1,999/month' },
  ];

  const faqs = [
    { q: 'Can I cancel my membership anytime?', a: 'Yes! All our monthly plans are commitment-free. You can cancel anytime with no cancellation fees. Annual plans can be cancelled with 30 days notice and a pro-rated refund.' },
    { q: 'Is there a joining fee?', a: 'We charge a one-time ₹2,999 enrollment fee which covers your fitness assessment, gym orientation, and membership card. This fee is often waived during promotions.' },
    { q: 'Can I freeze my membership?', a: 'Absolutely. You can freeze your membership for up to 3 months per year at no extra cost. Just notify us 7 days in advance.' },
    { q: 'Do you offer student/military discounts?', a: 'Yes! We offer 15% off all plans for students, armed forces personnel, and healthcare workers with valid ID.' },
    { q: 'Can I try before I buy?', a: 'We offer a free 7-day trial for all new members. No credit card required. Just bring your ID and you\'re ready to train!' },
    { q: 'What\'s included in the personal training sessions?', a: 'Each PT session is 60 minutes with a certified trainer. Includes program design, form coaching, and progress tracking. Premium gets 2 sessions/month, Elite gets unlimited.' },
    { q: 'Can I upgrade/downgrade my plan?', a: 'Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.' },
  ];

  const featureKeys = Object.keys(plans[0].features);

  return (
    <div className="pricing-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag"><Award size={14} /> Pricing</div>
            <h1 className="page-hero-title">MEMBERSHIP <span>PLANS</span></h1>
            <p className="page-hero-desc">
              Transparent pricing with no hidden fees. Choose the plan that fits your goals and budget.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-plans-section">
        <div className="container">
          {/* Toggle */}
          <div className="pricing-toggle">
            <span className={!annual ? 'active' : ''}>Monthly</span>
            <button className={`toggle-switch ${annual ? 'on' : ''}`} onClick={() => setAnnual(!annual)}>
              <div className="toggle-knob"></div>
            </button>
            <span className={annual ? 'active' : ''}>
              Annual <em className="save-badge">Save 20%</em>
            </span>
          </div>

          {/* Cards */}
          <div className="pricing-cards-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`pricing-plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="period">/month</span>
                </div>
                {annual && (
                  <p className="annual-note">
                    Billed ₹{(annual ? plan.annualPrice : plan.monthlyPrice) * 12}/year
                  </p>
                )}
                <ul className="plan-features">
                  {Object.entries(plan.features).map(([feat, included], fi) => (
                    <li key={fi} className={included ? '' : 'disabled'}>
                      {included ? <CheckCircle size={16} /> : <X size={16} />}
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/join"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="comparison-section">
            <h3 className="comparison-title">Full Feature Comparison</h3>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    {plans.map((p, i) => <th key={i}>{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Price (Monthly)</strong></td>
                    {plans.map((p, i) => <td key={i}><strong>₹{p.monthlyPrice}</strong></td>)}
                  </tr>
                  <tr>
                    <td><strong>Price (Annual)</strong></td>
                    {plans.map((p, i) => <td key={i}><strong>₹{p.annualPrice}</strong></td>)}
                  </tr>
                  {featureKeys.map((feat, fi) => (
                    <tr key={fi}>
                      <td>{feat}</td>
                      {plans.map((p, pi) => (
                        <td key={pi}>
                          {p.features[feat] ?
                            <CheckCircle size={16} style={{ color: 'var(--success)' }} /> :
                            <X size={16} style={{ color: 'var(--text-muted)' }} />
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section addons-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OPTIONAL <span>ADD-ONS</span></h2>
            <p className="section-subtitle">Enhance your membership with these additional services.</p>
          </div>
          <div className="addons-grid">
            {addons.map((addon, i) => (
              <div key={i} className="addon-card">
                <span className="addon-name">{addon.name}</span>
                <span className="addon-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag"><HelpCircle size={14} /> FAQ</div>
            <h2 className="section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && <div className="faq-answer"><p>{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;