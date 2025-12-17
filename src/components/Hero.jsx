const Hero = ({ hero }) => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-indigo-700" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-lime-300" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-6xl font-extrabold leading-tight text-lime-300">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-md text-lg text-white/90">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex gap-4">
                {hero.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow"
                  >
                    <img src={s.icon} alt={s.name} className="h-5 w-5" />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="mx-auto w-[380px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={hero.profileImage}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
