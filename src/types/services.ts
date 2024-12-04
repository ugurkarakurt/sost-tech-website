// src/types/services.ts
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: ServiceType[] = [
  {
    id: 'sap-consulting',
    title: 'SAP Danışmanlık',
    description: 'SAP çözümleri ve danışmanlık hizmetleri ile işletmenizi güçlendirin.',
    features: [
      'SAP S/4HANA Implementasyonu',
      'Sistem Optimizasyonu',
      'Performans İyileştirme',
      'Teknik Danışmanlık'
    ],
    icon: 'ConsultingIcon'
  },
  {
    id: 'sap-training',
    title: 'SAP Eğitim',
    description: 'SAP yazılımlarında derinlemesine eğitimlerle, ekibinizin verimliliğini artırın.',
    features: [
      'Kullanıcı Eğitimleri',
      'Teknik Eğitimler',
      'Özelleştirilmiş Workshoplar',
      'Sertifikasyon Hazırlık'
    ],
    icon: 'TrainingIcon'
  },
  {
    id: 'digital-transformation',
    title: 'Dijital Dönüşüm Danışmanlığı',
    description: 'Teknolojiyi iş süreçlerine entegre ederek dönüşümünüzü hızlandırın.',
    features: [
      'Dijital Strateji Geliştirme',
      'Süreç Optimizasyonu',
      'Değişim Yönetimi',
      'İnovasyon Danışmanlığı'
    ],
    icon: 'TransformationIcon'
  },
  {
    id: 'sap-support',
    title: 'SAP Uygulama Desteği',
    description: 'İşletmenizin SAP sistemini yönetmek ve optimize etmek için sürekli destek sağlıyoruz.',
    features: [
      '7/24 Teknik Destek',
      'Proaktif İzleme',
      'Problem Çözümü',
      'Periyodik Bakım'
    ],
    icon: 'SupportIcon'
  }
];