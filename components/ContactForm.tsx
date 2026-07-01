"use client";
import { useState } from "react";

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
  "w-full bg-transparent border-b border-gold/20 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors font-sans";

export default function ContactForm() {
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
      <div className="border border-gold/20 p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-serif text-2xl text-gold mb-3">Thank You</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          We have received your inquiry and will contact you within 24 hours.
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
          placeholder="Full Name *"
          required
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <input
          type="tel"
          placeholder="Phone Number"
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
            Select Room Type
          </option>
          <option value="deluxe" className="bg-navy">
            Deluxe Room
          </option>
          <option value="junior" className="bg-navy">
            Junior Suite
          </option>
          <option value="executive" className="bg-navy">
            Executive Suite
          </option>
          <option value="royal" className="bg-navy">
            Royal Suite
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className="text-xs uppercase tracking-widest text-gold/50 mb-1 block font-sans">
            Check-in Date
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
            Check-out Date
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
        placeholder="Special Requests or Message"
        value={form.message}
        onChange={set("message")}
        rows={4}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy text-xs uppercase tracking-widest hover:bg-gold-light transition-colors font-sans font-semibold"
      >
        Send Inquiry
      </button>
    </form>
  );
}
