const Profile = ({ profile }) => {
  return (
    <section id="profile">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          {profile.title}
        </h2>
        <div className="grid grid-cols-3 gap-16 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-8">Basic Information</h3>
            <ul>
              {profile.basicInfo.map((item) => (
                <li key={item.label} className="flex gap-4 mb-4">
                  <span className="font-medium text-gray-600 w-32">
                    {item.label}
                  </span>
                  <span className="text-gray-900">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={profile.image}
              alt="Profile"
              className="w-64 rounded-2xl shadow-xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8">About Me</h3>
            <p className="leading-relaxed text-gray-700 max-w-md">
              {profile.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
