const CTA = ({ cta }) => {
  return (
    <section id="cta">
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h2 className="text-4xl font-bold text-indigo-600">{cta.text}</h2>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          {cta.description}
        </p>

        <a
          href={`mailto:${cta.email}`}
          className="block mt-6 text-indigo-600 font-medium underline underline-offset-4"
        >
          {cta.email}
        </a>

        <div className="mt-10 flex justify-center gap-6">
          {cta.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="text-indigo-600 uppercase text-sm font-medium tracking-wide"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
