import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Profile = ({ profile }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="profile"
      className={`${isDark ? "bg-[#171043]" : "bg-indigo-700"} text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="hidden md:block">
          <h2 className="text-6xl font-bold mb-16 text-lime-200">
            {profile.title}
          </h2>

          <div className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-16 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-white">
                Basic Information
              </h3>

              <ul className="grid gap-y-3">
                {profile.basicInfo.map((item) => (
                  <li
                    key={item.label}
                    className="grid grid-cols-[180px_1fr] mb-4"
                  >
                    <span className="text-lime-200 text-lg font-semibold">
                      {item.label}
                    </span>
                    <span className="text-white/90">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                src={profile.image}
                alt="Profile"
                className="w-[320px] h-[320px] rounded-2xl shadow-2xl object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8">About Me</h3>
              <p className="leading-relaxed text-white/80 max-w-md whitespace-pre-line text-lg">
                {profile.aboutText}
              </p>
            </div>
          </div>
        </div>

        {/*MOBILE*/}
        <div className="md:hidden">
          <h2 className="text-4xl font-bold text-center mb-12 text-lime-200">
            {profile.title}
          </h2>

          <div className="flex justify-center mb-10">
            <img
              src={profile.image}
              alt="Profile"
              className="w-[240px] h-[240px] rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Basic Information
            </h3>

            <ul className="space-y-4">
              {profile.basicInfo.map((item) => (
                <li key={item.label}>
                  <span className="block text-lime-200 font-semibold">
                    {item.label}
                  </span>
                  <span className="text-white/90">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              About Me
            </h3>
            <p className="text-white/80 leading-relaxed whitespace-pre-line text-base text-center">
              {profile.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
