export default function LogoBar() {
  return (
    <section className="py-8 border-y border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted mb-4">
          Trusted by Indian fashion brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
          <span>Notique Studio</span>
          <span className="text-border">•</span>
          <span>Rangmanch</span>
          <span className="text-border">•</span>
          <span>Coming soon</span>
          <span className="text-border">•</span>
          <span>Coming soon</span>
        </div>
      </div>
    </section>
  );
}
