import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About Us | Divine Success Investments Limited",
  description:
    "Learn about DSIL — a Zambian electrical engineering company founded in 2018 with a combined team experience dating back to 2010.",
};

const team = [
  {
    name: "Robinson Nicodemus Kabwe",
    role: "CEO & Founder",
    bio: "BSc Electrical Machines & Power (UNZA), MBA (University of South Wales). Over 20 years of experience in the electrical engineering industry. Former Divisional Manager at ZESCO.",
  },
  {
    name: "Tina Mwenda",
    role: "Logistics & Sales Manager",
    bio: "Director and Shareholder at DSIL. Over 8 years of experience in sales and stock management, ensuring seamless logistics and supply chain operations.",
  },
  {
    name: "Michael Chitalu Mpomwa",
    role: "SCADA Engineer",
    bio: "BSc Electrical/Electronics Engineering (UNZA). Over 19 years of SCADA engineering experience at ZESCO, specializing in control systems and automation.",
  },
  {
    name: "Scott Sikwangala",
    role: "Civil Engineer",
    bio: "BSc Civil Engineering (UNZA). 30 years of experience in civil engineering. Former Head of Civil Engineering for ZESCO Northern & Copperbelt Divisions.",
  },
  {
    name: "Macloud Chali",
    role: "SHEQ Manager",
    bio: "Diploma in Electrical Engineering (CBU), BSc Business Administration (Northrise). Over 34 years of experience. Former Principal SHEQ Officer at ZESCO Northern Division.",
  },
  {
    name: "Joel Nyimbili",
    role: "Fabrication & Construction",
    bio: "Advanced Mechanical Certificate. 29 years at ZESCO in transmission and distribution line construction, specializing in fabrication and field construction.",
  },
  {
    name: "Emmanuel Nyirenda",
    role: "Engineer",
    bio: "BSc Electrical Machines & Power, MSc Renewable Energy, MSc Project Planning & Management. Over 11 years of experience, formerly at Indeni Oil Refinery.",
  },
  {
    name: "Mabvuto Banda",
    role: "Finance",
    bio: "BSc Finance & Accounting (Northrise University). Responsible for financial management, accounting, and reporting at DSIL.",
  },
];

const values = [
  {
    title: "Honesty",
    desc: "We operate with transparency and truthfulness in all our dealings.",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every project we undertake.",
  },
  {
    title: "Teamwork",
    desc: "We believe in collaboration and leveraging our collective expertise.",
  },
  {
    title: "Discipline",
    desc: "We maintain rigorous standards of safety, quality, and professionalism.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        subtitle="Building Zambia's electrical future since 2018"
      />

      {/* Company Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-oswald text-navy text-3xl font-bold uppercase tracking-wider mb-6">
            Our <span className="text-red">Story</span>
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Divine Success Investments Limited (DSIL) was incorporated on the
              5th of February 2018 under the Companies Act of Zambia. Our core
              business is electrical construction and the supply of
              internationally renowned electrical equipment.
            </p>
            <p>
              While DSIL was formally established in 2018, our team brings a
              combined experience dating back to 2010 under Suro Enterprises
              Limited. This deep industry knowledge enables us to deliver
              projects of the highest quality across electrical construction,
              solar PV systems, civil infrastructure, and equipment supply.
            </p>
            <p>
              Based in Ndola on the Copperbelt, we serve clients across Zambia
              including major utilities, mining companies, industrial firms, and
              healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white border-l-4 border-red p-8">
            <h3 className="font-oswald text-navy text-2xl font-bold uppercase tracking-wider mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed italic">
              &ldquo;To be Zambia&apos;s leading and preferred provider of high
              quality electrical engineering construction and supply
              services.&rdquo;
            </p>
          </div>
          <div className="bg-white border-l-4 border-red p-8">
            <h3 className="font-oswald text-navy text-2xl font-bold uppercase tracking-wider mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed italic">
              &ldquo;Providing safe and high quality construction and supply
              services in conformance to international standards to the
              satisfaction of our customers.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-oswald text-navy text-3xl font-bold uppercase tracking-wider text-center mb-10">
            Our <span className="text-red">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-light-gray border-l-4 border-red p-6">
                <h4 className="font-oswald text-navy text-lg font-bold mb-2">
                  {v.title}
                </h4>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-oswald text-navy text-3xl font-bold uppercase tracking-wider text-center mb-10">
            Core <span className="text-red">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
