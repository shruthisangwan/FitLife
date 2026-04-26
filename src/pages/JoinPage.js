import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserPlus, CheckCircle, CreditCard, Shield, ArrowRight,
  ArrowLeft, User, MapPin, Lock
} from 'lucide-react';
import './JoinPage.css';

const JoinPage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    plan: 'premium',
    billing: 'monthly',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    agreeTerms: false,
    agreeWaiver: false,
    newsletter: true
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (s) => {
    const errs = {};
    if (s === 1) {
      if (!formData.firstName.trim()) errs.firstName = 'First name is required';
      if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
      if (!formData.email.trim()) errs.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email address';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
      if (!formData.dob) errs.dob = 'Date of birth is required';
      if (!formData.gender) errs.gender = 'Please select gender';
    }
    if (s === 2) {
      if (!formData.address.trim()) errs.address = 'Address is required';
      if (!formData.city.trim()) errs.city = 'City is required';
      if (!formData.state.trim()) errs.state = 'State is required';
      if (!formData.zip.trim()) errs.zip = 'ZIP code is required';
      if (!formData.emergencyName.trim()) errs.emergencyName = 'Emergency contact name is required';
      if (!formData.emergencyPhone.trim()) errs.emergencyPhone = 'Emergency contact phone is required';
    }
    if (s === 4) {
      if (!formData.cardName.trim()) errs.cardName = 'Cardholder name is required';
      if (!formData.cardNumber.trim()) errs.cardNumber = 'Card number is required';
      if (!formData.expiry.trim()) errs.expiry = 'Expiry date is required';
      if (!formData.cvv.trim()) errs.cvv = 'CVV is required';
      if (!formData.agreeTerms) errs.agreeTerms = 'You must agree to terms';
      if (!formData.agreeWaiver) errs.agreeWaiver = 'You must sign the waiver';
    }
    return errs;
  };

  const nextStep = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setErrors({});
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateStep(4);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const plans = {
    basic: { name: 'Basic', monthly: 29, annual: 24 },
    premium: { name: 'Premium', monthly: 59, annual: 49 },
    elite: { name: 'Elite', monthly: 99, annual: 79 }
  };

  const selectedPlan = plans[formData.plan];
  const price =
    formData.billing === 'monthly'
      ? selectedPlan.monthly
      : selectedPlan.annual;
  const total = formData.billing === 'annual' ? price * 12 : price;

  // ========== SUCCESS SCREEN ==========
  if (submitted) {
    return (
      <div className="join-page">
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <div className="section-tag">
                <CheckCircle size={14} /> Success
              </div>
              <h1 className="page-hero-title">
                WELCOME TO <span>FITLIFE</span>!
              </h1>
            </div>
          </div>
        </section>
        <section className="section success-section">
          <div className="container">
            <div className="success-card">
              <div className="success-icon">🎉</div>
              <h2>Congratulations, {formData.firstName}!</h2>
              <p>
                Your <strong>{selectedPlan.name}</strong> membership has been
                activated.
              </p>
              <div className="success-details">
                <div>
                  <strong>Member ID:</strong> FL-
                  {Math.floor(Math.random() * 900000 + 100000)}
                </div>
                <div>
                  <strong>Plan:</strong> {selectedPlan.name} ({formData.billing})
                </div>
                <div>
                  <strong>Amount:</strong> ${price}/month
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
              </div>
              <p className="success-note">
                A confirmation email has been sent to {formData.email} with your
                membership details, gym orientation schedule, and first fitness
                assessment booking link.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Link to="/" className="btn btn-primary">
                  Go to Homepage
                </Link>
                <Link to="/classes" className="btn btn-outline">
                  Browse Classes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ========== MAIN FORM ==========
  return (
    <div className="join-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-tag">
              <UserPlus size={14} /> Join Now
            </div>
            <h1 className="page-hero-title">
              START YOUR <span>JOURNEY</span>
            </h1>
            <p className="page-hero-desc">
              Complete your registration in 4 simple steps. Start transforming
              your life today.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Join</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section join-form-section">
        <div className="container">
          {/* Progress Steps */}
          <div className="progress-steps">
            {[
              'Personal Info',
              'Address & Emergency',
              'Choose Plan',
              'Payment'
            ].map((label, i) => (
              <div
                key={i}
                className={`progress-step ${step > i + 1 ? 'completed' : ''} ${
                  step === i + 1 ? 'active' : ''
                }`}
              >
                <div className="step-circle">
                  {step > i + 1 ? <CheckCircle size={18} /> : i + 1}
                </div>
                <span className="step-label">{label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* ===== STEP 1: Personal Info ===== */}
            {step === 1 && (
              <div className="form-step animate-fadeInUp">
                <h2 className="step-title">
                  <User size={22} /> Personal Information
                </h2>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <span className="form-error">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <span className="form-error">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="form-error">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="form-error">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      className={`form-input ${errors.dob ? 'error' : ''}`}
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    {errors.dob && (
                      <span className="form-error">{errors.dob}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender *</label>
                    <select
                      name="gender"
                      className={`form-select ${errors.gender ? 'error' : ''}`}
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                    {errors.gender && (
                      <span className="form-error">{errors.gender}</span>
                    )}
                  </div>
                </div>

                <div className="form-nav">
                  <div></div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 2: Address & Emergency ===== */}
            {step === 2 && (
              <div className="form-step animate-fadeInUp">
                <h2 className="step-title">
                  <MapPin size={22} /> Address & Emergency Contact
                </h2>

                <div className="form-group">
                  <label className="form-label">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    className={`form-input ${errors.address ? 'error' : ''}`}
                    placeholder="123 Main Street, Apt 4B"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <span className="form-error">{errors.address}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      name="city"
                      className={`form-input ${errors.city ? 'error' : ''}`}
                      placeholder="Los Angeles"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <span className="form-error">{errors.city}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      name="state"
                      className={`form-input ${errors.state ? 'error' : ''}`}
                      placeholder="California"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <span className="form-error">{errors.state}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">ZIP Code *</label>
                    <input
                      type="text"
                      name="zip"
                      className={`form-input ${errors.zip ? 'error' : ''}`}
                      placeholder="90001"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                    {errors.zip && (
                      <span className="form-error">{errors.zip}</span>
                    )}
                  </div>
                  <div></div>
                </div>

                <h3 className="sub-heading">Emergency Contact</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Contact Name *</label>
                    <input
                      type="text"
                      name="emergencyName"
                      className={`form-input ${errors.emergencyName ? 'error' : ''}`}
                      placeholder="Jane Doe"
                      value={formData.emergencyName}
                      onChange={handleChange}
                    />
                    {errors.emergencyName && (
                      <span className="form-error">{errors.emergencyName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Phone *</label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      className={`form-input ${errors.emergencyPhone ? 'error' : ''}`}
                      placeholder="+1 (555) 987-6543"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                    />
                    {errors.emergencyPhone && (
                      <span className="form-error">{errors.emergencyPhone}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Relationship</label>
                  <select
                    name="emergencyRelation"
                    className="form-select"
                    value={formData.emergencyRelation}
                    onChange={handleChange}
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-nav">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    <ArrowLeft size={16} /> Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 3: Choose Plan ===== */}
            {step === 3 && (
              <div className="form-step animate-fadeInUp">
                <h2 className="step-title">
                  <CreditCard size={22} /> Choose Your Plan
                </h2>

                {/* Billing Toggle */}
                <div className="billing-toggle">
                  <button
                    type="button"
                    className={`billing-btn ${formData.billing === 'monthly' ? 'active' : ''}`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, billing: 'monthly' }))
                    }
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`billing-btn ${formData.billing === 'annual' ? 'active' : ''}`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, billing: 'annual' }))
                    }
                  >
                    Annual (Save 20%)
                  </button>
                </div>

                {/* Plan Selection */}
                <div className="plan-selection-grid">
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`plan-select-card ${formData.plan === key ? 'selected' : ''}`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, plan: key }))
                      }
                    >
                      {key === 'premium' && (
                        <span className="plan-recommended">Recommended</span>
                      )}
                      <div className="plan-select-radio">
                        <div
                          className={`radio-dot ${formData.plan === key ? 'active' : ''}`}
                        ></div>
                      </div>
                      <h3>{plan.name}</h3>
                      <div className="plan-select-price">
                        <span className="plan-amount">
                          $
                          {formData.billing === 'monthly'
                            ? plan.monthly
                            : plan.annual}
                        </span>
                        <span className="plan-period">/month</span>
                      </div>
                      {formData.billing === 'annual' && (
                        <p className="plan-annual-total">
                          Billed $
                          {formData.billing === 'annual'
                            ? plan.annual * 12
                            : plan.monthly * 12}
                          /year
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-row">
                    <span>{selectedPlan.name} Plan</span>
                    <span>${price}/mo</span>
                  </div>
                  <div className="summary-row">
                    <span>Billing</span>
                    <span>
                      {formData.billing === 'monthly'
                        ? 'Monthly'
                        : 'Annual'}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span>Enrollment Fee</span>
                    <span>$49.00</span>
                  </div>
                  {formData.billing === 'annual' && (
                    <div className="summary-row savings">
                      <span>Annual Savings</span>
                      <span>
                        -$
                        {(selectedPlan.monthly - selectedPlan.annual) * 12}
                      </span>
                    </div>
                  )}
                  <div className="summary-row total">
                    <span>Due Today</span>
                    <span>
                      $
                      {formData.billing === 'annual'
                        ? total + 49
                        : price + 49}
                      .00
                    </span>
                  </div>
                </div>

                <div className="form-nav">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    <ArrowLeft size={16} /> Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 4: Payment ===== */}
            {step === 4 && (
              <div className="form-step animate-fadeInUp">
                <h2 className="step-title">
                  <Lock size={22} /> Payment Details
                </h2>

                <div className="secure-badge">
                  <Shield size={16} />
                  <span>
                    256-bit SSL Encrypted — Your payment information is secure
                  </span>
                </div>

                <div className="form-group">
                  <label className="form-label">Cardholder Name *</label>
                  <input
                    type="text"
                    name="cardName"
                    className={`form-input ${errors.cardName ? 'error' : ''}`}
                    placeholder="John Doe"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                  {errors.cardName && (
                    <span className="form-error">{errors.cardName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Card Number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    className={`form-input ${errors.cardNumber ? 'error' : ''}`}
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    maxLength="19"
                  />
                  {errors.cardNumber && (
                    <span className="form-error">{errors.cardNumber}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date *</label>
                    <input
                      type="text"
                      name="expiry"
                      className={`form-input ${errors.expiry ? 'error' : ''}`}
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      maxLength="5"
                    />
                    {errors.expiry && (
                      <span className="form-error">{errors.expiry}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV *</label>
                    <input
                      type="text"
                      name="cvv"
                      className={`form-input ${errors.cvv ? 'error' : ''}`}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      maxLength="4"
                    />
                    {errors.cvv && (
                      <span className="form-error">{errors.cvv}</span>
                    )}
                  </div>
                </div>

                {/* Final Summary */}
                <div className="order-summary">
                  <h3>Final Summary</h3>
                  <div className="summary-row">
                    <span>
                      {selectedPlan.name} Plan ({formData.billing})
                    </span>
                    <span>${price}/mo</span>
                  </div>
                  <div className="summary-row">
                    <span>Enrollment Fee (one-time)</span>
                    <span>$49.00</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Due Today</span>
                    <span>
                      $
                      {formData.billing === 'annual'
                        ? total + 49
                        : price + 49}
                      .00
                    </span>
                  </div>
                </div>

                {/* Agreements */}
                <div className="form-group">
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      className="form-checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      id="agree-terms"
                    />
                    <label
                      htmlFor="agree-terms"
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      I agree to the{' '}
                      <a
                        href="#terms"
                        style={{ color: 'var(--primary)' }}
                      >
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a
                        href="#privacy"
                        style={{ color: 'var(--primary)' }}
                      >
                        Privacy Policy
                      </a>{' '}
                      *
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <span className="form-error">{errors.agreeTerms}</span>
                  )}
                </div>

                <div className="form-group">
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      name="agreeWaiver"
                      className="form-checkbox"
                      checked={formData.agreeWaiver}
                      onChange={handleChange}
                      id="agree-waiver"
                    />
                    <label
                      htmlFor="agree-waiver"
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      I acknowledge and sign the{' '}
                      <a
                        href="#waiver"
                        style={{ color: 'var(--primary)' }}
                      >
                        Liability Waiver
                      </a>{' '}
                      *
                    </label>
                  </div>
                  {errors.agreeWaiver && (
                    <span className="form-error">{errors.agreeWaiver}</span>
                  )}
                </div>

                <div className="form-group">
                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      name="newsletter"
                      className="form-checkbox"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      id="agree-newsletter"
                    />
                    <label
                      htmlFor="agree-newsletter"
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      Subscribe to newsletter for fitness tips & exclusive offers
                    </label>
                  </div>
                </div>

                <div className="form-nav">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={prevStep}
                  >
                    <ArrowLeft size={16} /> Previous
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <Lock size={16} /> Complete Registration — $
                    {formData.billing === 'annual'
                      ? total + 49
                      : price + 49}
                    .00
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
