import Social from "../home/general/Social";

export default function Footer() {
  return (
    <footer className="py-12 bg-bgLight dark:bg-bgDark">
      <div className="container mx-auto px-[10px] lg:px-0">
        <div>
          {/* Social */}
          <Social
            containerClassName="flex justify-center gap-x-6 mx-auto mb-4"
            iconClasseName="text-[22px] text-main transition-all"
          />
          {/* Copy right */}
          <p className="text-gray-400 text-center">
            Copyright &copy; Vo Minh Thang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
