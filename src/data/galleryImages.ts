export interface GalleryImage {
  src: string;
  category: string;
  alt: string;
  specialist: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'all', label: 'All Cases' },
  { id: 'emax', label: 'Emax Veneers' },
  { id: 'injected', label: 'Injected Composite' },
  { id: 'layered', label: 'Layered Composite' },
  { id: 'smiles', label: 'Happy Smiles' },
  { id: 'allon4', label: 'All-on-4 Implants' },
];

export const galleryImages: GalleryImage[] = [
  // --- Emax Veneers (16) ---
  {
    src: '/resultados/galeria/emax veneers/porcelana.webp',
    category: 'emax',
    alt: 'Emax porcelain veneers smile result',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana .webp',
    category: 'emax',
    alt: 'Emax veneers natural smile transformation',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana (1).webp',
    category: 'emax',
    alt: 'Emax porcelain veneer close-up result',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana (3).webp',
    category: 'emax',
    alt: 'Emax veneers smile design outcome',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/Porcelana (4).webp',
    category: 'emax',
    alt: 'Emax porcelain veneers front view',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana (5).webp',
    category: 'emax',
    alt: 'Emax veneers full smile result',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana (6).webp',
    category: 'emax',
    alt: 'Emax porcelain veneers detail',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(1).webp',
    category: 'emax',
    alt: 'Emax veneers patient smile',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(2).webp',
    category: 'emax',
    alt: 'Emax porcelain veneers transformation',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(3).webp',
    category: 'emax',
    alt: 'Emax veneers aesthetic result',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(4).webp',
    category: 'emax',
    alt: 'Emax porcelain veneers natural look',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(5).webp',
    category: 'emax',
    alt: 'Emax veneers smile makeover',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porcelana(7).webp',
    category: 'emax',
    alt: 'Emax porcelain veneers complete case',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/Porcelana(8).webp',
    category: 'emax',
    alt: 'Emax veneers premium result',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/porceana.webp',
    category: 'emax',
    alt: 'Emax porcelain veneers outcome',
    specialist: 'Dra. Vázquez',
  },
  {
    src: '/resultados/galeria/emax veneers/cerámica .webp',
    category: 'emax',
    alt: 'Ceramic veneers smile design',
    specialist: 'Dra. Vázquez',
  },

  // --- Injected Composite Veneers (8) ---
  {
    src: '/resultados/galeria/injected/inyecdadas de resina .webp',
    category: 'injected',
    alt: 'Injected composite veneers result',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas de resina.webp',
    category: 'injected',
    alt: 'Injected composite veneer smile design',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas.webp',
    category: 'injected',
    alt: 'Injected composite veneers transformation',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas1.webp',
    category: 'injected',
    alt: 'Injected composite veneers case 1',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas2.webp',
    category: 'injected',
    alt: 'Injected composite veneers case 2',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas3.webp',
    category: 'injected',
    alt: 'Injected composite veneers case 3',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas4.webp',
    category: 'injected',
    alt: 'Injected composite veneers case 4',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/injected/inyectadas5.webp',
    category: 'injected',
    alt: 'Injected composite veneers case 5',
    specialist: 'Dr. Sáenz',
  },

  // --- Layered Composite Veneers (5) ---
  {
    src: '/resultados/galeria/layered/estratificada de resina.webp',
    category: 'layered',
    alt: 'Layered composite veneers result',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/layered/estratificadas de resina.webp',
    category: 'layered',
    alt: 'Layered composite veneers transformation',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/layered/estratificadas de resina(1).webp',
    category: 'layered',
    alt: 'Layered composite veneers case',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/layered/resina estratificada .webp',
    category: 'layered',
    alt: 'Layered composite veneers smile design',
    specialist: 'Dr. Sáenz',
  },
  {
    src: '/resultados/galeria/layered/resina.webp',
    category: 'layered',
    alt: 'Layered composite veneers detail',
    specialist: 'Dr. Sáenz',
  },

  // --- Happy Smiles (7) ---
  {
    src: '/resultados/galeria/caritas/ceramica.webp',
    category: 'smiles',
    alt: 'Happy patient smile with ceramic work',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcelana.webp',
    category: 'smiles',
    alt: 'Happy patient with porcelain smile',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcelana .webp',
    category: 'smiles',
    alt: 'Patient smiling after porcelain treatment',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcela .webp',
    category: 'smiles',
    alt: 'Happy smile after dental treatment',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcelana(1).webp',
    category: 'smiles',
    alt: 'Patient happy with smile result',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcelana(2).webp',
    category: 'smiles',
    alt: 'Confident smile after transformation',
    specialist: 'Smile Concierge Team',
  },
  {
    src: '/resultados/galeria/caritas/porcelana(3).webp',
    category: 'smiles',
    alt: 'Joyful patient smile',
    specialist: 'Smile Concierge Team',
  },

  // --- All-on-4 Implants (3) ---
  {
    src: '/resultados/galeria/allon4/allon4.webp',
    category: 'allon4',
    alt: 'All-on-4 dental implants result',
    specialist: 'Dr. Pavón',
  },
  {
    src: '/resultados/galeria/allon4/allon4 (2).webp',
    category: 'allon4',
    alt: 'All-on-4 full arch restoration',
    specialist: 'Dr. Pavón',
  },
  {
    src: '/resultados/galeria/allon4/allon4 (3).webp',
    category: 'allon4',
    alt: 'All-on-4 implants smile transformation',
    specialist: 'Dr. Pavón',
  },
];
