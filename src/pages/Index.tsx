import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  IndianRupee,
  Truck,
  Leaf,
  Banknote,
  Users,
  MapPin,
  Clock,
  Award,
} from "lucide-react";
import { PriceCalculator } from "@/components/PriceCalculator";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { LiveActivity } from "@/components/LiveActivity";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import CustomerCarousel from "@/components/CustomerCarousel";
import { FacilityGallery } from "@/components/FacilityGallery";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)]"
          style={{ backgroundSize: "24px 24px" }}
        />

        <div className="container relative py-10 lg:py-20">

          {/* ── MOBILE + TABLET: stacked layout ── */}
          <div className="block lg:hidden space-y-8">
            <div className="space-y-5 animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-green" />
                Govt. Authorized Vehicle Recycler
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-[1.1] font-[Poppins]">
                Get the <span className="text-accent-green">Best Price</span> for Your Old Car
              </h1>

              <p className="text-base text-primary-foreground/80">
                Free doorstep pickup, instant UPI payment, and complete RC cancellation —
                all handled by India's most trusted scrap car platform.
              </p>

              <ul className="space-y-2">
                {[
                  "Instant transparent quote",
                  "Free doorstep pickup",
                  "Payment before pickup",
                  "RC cancellation included",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="cta" size="lg" className="w-full sm:w-auto" onClick={() => setOpen(true)}>
                  Get Best Price <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 text-primary-foreground border-white/20 hover:bg-white/15 hover:text-primary-foreground"
                >
                  <Link to="/contact">Talk to Our Team</Link>
                </Button>
              </div>

              <LiveActivity />
            </div>

            <div
              className="relative rounded-2xl shadow-elegant overflow-hidden w-full"
              style={{ height: "280px" }}
            >
              <CustomerCarousel />
            </div>
          </div>

          {/* ── DESKTOP (lg+): two-column grid ── */}
          <div
            className="hidden lg:grid items-center gap-10"
            style={{ gridTemplateColumns: "55% 45%" }}
          >
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-green" />
                Govt. Authorized Vehicle Recycler
              </div>

              <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.1] font-[Poppins]">
                Get the <span className="text-accent-green">Best Price</span> for Your Old Car
              </h1>

              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Free doorstep pickup, instant UPI payment, and complete RC cancellation —
                all handled by India's most trusted scrap car platform.
              </p>

              <ul className="grid grid-cols-2 gap-2 max-w-xl">
                {[
                  "Instant transparent quote",
                  "Free doorstep pickup",
                  "Payment before pickup",
                  "RC cancellation included",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="cta" size="xl" onClick={() => setOpen(true)}>
                  Get Best Price <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/15 hover:text-primary-foreground"
                >
                  <Link to="/contact">
                    <Truck className="h-5 w-5" />
                    Talk to Our Team
                  </Link>
                </Button>
              </div>

              <LiveActivity />
            </div>

            <div className="relative">
              <div
                className="absolute -inset-6 bg-accent-green/15 blur-3xl rounded-full pointer-events-none"
                aria-hidden
              />
              <div
                className="relative rounded-2xl shadow-elegant overflow-hidden w-full"
                style={{ height: "480px" }}
              >
                <CustomerCarousel />
              </div>
            </div>
          </div>

        </div>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container py-5 grid grid-cols-3 gap-4 text-center">
            <Stat value="10,000+" label="Cars scrapped" />
            <Stat value="50+" label="Cities served" />
            <Stat value="₹4.5 Cr+" label="Paid to customers" />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="container py-16 md:py-20 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 space-y-5">
          <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
            Price Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
            Know your car's scrap value <span className="text-accent-green">in seconds</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our calculator uses real metal recovery rates, vehicle weight, age depreciation
            and condition to give you a transparent quote — the same one our buyers offer
            on inspection.
          </p>
          <ul className="space-y-2">
            {[
              "Based on actual metal weight & current scrap rates",
              "No spam — calculate without sharing details",
              "Lock in your price by booking pickup",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent-green mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <PriceCalculator source="landing-calculator" />
        </div>
      </section>

      {/* TRUST */}
      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
            Trusted, transparent, certified
          </h2>
          <p className="text-muted-foreground mt-3">
            We follow MoRTH End-of-Life Vehicle guidelines and partner only with
            government-authorized recycling facilities.
          </p>
        </div>
        <TrustBadges />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-soft border-y">
        <div className="container py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              Customer Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-[Poppins]">
              Real customers, real payouts
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: narrative */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-accent-green-soft text-accent-green text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] leading-tight">
              India's most trusted{" "}
              <span className="text-accent-green">car recycling</span> platform
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in Bulandshahar, Car2Scrap was built with one mission: give every car owner
              a fair, transparent price for their end-of-life vehicle — with zero paperwork hassle
              and instant payment. What started as a local operation has grown to serve 50+ cities
              across North India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are a government-authorized vehicle recycling facility operating under MoRTH
              End-of-Life Vehicle (ELV) guidelines. Every car we accept is responsibly dismantled —
              hazardous fluids safely disposed of, usable parts re-entering the supply chain,
              and scrap metal recycled — keeping the environment cleaner one car at a time.
            </p>

            {/* Value pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Govt. authorized",
                  desc: "Licensed under MoRTH ELV guidelines",
                },
                {
                  Icon: Leaf,
                  title: "Eco-responsible",
                  desc: "Zero harmful discharge, certified recycling",
                },
                {
                  Icon: Banknote,
                  title: "Fair & transparent",
                  desc: "Weight-based pricing, no hidden cuts",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border bg-card p-4 shadow-card hover:shadow-elegant transition-base"
                >
                  <v.Icon className="h-6 w-6 text-accent-green mb-3" />
                  <p className="font-semibold text-sm">{v.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + certificate badge */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Users,         value: "10,000+",  label: "Cars recycled" },
                { Icon: IndianRupee,   value: "₹4.5 Cr+", label: "Paid to owners" },
                { Icon: MapPin,        value: "50+",       label: "Cities served" },
                { Icon: Clock,         value: "24 hrs",    label: "Avg. pickup time" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border bg-card p-5 shadow-card flex flex-col gap-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green-soft text-accent-green">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-2xl font-bold font-[Poppins] text-accent-green">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificate callout */}
            <div className="rounded-xl border bg-gradient-soft p-5 flex items-start gap-4 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green-soft text-accent-green shrink-0">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-sm">MoRTH Registered Recycler</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Registered at Bharat Scrap Facilities, Sikandarabad Industrial Area, Bulandshahar.
                  Every vehicle receives a Certificate of Deposit (CoD) after processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-gradient-soft border-y">
        <div className="container py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              Our Facility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-[Poppins]">
              See us in action
            </h2>
            <p className="text-muted-foreground mt-3">
              A look inside our government-authorized recycling facility and the cars we've processed.
            </p>
          </div>
          <FacilityGallery />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-14 text-center shadow-elegant overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_70%_80%,white_1px,transparent_1px)]"
            style={{ backgroundSize: "24px 24px" }}
            aria-hidden
          />
          <div className="relative max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
              Ready to scrap your old car?
            </h2>
            <p className="text-primary-foreground/80">
              Get an instant quote, free pickup, and payment in under 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button variant="cta" size="xl" onClick={() => setOpen(true)}>
                <IndianRupee className="h-5 w-5" />
                Get My Best Price
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/15 hover:text-primary-foreground"
              >
                <Link to="/contact">
                  <Truck className="h-5 w-5" />
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadFormDialog open={open} onOpenChange={setOpen} source="landing-hero" />
    </div>
  );
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl md:text-2xl font-bold font-[Poppins]">{value}</div>
      <div className="text-xs uppercase tracking-wide text-primary-foreground/70 mt-0.5">
        {label}
      </div>
    </div>
  );
}

export default Index;