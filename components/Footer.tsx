import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="DSIL Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <div>
              <p className="font-oswald text-white text-lg tracking-wider mb-1">
                Divine Success Investments Limited
              </p>
              <p>Reg No: 120180001032 | TPIN: 1008600487</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:info@divinesuccesszm.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <EnvelopeIcon className="w-4 h-4" />
              info@divinesuccesszm.com
            </a>
            <a
              href="tel:+260972817912"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              +260 972 817 912
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs">
          &copy; {new Date().getFullYear()} Divine Success Investments Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
