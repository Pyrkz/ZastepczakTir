'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';
import { ReCaptchaProvider, useReCaptcha } from 'next-recaptcha-v3';

// Stałe kolorów - zachowane bez zmian
const COLORS = {
  primary: '#A4833B',
  text: '#171717',
  textSecondary: '#6b7280',
  success: '#10b981',
  background: '#fefdf8',
  border: '#e5e7eb',
  error: '#ef4444'
} as const;

// Lista ubezpieczycieli - posortowana alfabetycznie
const INSURERS = [
  'Allianz', 'Beesafe', 'Benefia', 'Compensa', 'Ergo Hestia',
  'Euroins', 'Europa', 'Generali', 'Gothaer', 'HDI', 'InteRisk',
  'Link4', 'PZU', 'Trasti', 'TUW', 'TUZ', 'Uniqa', 'Warta', 'Wefox', 'Wiener', 'Inne'
] as const;

// Typy dla formularza
interface FormData {
  vehicleBrand: string;
  registrationNumber: string;
  insurer: string;
  name: string;
  postalCode: string;
  location: string;
  phone: string;
  email: string;
  privacyPolicy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// Komponent formularza z reCAPTCHA
function PhoneContactFormInner() {
  const { executeRecaptcha } = useReCaptcha();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    vehicleBrand: '',
    registrationNumber: '',
    insurer: '',
    name: '',
    postalCode: '',
    location: '',
    phone: '',
    email: '',
    privacyPolicy: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  // Walidacja kroków
  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.vehicleBrand.trim()) {
      newErrors.vehicleBrand = 'Marka i model pojazdu jest wymagana';
    } else if (formData.vehicleBrand.trim().length < 2) {
      newErrors.vehicleBrand = 'Marka pojazdu jest za krótka';
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Numer rejestracyjny jest wymagany';
    } else if (!/^[A-Z0-9\s-]{4,10}$/i.test(formData.registrationNumber.trim())) {
      newErrors.registrationNumber = 'Nieprawidłowy format numeru rejestracyjnego';
    }

    if (!formData.insurer) {
      newErrors.insurer = 'Wybierz towarzystwo ubezpieczeniowe';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Imię i nazwisko jest za krótkie';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Miejscowość jest wymagana';
    } else if (formData.location.trim().length < 2) {
      newErrors.location = 'Nazwa miejscowości jest za krótka';
    }

    if (formData.postalCode.trim() && !/^\d{2}-?\d{3}$/.test(formData.postalCode.trim())) {
      newErrors.postalCode = 'Nieprawidłowy format kodu pocztowego (np. 00-000)';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany';
    } else {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (!/^(\+48)?[4-9]\d{8}$/.test(cleanPhone) && cleanPhone.length !== 9) {
        newErrors.phone = 'Nieprawidłowy numer telefonu (9 cyfr)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Adres email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy adres email';
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'Musisz zaakceptować politykę prywatności';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Walidacja w czasie rzeczywistym
  const validateField = (name: string, value: string | boolean) => {
    if (!touchedFields.has(name)) return;

    const newErrors = { ...errors };
    delete newErrors[name];

    switch (name) {
      case 'vehicleBrand':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          newErrors[name] = 'Marka i model pojazdu jest wymagana';
        }
        break;
      case 'registrationNumber':
        if (!value) {
          newErrors[name] = 'Numer rejestracyjny jest wymagany';
        } else if (typeof value === 'string' && !/^[A-Z0-9\s-]{4,10}$/i.test(value.trim())) {
          newErrors[name] = 'Nieprawidłowy format numeru rejestracyjnego';
        }
        break;
      case 'name':
        if (!value || (typeof value === 'string' && value.trim().length < 3)) {
          newErrors[name] = 'Imię i nazwisko jest wymagane';
        }
        break;
      case 'phone':
        if (!value) {
          newErrors[name] = 'Numer telefonu jest wymagany';
        } else if (typeof value === 'string') {
          const cleanPhone = value.replace(/[\s-]/g, '');
          if (!/^(\+48)?[4-9]\d{8}$/.test(cleanPhone) && cleanPhone.length !== 9) {
            newErrors[name] = 'Nieprawidłowy numer telefonu (9 cyfr)';
          }
        }
        break;
      case 'email':
        if (!value) {
          newErrors[name] = 'Adres email jest wymagany';
        } else if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = 'Nieprawidłowy adres email';
        }
        break;
      case 'postalCode':
        if (value && typeof value === 'string' && !/^\d{2}-?\d{3}$/.test(value.trim())) {
          newErrors[name] = 'Nieprawidłowy format kodu pocztowego';
        }
        break;
    }

    setErrors(newErrors);
  };

  // Obsługa przejścia do następnego kroku
  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      const formContainer = document.querySelector('.form-container');
      if (formContainer) {
        formContainer.scrollTop = 0;
      }
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
    setErrors({});
  };

  // Obsługa wysyłania formularza z reCAPTCHA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsSubmitting(true);

    try {
      let recaptchaToken = '';
      
      // Wykonaj reCAPTCHA tylko jeśli jest skonfigurowana
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        recaptchaToken = await executeRecaptcha('submit_form');
      } else {
        console.warn('reCAPTCHA nie jest skonfigurowana - pomijam weryfikację');
      }
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          vehicleBrand: '',
          registrationNumber: '',
          insurer: '',
          name: '',
          postalCode: '',
          location: '',
          phone: '',
          email: '',
          privacyPolicy: false
        });
        setCurrentStep(1);
        setTouchedFields(new Set());
      } else {
        throw new Error(result.error || 'Błąd wysyłania formularza');
      }
    } catch (error) {
      console.error('Błąd:', error);
      setErrors({ 
        submit: error instanceof Error 
          ? error.message 
          : 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obsługa zmian w formularzu
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: newValue
    }));
    
    setTouchedFields(prev => new Set([...prev, name]));
    validateField(name, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouchedFields(prev => new Set([...prev, name]));
    validateField(name, formData[name as keyof FormData]);
  };

  // Formatowanie numeru telefonu w czasie rzeczywistym
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      vehicleBrand: '',
      registrationNumber: '',
      insurer: '',
      name: '',
      postalCode: '',
      location: '',
      phone: '',
      email: '',
      privacyPolicy: false
    });
    setCurrentStep(1);
    setErrors({});
    setTouchedFields(new Set());
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto sm:max-w-[600px] md:max-w-[600px] lg:max-w-[480px]">
      {/* Phone Mockup Container */}
      <div className="relative w-full">
        <Image
          src="/Resources/Phone-mockup-min.webp"
          alt="Formularz kontaktowy na telefonie"
          width={400}
          height={800}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
        
        {/* Form Overlay */}
        <div className="form-container absolute top-[3.8%] left-[7%] right-[7%] bottom-[4.5%] bg-gradient-to-b from-white to-gray-50 rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 md:p-5 lg:p-6 shadow-inner overflow-y-auto border border-gray-100">
          {isSuccess ? (
            // Success State
            <motion.div 
              className="flex flex-col items-center justify-center h-full text-center px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                style={{ backgroundColor: COLORS.success }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <motion.svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3" 
                style={{ color: COLORS.text }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Dziękujemy!
              </motion.h3>
              <motion.p 
                className="text-sm mb-6 leading-relaxed" 
                style={{ color: COLORS.textSecondary }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Twoje zgłoszenie zostało wysłane.<br />
                Skontaktujemy się z Tobą w ciągu 24 godzin.
              </motion.p>
              <motion.button
                onClick={resetForm}
                className="px-8 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: COLORS.primary }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nowe zapytanie
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={currentStep === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNextStep(); }} className="h-full flex flex-col">
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6 pt-1 sm:pt-2">
                <h2 className="text-base sm:text-lg font-bold mb-1" style={{ color: COLORS.text }}>
                  Zgłoś szkodę
                </h2>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  Szybko i bezpiecznie
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-bold" style={{ color: COLORS.primary }}>
                    Krok {currentStep} z 2
                  </span>
                  <span className="text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                    {currentStep === 1 ? 'Dane pojazdu' : 'Kontakt'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 shadow-inner">
                  <motion.div 
                    className="h-1.5 sm:h-2 rounded-full shadow-sm"
                    style={{ backgroundColor: COLORS.primary }}
                    initial={{ width: '50%' }}
                    animate={{ width: currentStep === 1 ? '50%' : '100%' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Błąd wysyłania */}
              {errors.submit && (
                <motion.div 
                  className="mb-4 p-4 rounded-xl border-l-4 bg-red-50 shadow-sm"
                  style={{ borderColor: COLORS.error }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <p className="text-sm" style={{ color: COLORS.error }}>
                    {errors.submit}
                  </p>
                </motion.div>
              )}

              {/* Formularz */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {currentStep === 1 ? (
                    // Krok 1 - Informacje o uszkodzonym pojeździe
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 sm:space-y-5"
                    >
                      <div className="text-sm sm:text-base font-bold mb-4 sm:mb-6" style={{ color: COLORS.text }}>
                        Informacje o uszkodzonym pojeździe
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: COLORS.text }}>
                          Marka i model pojazdu *
                        </label>
                        <input
                          type="text"
                          name="vehicleBrand"
                          placeholder="np. Toyota Corolla, BMW X3"
                          value={formData.vehicleBrand}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border-2 rounded-lg sm:rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                            errors.vehicleBrand 
                              ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                              : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.vehicleBrand && (
                            <motion.p 
                              className="text-red-500 text-xs mt-1 sm:mt-2 flex items-center gap-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.vehicleBrand}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: COLORS.text }}>
                          Numer rejestracyjny *
                        </label>
                        <input
                          type="text"
                          name="registrationNumber"
                          placeholder="np. ABC 1234"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border-2 rounded-lg sm:rounded-xl bg-white focus:outline-none transition-all duration-200 uppercase shadow-sm ${
                            errors.registrationNumber 
                              ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                              : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.registrationNumber && (
                            <motion.p 
                              className="text-red-500 text-xs mt-1 sm:mt-2 flex items-center gap-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.registrationNumber}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2" style={{ color: COLORS.text }}>
                          Towarzystwo ubezpieczeniowe sprawcy *
                        </label>
                        <select
                          name="insurer"
                          value={formData.insurer}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border-2 rounded-lg sm:rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                            errors.insurer 
                              ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                              : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                          }`}
                        >
                          <option value="">Wybierz ubezpieczyciela</option>
                          {INSURERS.map((insurer) => (
                            <option key={insurer} value={insurer}>
                              {insurer}
                            </option>
                          ))}
                        </select>
                        <AnimatePresence>
                          {errors.insurer && (
                            <motion.p 
                              className="text-red-500 text-xs mt-1 sm:mt-2 flex items-center gap-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.insurer}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ) : (
                    // Krok 2 - Dane kontaktowe
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="text-base font-bold mb-6" style={{ color: COLORS.text }}>
                        Dane kontaktowe
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.text }}>
                          Imię i nazwisko *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Jan Kowalski"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 text-sm border-2 rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                            errors.name 
                              ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                              : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p 
                              className="text-red-500 text-xs mt-2 flex items-center gap-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.text }}>
                            Kod pocztowy
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            placeholder="00-000"
                            value={formData.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 text-sm border-2 rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                              errors.postalCode 
                                ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                                : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                            }`}
                          />
                          <AnimatePresence>
                            {errors.postalCode && (
                              <motion.p 
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                {errors.postalCode}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.text }}>
                            Miejscowość *
                          </label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Warszawa"
                            value={formData.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 text-sm border-2 rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                              errors.location 
                                ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                                : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                            }`}
                          />
                          <AnimatePresence>
                            {errors.location && (
                              <motion.p 
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                {errors.location}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.text }}>
                          Telefon kontaktowy *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="123 456 789"
                          value={formData.phone}
                          onChange={(e) => {
                            const formatted = formatPhoneNumber(e.target.value);
                            setFormData(prev => ({ ...prev, phone: formatted }));
                            setTouchedFields(prev => new Set([...prev, 'phone']));
                            validateField('phone', formatted);
                          }}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 text-sm border-2 rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                           errors.phone 
                             ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                             : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                         }`}
                       />
                       <AnimatePresence>
                         {errors.phone && (
                           <motion.p 
                             className="text-red-500 text-xs mt-2 flex items-center gap-1"
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             exit={{ opacity: 0, height: 0 }}
                           >
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                             </svg>
                             {errors.phone}
                           </motion.p>
                         )}
                       </AnimatePresence>
                     </div>

                     <div>
                       <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.text }}>
                         Adres email *
                       </label>
                       <input
                         type="email"
                         name="email"
                         placeholder="jan.kowalski@email.com"
                         value={formData.email}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         className={`w-full px-4 py-3 text-sm border-2 rounded-xl bg-white focus:outline-none transition-all duration-200 shadow-sm ${
                           errors.email 
                             ? 'border-red-300 focus:border-red-400 bg-red-50 shadow-red-100' 
                             : 'border-gray-200 focus:border-amber-400 hover:border-gray-300 focus:shadow-amber-100'
                         }`}
                       />
                       <AnimatePresence>
                         {errors.email && (
                           <motion.p 
                             className="text-red-500 text-xs mt-2 flex items-center gap-1"
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             exit={{ opacity: 0, height: 0 }}
                           >
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                             </svg>
                             {errors.email}
                           </motion.p>
                         )}
                       </AnimatePresence>
                     </div>

                     {/* Privacy Policy */}
                      <div className="mt-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex-shrink-0 mt-1">
                          <input
                              type="checkbox"
                              name="privacyPolicy"
                              checked={formData.privacyPolicy}
                              onChange={handleChange}
                              className="sr-only"
                          />
                          <div 
                            className={`w-5 h-5 border-2 rounded-md transition-all duration-200 flex items-center justify-center shadow-sm ${
                              errors.privacyPolicy ? 'border-red-300 bg-red-50' : 'border-gray-300'
                            }`}
                            style={{
                              backgroundColor: formData.privacyPolicy ? COLORS.primary : undefined,
                              borderColor: formData.privacyPolicy ? COLORS.primary : undefined
                            }}
                          >
                              {formData.privacyPolicy && (
                              <motion.svg 
                                  className="w-3 h-3 text-white" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                              >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </motion.svg>
                              )}
                          </div>
                          </div>
                          <span className="text-xs leading-relaxed" style={{ color: COLORS.textSecondary }}>
                          <strong style={{ color: COLORS.text }}>Polityka prywatności *</strong><br />
                          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zgłoszenia oraz kontaktu w sprawie szkody komunikacyjnej. 
                          <a 
                              href="/polityka-prywatnosci" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:no-underline ml-1"
                              style={{ color: COLORS.primary }}
                              onClick={(e) => e.stopPropagation()}
                          >
                              Przeczytaj pełną politykę
                          </a>
                          </span>
                      </label>
                      <AnimatePresence>
                          {errors.privacyPolicy && (
                          <motion.p 
                              className="text-red-500 text-xs mt-2 flex items-center gap-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                          >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.privacyPolicy}
                          </motion.p>
                          )}
                      </AnimatePresence>
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
              </div>

              {/* Przyciski na dole */}
              <div className="pt-4 sm:pt-6 mt-auto">
                {currentStep === 1 ? (
                  <motion.button 
                    type="submit"
                    className="w-full h-12 sm:h-14 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: COLORS.primary }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Dalej →
                  </motion.button>
                ) : (
                  <div className="flex gap-3 sm:gap-4">
                    <motion.button 
                      type="button"
                      onClick={handlePreviousStep}
                      className="flex-1 h-12 sm:h-14 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold border-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                      style={{ 
                        borderColor: COLORS.primary,
                        color: COLORS.primary,
                        backgroundColor: 'white'
                      }}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ← Wstecz
                    </motion.button>
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-2 h-12 sm:h-14 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] sm:min-w-[140px]"
                      style={{ backgroundColor: COLORS.primary }}
                      whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <motion.div 
                            className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="text-xs sm:text-sm">Wysyłanie...</span>
                        </div>
                      ) : (
                        'Wyślij zgłoszenie'
                      )}
                    </motion.button>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Główny komponent z providerem reCAPTCHA
function PhoneContactForm() {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
      <PhoneContactFormInner />
    </ReCaptchaProvider>
  );
}

export default memo(PhoneContactForm);