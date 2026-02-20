export interface Treatment {
  title: string;
  description: string;
  price?: string;
}

export interface SpecialistData {
  name: string;
  shortName: string;
  slug: string;
  clinic: string;
  specialty: string;
  bio: string[];
  quote: string;
  expertise: string[];
  treatments: Treatment[];
  advancedTechniques?: Treatment[];
  color: 'forest' | 'sage' | 'forest-light';
  image?: string; // Path to profile image in /public folder
}

export const specialists: SpecialistData[] = [
  {
    name: 'Dr. Ambar Vázquez',
    shortName: 'Dr. Vázquez',
    slug: 'dr-ambar-vazquez',
    clinic: 'Ambar Vázquez Dental Studio',
    specialty: 'Specialist in natural smile design and advanced aesthetics',
    bio: [
      'Expert in creating natural, harmonious smiles that enhance facial beauty.',
      'Specializes in minimally invasive aesthetic dentistry with premium materials.',
      "Dr. Vázquez combines artistic vision with technical precision to deliver smile transformations that look completely natural and complement each patient's unique facial features.",
      "With years of experience in cosmetic dentistry, she has helped hundreds of patients achieve the confident, beautiful smile they've always wanted.",
    ],
    quote: 'Natural results, perfect proportions, and facial harmony',
    expertise: [
      'Smile design with injected composite veneers',
      'Smile design with layered composite veneers',
      'Smile design with layered Emax porcelain veneers',
      'Minimally invasive aesthetic dentistry',
    ],
    treatments: [
      {
        title: 'Composite Veneers',
        description:
          'Beautiful, natural-looking veneers crafted with premium composite materials. Minimally invasive procedure that preserves your natural tooth structure.',
        price: 'Starting at $300 USD per tooth',
      },
      {
        title: 'Porcelain Veneers (Emax)',
        description:
          'Premium layered porcelain veneers for the most natural and durable results. Perfect for complete smile makeovers.',
        price: 'Starting at $500 USD per tooth',
      },
      {
        title: 'Smile Design Consultation',
        description:
          'Comprehensive smile analysis and digital design to preview your new smile before treatment begins.',
        price: 'Complimentary with treatment',
      },
    ],
    color: 'forest',
    image: '/Dra.Ambar/profile-pic.webp',
  },
  {
    name: 'Dr. Francisco Xavier Primo Pavón',
    shortName: 'Dr. Xavier Pavón',
    slug: 'dr-xavier-pavon',
    clinic: 'Centro Dental Implantológico',
    specialty: 'Oral Rehabilitation & Implantology Specialist',
    bio: [
      "Dr. Xavier Pavón is one of Cancun's leading specialists in advanced dental implant surgery and full-mouth rehabilitation.",
      'He graduated from Universidad Veracruzana, continuing his postgraduate studies in Prosthodontics and Aesthetic Dentistry, where he developed deep expertise in oral rehabilitation and implantology.',
      'To further his specialization, Dr. Pavón completed a residency in Zygomatic Implantology in São Paulo, Brazil — mastering complex surgical techniques and full-arch restorations for patients with severe bone loss.',
      'Recognized for his precision, innovation, and academic contributions, Dr. Pavón has authored several scientific articles in leading dental surgery journals and continues to stay at the forefront of digital planning and surgical technologies.',
    ],
    quote:
      'My goal is to help patients recover not only their smile but also their confidence — with treatments that are safe, functional, and beautifully natural.',
    expertise: [
      'Dental Implants (traditional, zygomatic, transnasal, transsinusal, and pterygoid)',
      'All-on-4 / All-on-6 Rehabilitations',
      'Surgeries under sedation or general anesthesia',
      'Comprehensive oral rehabilitation with natural, aesthetic results',
    ],
    treatments: [
      {
        title: 'Dental Implants',
        description:
          "Restore your smile with a fixed, natural, and durable solution. Dental implants are ideal if you've lost one or several teeth. They replace the tooth root without affecting neighboring teeth.",
        price:
          'Surgical phase: starting at $800 USD | Restorative phase: starting at $500 USD',
      },
      {
        title: 'Bone Graft / Sinus Lift',
        description:
          'Sometimes, the bone must be strengthened or regenerated before implant placement. These procedures ensure a solid foundation for successful, long-lasting results.',
        price: 'Contact us for evaluation',
      },
      {
        title: 'All-on-4 / All-on-6',
        description:
          'A complete, fixed smile in one procedure for patients who have lost multiple teeth. 4 or 6 implants support a full-arch prosthesis designed for aesthetics, function, and durability. The surgery is performed under sedation for comfort.',
        price: 'Custom packages available',
      },
      {
        title: 'Root Canal Treatment',
        description:
          'Save your natural teeth and avoid extractions. Used to remove the nerve of a tooth damaged by deep decay, fracture, or trauma.',
      },
      {
        title: 'Dental Crowns',
        description:
          'Full coverage restorations to restore strength, shape, and aesthetics. Premium materials are used to ensure natural-looking, durable results.',
      },
      {
        title: 'Inlays & Onlays',
        description:
          'Minimally invasive restorations to repair only the damaged part of the tooth, preserving natural structure.',
      },
      {
        title: 'Resin Fillings',
        description:
          'Restore teeth affected by cavities or small fractures. Early treatment prevents more complex and costly procedures in the future.',
      },
    ],
    advancedTechniques: [
      {
        title: 'Transnasal Implants',
        description:
          'Anchored using the bone next to the nasal cavity for strong support without grafts. Ideal for restoring front teeth naturally.',
      },
      {
        title: 'Trans-Sinus Implants',
        description:
          'Placed through the sinus to anchor in denser bone areas, providing stability and often avoiding grafts.',
      },
      {
        title: 'Pterygoid Implants',
        description:
          'Anchored in the deep pterygoid bone for fixed teeth placement even with minimal bone.',
      },
      {
        title: 'Zygomatic Implants',
        description:
          'Anchored in the cheekbone (zygoma) for full-arch restorations without complex grafting. Provides both functional strength and aesthetic excellence.',
      },
    ],
    color: 'forest-light',
    image: '/Dr.Pavon/profile-pic.webp',
  },
  {
    name: 'Dr. Emmanuel Sáenz',
    shortName: 'Dr. Sáenz',
    slug: 'dr-emmanuel-saenz',
    clinic: 'Ambar Vázquez Dental Studio',
    specialty:
      'Specialist in Composite Smile Design – Injected & Layered Techniques',
    bio: [
      'Dr. Emmanuel Sáenz graduated from the Universidad Odontológica del Sur. With strong experience in general dentistry, he discovered his true passion in aesthetic dentistry and smile design.',
      "He completed a residency at Ambar Vázquez Dental Studio, working closely under the mentorship of Dr. Ámbar Vázquez, one of Mexico's most recognized aesthetic dentists.",
      'Today, Dr. Sáenz specializes in composite veneer smile designs, mastering both the injected and layered techniques.',
      'He works alongside Dr. Ámbar at Ambar Vázquez Dental Studio, delivering natural, artistic, and highly detailed smile transformations.',
    ],
    quote:
      'Natural, artistic, and highly detailed smile transformations — one layer at a time',
    expertise: [
      'Injected composite veneer smile design',
      'Layered composite veneer smile design',
      'Aesthetic rehabilitation of molars & posterior teeth',
      'Advanced composite resin techniques',
    ],
    treatments: [
      {
        title: 'Aesthetic Rehabilitation of Molars & Posterior Teeth',
        description:
          'Functional and aesthetic restorations for worn, fractured, or decayed teeth — restoring strength, anatomy, and long-term function while preserving natural structure.',
        price: 'Contact us for evaluation',
      },
      {
        title: 'Injected Composite Veneer Smile Design',
        description:
          'Aesthetic veneer technique using natural shades of composite resin. Ideal for patients who want to refine and enhance their smile without major complications such as severe discoloration or significant misalignment.',
        price: 'Contact us for details',
      },
      {
        title: 'Layered Composite Veneer Smile Design',
        description:
          'Advanced stratified composite veneer technique that allows us to select natural shades or brighter white tones. Suitable for patients with tooth discoloration or those seeking a more noticeable smile enhancement.',
        price: 'Contact us for details',
      },
    ],
    color: 'sage',
    image: '/Dr.Emmanuel/Dr.Emmanuel.webp',
  },
];
