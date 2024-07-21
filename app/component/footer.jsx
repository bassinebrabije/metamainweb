import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <Image
          src="/images/metalogo.png"
          width={1000}
          height={1000}
          alt="Profile Picture"
          className="mx-auto h-12 w-auto" />
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">© {currentYear} Metalearninghub. All rights reserved.</p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="/">Changelog</a>
        </div>
      </div>
    </footer>
  );
}
