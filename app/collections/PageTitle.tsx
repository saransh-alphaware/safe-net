export default function PageTitle() {
  return (
    <div className="bg-[#f8f9fa] py-14">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[36px] lg:text-[44px] font-black text-primary uppercase tracking-tight mb-2">
            {"Collections"}
          </h1>
          <div className="flex items-center gap-2 text-[16px] tracking-widest text-text-secondary">
            <a
              href="/"
              className="hover:text-secondary transition-colors decoration-secondary/30 underline-offset-4"
            >
              Home
            </a>
            <span>{">"}</span>
            <span className="hover:text-secondary transition-colors decoration-secondary/30 underline-offset-4">
              Collections
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
