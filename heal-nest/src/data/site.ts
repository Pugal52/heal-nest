import {
  Activity, Droplets, Flower2, Footprints, Hand, Leaf, Scale, Sprout,
  BookOpen, HeartHandshake, Wind, MessageCircle, ClipboardList, NotebookPen, RefreshCw,
  LayoutGrid, UserCheck, Home, ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MAPS_EMBED_URL, MAPS_PLACE_URL } from '../lib/env';

export const SITE = {
  brand: "Aadhan's Heal Nest",
  fullName: "Aadhan's Heal Nest Health Care Clinic",
  tagline: 'Siddha · Ayurveda · Varma',
  addressLines: ['28, Nethaji Road, NRT Nagar', 'Theni, Tamil Nadu – 625531'],
  addressOneLine: '28, Nethaji Road, NRT Nagar, Theni, Tamil Nadu 625531',
  phone: '9994333853',
  phoneDisplay: '99943 33853',
  listingUrl: 'https://share.google/f4UIBqWJLiuBUehh6',
  // Google reviews link. Defaults to the business listing; replace with the direct reviews link if you have it.
  reviewsUrl: 'https://share.google/f4UIBqWJLiuBUehh6',
};

/**
 * Optional overall rating from the Google listing. Leave null until the clinic confirms the exact
 * figures from its live Google Business profile (e.g. { rating: 4.9, count: 120 }), then it appears on the page.
 */
export const RATING_SUMMARY: { rating: number; count: number } | null = null;

/**
 * Real Google reviews, reproduced word for word from the clinic's public listing (supplied by the clinic).
 * Only add reviews with the reviewer's permission, and avoid ones that promise cures or guaranteed results.
 */
export const REVIEWS: { author: string; text: string; stars: number }[] = [
  {
    author: 'Sam',
    stars: 5,
    text: 'Excellent care and treatment provided by the doctors. The doctors are very attentive and take good care of patients. They explain the condition and treatment clearly. I felt comfortable and well cared for throughout my visit. The hospital has a pleasant and welcoming ambiance. The facilities are clean and well maintained. Highly satisfied with the overall experience and service.',
  },
  {
    author: 'Abishek Bala',
    stars: 5,
    text: 'Doctors are caring and treat patients well. They listen carefully and give proper treatment. Overall, good experience with doctors.',
  },
  {
    author: 'Subasri Thazhavanan',
    stars: 5,
    text: "In theni this is one of the best siddha ayurvedha clinic with clean and calm envt.. well equipped for all treatments ... well experienced doctors as well having women's wellness health care too... doctors are so patience in caring and curing the illness successfully 100%....",
  },
  {
    author: 'Vishva Muralithara Shivakumar Pandiaraj',
    stars: 5,
    text: 'A game changer treatment for me. Had been suffering with back pain and knee pain for years. With great diet and detox, my body became light too. Amazing hands of Dr Shankar and Dr Siva helped me feel the difference in just 10 days.',
  },
];

const mapQuery = encodeURIComponent(`${SITE.fullName}, ${SITE.addressOneLine}`);
// Address-search embed works without an API key. Set VITE_MAPS_EMBED_URL to pin the exact listing.
export const MAP_EMBED = MAPS_EMBED_URL || `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const DIRECTIONS_URL =
  MAPS_PLACE_URL || `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export interface Treatment {
  id: string;
  name: string;
  icon: LucideIcon;
  short: string;
  detail: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'ayurveda',
    name: 'Ayurveda',
    icon: Leaf,
    short: 'Traditional Ayurvedic wellness practices, with care shaped around your individual needs.',
    detail: [
      'Ayurveda is a traditional Indian system of health that looks at the whole person: daily routine, diet, lifestyle and individual constitution.',
      'At Heal Nest, care begins with a conversation, so that any recommendations reflect your circumstances rather than a one-size-fits-all plan.',
    ],
  },
  {
    id: 'panchakarma',
    name: 'Panchakarma',
    icon: Droplets,
    short: 'Traditional Ayurvedic cleansing and therapeutic procedures, offered after professional assessment.',
    detail: [
      'Panchakarma refers to a group of traditional Ayurvedic cleansing and therapeutic procedures.',
      'Whether Panchakarma is suitable for you, and which procedures may be appropriate, is decided through a professional assessment. It is not right for everyone.',
    ],
  },
  {
    id: 'siddha',
    name: 'Siddha',
    icon: Sprout,
    short: 'A traditional Tamil system of medicine with a rich heritage of holistic healthcare.',
    detail: [
      'Siddha is one of the oldest traditional systems of medicine of Tamil Nadu, with a long heritage of holistic healthcare.',
      'Our practitioners can discuss how Siddha approaches may fit into your wellbeing goals after understanding your health history.',
    ],
  },
  {
    id: 'varma',
    name: 'Varma Therapy',
    icon: Hand,
    short: 'Traditional Varma practices used in therapeutic care, guided by professional assessment.',
    detail: [
      'Varma therapy is a traditional Tamil practice that works with specific points on the body as part of therapeutic care.',
      'It is offered following an appropriate professional assessment, and suitability varies from person to person.',
    ],
  },
  {
    id: 'foot-reflexology',
    name: 'Foot Reflexology',
    icon: Footprints,
    short: 'A foot-based complementary practice intended to promote relaxation and comfort.',
    detail: [
      'Foot reflexology is a complementary wellness practice that uses gentle pressure on the feet, intended to promote relaxation and comfort.',
      'It is not a treatment or cure for any disease and does not replace medical care.',
    ],
  },
  {
    id: 'pain-management',
    name: 'Pain Management',
    icon: Activity,
    short: 'Individual assessment and suitable therapeutic approaches to help manage pain and everyday comfort.',
    detail: [
      'Pain has many possible causes. We begin with an individual assessment, then discuss therapeutic approaches that may help you manage pain and move more comfortably in daily life.',
      'Results differ between people and relief cannot be guaranteed. Sudden, severe or unexplained pain should be seen by a doctor without delay.',
    ],
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    icon: Scale,
    short: 'Personalised, sustainable support with lifestyle and wellness guidance.',
    detail: [
      'Weight management support here focuses on appropriate lifestyle and wellness guidance that fits your routine and can be sustained.',
      'We do not promise rapid or guaranteed weight loss. If you have a medical condition, your plan should be discussed with your doctor.',
    ],
  },
  {
    id: 'detox-wellness',
    name: 'Detoxification & Wellness',
    icon: Flower2,
    short: 'Professionally guided wellness programmes rooted in traditional practice.',
    detail: [
      'These programmes draw on traditional wellness practices and are guided by a practitioner after assessing your needs.',
      'They are different from medically necessary detoxification, such as treatment for poisoning or substance dependence, which requires medical care. The body has its own natural processes and does not require unsupported detox products.',
    ],
  },
];

export const ABOUT_FEATURES = [
  { icon: BookOpen, title: 'Traditional Healing Wisdom', text: 'Care rooted in Siddha, Ayurveda and Varma, the traditional systems of South India.' },
  { icon: HeartHandshake, title: 'Personalised Care', text: 'Time to talk through your concerns so recommendations fit you as an individual.' },
  { icon: Wind, title: 'A Calm, Welcoming Environment', text: 'A quiet, comfortable space in Theni where you can ask questions and take your time.' },
];

export const TRUST_ITEMS = [
  { icon: Leaf, label: 'Traditional healing practices' },
  { icon: UserCheck, label: 'Personalised wellness' },
  { icon: LayoutGrid, label: 'Multiple therapeutic services' },
];

export const APPROACH_STEPS = [
  { icon: MessageCircle, title: 'Initial Consultation', text: 'We listen to your concerns and understand your wellness goals.' },
  { icon: ClipboardList, title: 'Professional Assessment', text: 'We assess suitability and identify the care options that may be appropriate.' },
  { icon: NotebookPen, title: 'Personalised Care Plan', text: 'We discuss recommended treatments and what you can realistically expect.' },
  { icon: RefreshCw, title: 'Follow-Up', text: 'We review your progress and adjust the plan when appropriate.' },
];

export const WHY_ITEMS = [
  { icon: Leaf, title: 'Traditional foundations', text: 'A focus on Siddha and Ayurvedic practices.' },
  { icon: LayoutGrid, title: 'A range of services', text: 'Wellness and therapeutic services under one roof.' },
  { icon: UserCheck, title: 'Individual attention', text: 'Care shaped around each person’s needs.' },
  { icon: Home, title: 'A welcoming place in Theni', text: 'A calm clinic that is easy to visit.' },
  { icon: ShieldCheck, title: 'Responsible, transparent care', text: 'Clear guidance, and no guaranteed outcomes.' },
];

export interface GalleryItem {
  src?: string;
  alt: string;
  caption: string;
  ratio: string; // tailwind aspect class
  placeholder?: boolean;
}

export const GALLERY: GalleryItem[] = [
  { src: '/images/treatment-room.webp', alt: 'Treatment room with a wooden therapy table, oil vessel stand and softly lit ceiling', caption: 'Treatment room', ratio: 'aspect-[3/4]' },
  { src: '/images/consultation-room.webp', alt: 'Consultation room with a desk, chairs and warm wood flooring', caption: 'Consultation room', ratio: 'aspect-[4/3]' },
  { src: '/images/waiting-area.webp', alt: 'Reception and waiting area with two sofas, a reception desk and the Heal Nest logo on the wall', caption: 'Reception and waiting area', ratio: 'aspect-[4/3]' },
  { src: '/images/entrance.webp', alt: 'Clinic entrance with potted plants leading up the steps to the front door', caption: 'Clinic entrance', ratio: 'aspect-[3/4]' },
  { src: '/images/clinic-signage.webp', alt: 'Illuminated Aadhan’s Heal Nest signboard at the clinic entrance in the evening', caption: 'Clinic signboard', ratio: 'aspect-[3/4]' },
];

export const FAQS = [
  {
    q: 'What treatments are available at Heal Nest?',
    a: 'Heal Nest offers Ayurveda, Panchakarma, Siddha, Varma therapy, foot reflexology, pain management, weight management, and detoxification and wellness programmes. Which of these suits you is decided after a consultation.',
  },
  {
    q: 'How can I book an appointment?',
    a: `Appointments are booked by phone. Call the clinic on ${SITE.phone} to speak with the team and confirm a date and time.`,
  },
  {
    q: 'Where is the clinic located?',
    a: `${SITE.addressOneLine}. Use the Get Directions button in the Contact section to open the location in Google Maps.`,
  },
  {
    q: 'Should I consult a practitioner before choosing a treatment?',
    a: 'Yes. Traditional treatments are not suitable for everyone, so we recommend a professional assessment before starting any treatment. The descriptions on this website are general information, not individual advice.',
  },
  {
    q: 'Can I discuss my health concerns before booking?',
    a: `Yes. You are welcome to call ${SITE.phone} and talk through your concern before booking. For urgent or severe symptoms, please see a doctor or call 112 instead of waiting for an appointment.`,
  },
  {
    q: 'How should I prepare for a Panchakarma session?',
    a: 'Preparation depends on the individual and the specific procedure, so your practitioner will advise you after your assessment. It helps to tell them about any health conditions, pregnancy, allergies and medicines you take. Please do not stop or change prescribed medicines without speaking to your doctor.',
  },
];

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    paragraphs: [
      'PLACEHOLDER: this text must be replaced with a privacy policy reviewed by the clinic before launch.',
      'This website does not collect personal information through forms. Appointments are booked by phone. If you call the clinic, any details you share should only be used to arrange and provide your care.',
      'The embedded Google Map and fonts are loaded from Google, which may collect usage data under its own privacy policy.',
    ],
  },
  disclaimer: {
    title: 'Medical Disclaimer',
    paragraphs: [
      'The content on this website is for general information only and does not replace individual medical advice, diagnosis or treatment.',
      'Treatment suitability should be determined through a professional assessment. No treatment described here is guaranteed to produce a particular result, and none replaces emergency care or medically necessary treatment.',
      'In an emergency, contact your nearest hospital or call 112.',
      'PLACEHOLDER: the clinic should review and finalise this wording, including any registration or regulatory details that apply.',
    ],
  },
};
