import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ShieldCheck,
  Leaf,
  Banknote,
  Users,
  IndianRupee,
  MapPin,
  Clock,
  Award,
  Truck,
} from "lucide-react";
import { FacilityGallery } from "@/components/FacilityGallery";
import { LeadFormDialog } from "@/components/LeadFormDialog";

export default function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "About Us | Orix India — India's Trusted Car Recycler";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container py-14 md:py-20 text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-white/10 border border-white/15 text-xs font-semibold px-3 py-1 uppercase tracking-wide">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 font-[Poppins]">
            India's most trusted{" "}
            <span className="text-accent-green">car recycling</span> platform
          </h1>
          <p className="text-primary-foreground/80 mt-4">
            Founded in Bulandshahar, built on transparency — giving every car owner a fair price
            with zero hassle.
          </p>
        </div>
      </section>

      {/* Main About section */}
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: narrative */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] leading-tight">
              Our <span className="text-accent-green">story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Orix India was built with one mission: give every owner
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
                { Icon: Users, value: "10,000+", label: "Cars recycled" },
                { Icon: IndianRupee, value: "₹4.5 Cr+", label: "Paid to owners" },
                { Icon: MapPin, value: "50+", label: "Cities served" },
                { Icon: Clock, value: "24 hrs", label: "Avg. pickup time" },
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
                  Registered at Orix India, Sikandarabad Industrial Area, Bulandshahar.
                  Every vehicle receives a Certificate of Deposit (CoD) after processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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

      {/* CTA */}
      <section className="container py-16 md:py-20 text-center">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-14 shadow-elegant overflow-hidden relative">
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
            </div>
          </div>
        </div>
      </section>

      <LeadFormDialog open={open} onOpenChange={setOpen} source="about-page" />
    </div>
  );
}