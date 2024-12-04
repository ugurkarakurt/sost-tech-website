// src/lib/i18n/index.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import services_tr from './locales/tr/services.json';
import services_en from './locales/en/services.json';
import contact_tr from './locales/tr/contact.json';
import contact_en from './locales/en/contact.json';
import about_tr from './locales/tr/about.json';
import about_en from './locales/en/about.json';
import solutions_tr from './locales/tr/solutions.json';
import solutions_en from './locales/en/solutions.json';
import references_tr from './locales/tr/references.json';
import references_en from './locales/en/references.json';

const resources = {
  tr: {
    common: {
      navigation: {
        home: 'Ana Sayfa',
        services: 'Hizmetler',
        about: 'Hakkımızda',
        solutions: 'Çözümlerimiz',
        blog: 'Blog',
        contact: 'İletişim',
        references: 'Referanslar'
      },
      languages: {
        tr: 'Türkçe',
        en: 'English'
      },
      theme: {
        light: 'Aydınlık Tema',
        dark: 'Karanlık Tema'
      }
    },
    home: {
      hero: {
        title: 'İşletmelerinizi Dijital Dönüşümle Geleceğe Taşıyoruz',
        subtitle: 'SAP Danışmanlık Hizmetlerinde Uzmanlık ve Yenilikçi Çözümler',
        cta: 'Hizmetlerimizi Keşfedin'
      },
      intro: {
        text: 'SOST Teknoloji, SAP danışmanlık hizmetlerinde 10 yılı aşkın deneyimiyle, işletmelerin dijital dönüşümünü hızlandırmalarına yardımcı olmaktadır. Verimliliği artırarak, rekabet avantajı elde etmenizi sağlıyoruz.'
      },
      title: "SOST Teknoloji ve Bilişim Hizmetleri Anonim Şirketi",
      features: {
        1: {
          title: "SAP Uzmanlığı",
          description: '10+ yıllık SAP danışmanlık deneyimi'
        },
        2: {
          title: 'Hızlı Entegrasyon',
          description: 'Süreçlerinizi hızla dijitalleştirme'
        },
        3: {
          title: 'Güvenli Çözümler',
          description: 'En yüksek güvenlik standartları'
        },
      }
    },
    services: services_tr,
    contact: contact_tr,
    about: about_tr,
    solutions: solutions_tr,
    references: references_tr,
  },
  en: {
    common: {
      navigation: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        solutions: 'Solutions',
        blog: 'Blog',
        contact: 'Contact',
        references: 'References'
      },
      languages: {
        tr: 'Turkish',
        en: 'English'
      },
      theme: {
        light: 'Light Theme',
        dark: 'Dark Theme'
      }
    },
    home: {
      hero: {
        title: 'Transforming Your Business for the Digital Future',
        subtitle: 'Expertise and Innovative Solutions in SAP Consulting Services',
        cta: 'Discover Our Services'
      },
      intro: {
        text: 'With over 10 years of experience in SAP consulting services, SOST Technology helps businesses accelerate their digital transformation. We enable you to gain competitive advantage by increasing efficiency.'
      },
      title: "SOST Technology and Information Services Joint Stock Company",
      features: {
        1: {
          title: "SAP Expertise",
          description: '10+ years of SAP consulting experience'
        },
        2: {
          title: 'Fast Integration',
          description: 'Digitizing your processes quickly'
        },
        3: {
          title: 'Secure Solutions',
          description: 'Highest safety standards'
        },
      }
    },
    services: services_en,
    contact: contact_en,
    about: about_en,
    solutions: solutions_en,
    references: references_en,
  }
};

// Tek bir kez initialize edildiğinden emin oluyoruz
let isInitialized = false;

if (!isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') || 'tr' : 'tr',
      fallbackLng: 'tr',
      defaultNS: 'common',
      ns: ['common', 'home', 'services', 'contact'],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false
      }
    });

  isInitialized = true;
}

export default i18n;