import { CallIcon } from "./icons/CallIcon";
import { MailIcon } from "./icons/MailIcon";
import instagram from "../assets/icon/instagram.png";
import facebook from "../assets/icon/facebook.png";
import youtube from "../assets/icon/youtube.png";
import { LocationIcon } from "./icons/LocationIcon";
import dewaweb from "../assets/images/dewaweb.png";

export const Footer = () => {
  return (
    <footer className="bg-lightgrey" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 xl:mb-0 text-xs md:text-base">
          <div className="flex col-span-2 gap-4">
            <div>
              <LocationIcon />
            </div>
            <div>
              <div>Gedung E-Building,</div>
              <div>Lantai 2 Komplek Ruko</div>
              <div>Harmoni Plaza Blok I, No 1-4,</div>
              <div>Jl. Suryopranoto No.2 RT.14/RW.8</div>
              <div>Gambir, Jakarta Pusat,</div>
              <div>DKI Jakarta 10130</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:col-span-2">
            <div className="flex items-center gap-4">
              <div>
                <MailIcon />
              </div>
              <div>yipabkco@yipabk.com</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <CallIcon />
              </div>
              <div>
                <p>+62 813-7070-3429</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold font-montserrat text-xs mb-1">
              KONTAK KAMI
            </div>
            <a href="https://www.instagram.com/yipabk/" target="_blank">
              <div className="flex items-center gap-4">
                <div>
                  <img src={instagram} alt="" />
                </div>
                <div>Instagram</div>
              </div>
            </a>
            <a
              href="https://www.youtube.com/@yayasanindonesiapedulianak1926"
              target="_blank"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img src={youtube} alt="" />
                </div>
                <div>Youtube</div>
              </div>
            </a>
            <a href="https://www.facebook.com/yipabk.idn" target="_blank">
              <div className="flex items-center gap-4">
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>Facebook</div>
              </div>
            </a>
          </div>
          <div className="flex flex-col items-start lg:col-span-2 lg:items-center">
            <p className="text-xs font-[500] uppercase font-montserrat">
              Didukung oleh
            </p>
            <img className="h-[90px]" src={dewaweb} alt="Company name" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center bg-grey border-t border-gray-200 py-3">
          <p className="md:text-base text-xs font-montserrat font-[500] text-white/90 xl:text-center">
            &copy; COPY RIGHT 2023, Yayasan Indonesia Peduli{" "}
            <span className="whitespace-nowrap">Anak Berkebutuhan Khusus</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
