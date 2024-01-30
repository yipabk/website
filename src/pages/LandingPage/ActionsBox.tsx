import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export const ActionsBox = ({
  icon,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <a href={buttonLink}>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="relative flex flex-col justify-center items-center gap-3 font-montserrat text-white border-white border-4 w-[400px] px-6 pt-8 pb-12 bg-black/60"
      >
        <div className="h-[91px] flex items-center">{icon}</div>
        <div className="text-[40px] text-center">{title}</div>
        <div className="whitespace-pre-line text-center ">{subtitle}</div>
        <button className="absolute -bottom-6 font-montserrat text-base flex justify-center flex-grow-0 cursor-pointer bg-orange text-white font-medium px-3 lg:px-6 py-2 hover:bg-white hover:text-orange border border-transparent hover:border-orange duration-200">
          {buttonText}
        </button>
      </div>
    </a>
  );
};
