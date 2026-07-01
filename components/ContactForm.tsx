"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

interface FormState {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  message: string;
}

const inputClass =
  "w-full bg-transparent border-b border-gold/20 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-sans";

const copy = {
  ar: {
    namePlaceholder: "الاسم الكامل *",
    emailPlaceholder: "البريد الإلكتروني *",
    phonePlaceholder: "رقم الهاتف",
    selectRoomType: "اختر نوع الغرفة",
    deluxeRoom: "غرفة ديلوكس",
    juniorSuite: "جناح جونيور",
    executiveSuite: "جناح تنفيذي",
    royalSuite: "الجناح الملكي",
    checkInDate: "تاريخ الوصول",
    checkOutDate: "تاريخ المغادرة",
    messagePlaceholder: "طلبات خاصة أو رسالة",
    sendInquiry: "إرسال الطلب",
    thankYou: "شكراً لكم",
    thankYouMessage: "لقد استلمنا طلبكم وسنتواصل معكم خلال 24 ساعة.",
  },
  en: {
    namePlaceholder: "Full Name *",
    emailPlaceholder: "Email Address *",
    phonePlaceholder: "Phone Number",
    selectRoomType: "Select Room Type",
    deluxeRoom: "Deluxe Room",
    juniorSuite: "Junior Suite",
    executiveSuite: "Executive Suite",
    royalSuite: "Royal Suite",
    checkInDate: "Check-in Date",
    checkOutDate: "Check-out Date",
    messagePlaceholder: "Special Requests or Message",
    sendInquiry: "Send Inquiry",
    thankYou: "Thank You",
    thankYouMessage:
      "We have received your inquiry and will contact you within 24 hours.",
  },
};

export default function ContactForm() {
  const { lang } = useLanguage();
  const c = copy[lang];

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [field]: e.target.value });

  if (submitted) {
    return (
      <div className="border border-gold/20 p-10 text-center animate-scale-in">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-serif text-2xl text-gold mb-3">{c.thankYou}</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {c.thankYouMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-7"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <input
          type="text"
          placeholder={c.namePlaceholder}
          required
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
        <input
          type="email"
          placeholder={c.emailPlaceholder}
          required
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <input
          type="tel"
          placeholder={c.phonePlaceholder}
          value={form.phone}
          onChange={set("phone")}
          className={inputClass}
        />
        <select
          value={form.roomType}
          onChange={set("roomType")}
          className={`${inputClass} bg-navy`}
        >
          <option value="" disabled className="bg-navy">
            {c.selectRoomType}
          </option>
          <option value="deluxe" className="bg-navy">
            {c.deluxeRoom}
          </option>
          <option value="junior" className="bg-navy">
            {c.juniorSuite}
          </option>
          <option value="executive" className="bg-navy">
            {c.executiveSuite}
          </option>
          <option value="royal" className="bg-navy">
            {c.royalSuite}
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className="text-xs uppercase tracking-widest text-gold/50 mb-1 block font-sans">
            {c.checkInDate}
          </label>
          <input
            type="date"
            value={form.checkIn}
            onChange={set("checkIn")}
            className={`${inputClass} text-white/60 [color-scheme:dark]`}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-gold/50 mb-1 block font-sans">
            {c.checkOutDate}
          </label>
          <input
            type="date"
            value={form.checkOut}
            onChange={set("checkOut")}
            className={`${inputClass} text-white/60 [color-scheme:dark]`}
          />
        </div>
      </div>

      <textarea
        placeholder={c.messagePlaceholder}
        value={form.message}
        onChange={set("message")}
        rows={4}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy text-xs uppercase tracking-widest transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 font-sans font-semibold"
      >
        {c.sendInquiry}
      </button>
    </form>
  );
}
