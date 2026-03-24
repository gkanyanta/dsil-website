import HeroSlideshow from "@/components/HeroSlideshow";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import ClientsStrip from "@/components/ClientsStrip";
import Link from "next/link";

const services = [
  {
    icon: "bolt",
    title: "Electrical Construction",
    description:
      "LV, MV, and HV installations including substations, overhead lines, cables, transformers, and protection systems.",
  },
  {
    icon: "sun",
    title: "Solar PV Systems",
    description:
      "Design, supply, installation, testing, and commissioning of hybrid, grid-tied, and off-grid solar photovoltaic systems.",
  },
  {
    icon: "building",
    title: "Civil Infrastructure",
    description:
      "Design, construction, and commissioning of civil works supporting electrical and industrial projects.",
  },
  {
    icon: "wrench",
    title: "Equipment Supply",
    description:
      "Supply of internationally renowned electrical equipment — transformers, switchgear, cables, circuit breakers, and more.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <StatsBar />

      {/* Services Overview */}
      <section className="bg-light-gray py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-navy text-3xl md:text-4xl font-bold uppercase tracking-wider">
              What We <span className="text-red">Do</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical engineering and construction services
              delivered to the highest international standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ClientsStrip />

      {/* CTA Banner */}
      <section className="bg-red py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-oswald text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Get in touch for a free consultation and quote on your next
            electrical or solar project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="font-oswald uppercase text-sm tracking-wider bg-white text-red px-7 py-3 rounded-sm hover:bg-white/90 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+260972817912"
              className="font-oswald uppercase text-sm tracking-wider border border-white text-white px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              +260 972 817 912
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
