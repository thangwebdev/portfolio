/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { MdOutlineEmail, MdOutlineHome, MdPhone } from "react-icons/md";
import Illustration from "~/components/common/contact/Illustration";
import ContactForm from "~/components/common/contact/contact-form";
import { MdWavingHand } from "react-icons/md";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description: "Generated by create next app",
};

export default function ContactPage() {
  return (
    <section className="dark:bg-bgDark">
      <div className="container mx-auto px-[10px] lg:px-0">
        {/* text and illustration */}
        <div className="grid lg:grid-cols-2 pt-12 mb-6 lg:mb-24 lg:h-[480px]">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-main text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-main"></span>
              Say Hello
              <span
                className="text-yellow-400 text-[18px] animate__animated animate__headShake
               animate__bounce animate__delay-2s animate__infinite	"
              >
                <MdWavingHand />
              </span>
            </div>
            <h1 className="h1 mb-8">Let's Work Together.</h1>
            <p className="subtitle">
              I specialize in crafting intuitive websites with cutting-edge
              technology, delivering dynamic and engaging user experiences.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden lg:flex w-full">
            <div className="w-full h-[400px]">
              <Illustration />
            </div>
          </div>
        </div>
        {/* info text and form */}
        <div className="grid lg:grid-cols-2 pb-12">
          {/* info text */}
          <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-xl">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <span className="text-main text-[18px]">
                <MdOutlineEmail />
              </span>
              <span className="text">vothang100401@gmail.com</span>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <span className="text-main text-[18px]">
                <MdOutlineHome />
              </span>
              <span className="text">Thu Duc, Ho Chi Minh City, Viet Nam</span>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <span className="text-main text-[18px]">
                <MdPhone />
              </span>
              <span className="text">+84 358 500 771</span>
            </div>
          </div>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
