import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import {
  BoltIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services | Divine Success Investments Limited",
  description:
    "DSIL provides electrical construction, solar PV systems, equipment supply, civil infrastructure, and SCADA & automation services across Zambia.",
};

const services = [
  {
    icon: BoltIcon,
    title: "Electrical Construction",
    image: "/images/img-05.jpeg",
    description:
      "Comprehensive electrical construction services covering the full spectrum of power infrastructure from low voltage to high voltage systems.",
    capabilities: [
      "LV, MV, and HV installations",
      "Substation design and construction",
      "Overhead line construction",
      "Underground cable installation",
      "Transformer installation and commissioning",
      "Motor installation and maintenance",
      "Switchgear installation",
      "Protection systems design and installation",
      "Automation and control systems",
      "Telecommunications infrastructure",
    ],
  },
  {
    icon: SunIcon,
    title: "Solar PV Systems",
    image: "/images/img-09.jpeg",
    description:
      "End-to-end solar photovoltaic solutions from design through commissioning and ongoing maintenance for all system types.",
    capabilities: [
      "Solar PV system design and engineering",
      "Equipment supply and procurement",
      "Installation and construction",
      "Testing and commissioning",
      "Preventive and corrective maintenance",
      "Hybrid solar PV systems",
      "Grid-tied solar PV systems",
      "Off-grid / standalone solar PV systems",
    ],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Equipment Supply",
    image: "/images/img-26.jpeg",
    description:
      "Supply of internationally renowned electrical equipment and components for power generation, transmission, and distribution.",
    capabilities: [
      "Conductors and cables",
      "Power and distribution transformers",
      "Circuit breakers (SF6 and vacuum)",
      "Capacitor banks",
      "Voltage regulators",
      "Motor drives and starters",
      "Batteries and UPS systems",
      "Test instruments and measurement equipment",
      "Switchgear and panel boards",
      "Protection relays and devices",
    ],
  },
  {
    icon: BuildingOfficeIcon,
    title: "Civil Infrastructure",
    image: "/images/img-23.jpeg",
    description:
      "Design, construction, and commissioning of civil works supporting electrical and industrial projects across Zambia.",
    capabilities: [
      "Foundation design and construction",
      "Substation civil works",
      "Cable trenching and ducting",
      "Access road construction",
      "Structural steel fabrication",
      "Building construction for electrical installations",
      "Drainage and earthworks",
    ],
  },
  {
    icon: CpuChipIcon,
    title: "SCADA & Automation",
    image: "/images/img-19.jpeg",
    description:
      "Advanced control systems and automation solutions for power utilities and industrial operations.",
    capabilities: [
      "SCADA system design and implementation",
      "Power quality monitoring",
      "Protection system coordination",
      "Plant automation and control",
      "Remote monitoring and telemetry",
      "PLC programming and integration",
      "Energy management systems",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        title="Our Services"
        subtitle="Comprehensive electrical engineering and construction solutions"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={service.title}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="w-full lg:w-1/2 relative h-64 md:h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-red" />
                    <h2 className="font-oswald text-navy text-2xl md:text-3xl font-bold uppercase tracking-wider">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
