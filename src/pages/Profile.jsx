import { useState, useEffect } from "react";
import { Edit, Save, X, Camera, User } from "lucide-react";
import profileImg from "../assets/cartoon.jpg";
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const defaultProfile = {
    name: "Hafsa Abdullahi",
    faculty: "Computer Science",
    hobbies: "Reading, Gaming, Watching Football, Coding",
    bio: "Passionate computer science student with interests in web development and artificial intelligence. Always eager to learn new technologies and work on innovative projects that make a difference.",
    profileImage: profileImg,
  };
  const [profile, setProfile] = useState(defaultProfile);
  const [editProfile, setEditProfile] = useState(defaultProfile);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setProfile(parsedProfile);
      setEditProfile(parsedProfile);
    }
  }, []);

  const handleSave = () => {
    setProfile(editProfile);
    localStorage.setItem("studentProfile", JSON.stringify(editProfile));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditProfile({ ...editProfile, profileImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const shortedBio =
    !showBio && profile.bio.length > 100
      ? `${profile.bio.substring(0, 90)} ...`
      : profile.bio;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="glass-card p-8 rounded-2xl shadow hover-lift transition">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="h-14 w-14 text-white" />
              )}
            </div>
            {isEditing && (
              <label className="absolute -bottom-3 -right-3 w-9 h-9 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors">
                <Camera className="h-4 w-4 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Name + Faculty + Hobbies */}
          <div className="flex-1">
            {isEditing ? (
              <>
                <input
                  value={editProfile.name}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, name: e.target.value })
                  }
                  className="w-full text-2xl font-bold border-b border-border bg-transparent focus:outline-none focus:ring-0 mb-2"
                />
                <input
                  value={editProfile.faculty}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, faculty: e.target.value })
                  }
                  className="w-full text-muted-foreground border-b border-border bg-transparent focus:outline-none focus:ring-0 mb-4"
                />
                <input
                  value={editProfile.hobbies}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, hobbies: e.target.value })
                  }
                  className="w-full border-b border-border bg-transparent focus:outline-none focus:ring-0"
                />
              </>
            ) : (
              <>
                <h3 className="text-3xl font-bold mb-1">{profile.name}</h3>
                <p className="text-muted-foreground mb-4">{profile.faculty}</p>
                <div className="flex flex-wrap gap-3">
                  {profile.hobbies.split(",").map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/80 rounded-full text-sm"
                    >
                      {hobby.trim()}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-primary to-accent px-4 py-2 flex items-center gap-2  "
            >
              <Edit className="h-4 w-4" /> Edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="modern-button px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white flex items-center gap-2 shadow-none cursor-pointer hover:brightness-90 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={handleCancel}
                className="modern-button px-3 py-2 rounded-lg border border-border flex items-center gap-2 cursor-pointer hover:bg-gray-100 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          )}
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">About Me</h4>
          {isEditing ? (
            <textarea
              value={editProfile.bio}
              onChange={(e) =>
                setEditProfile({ ...editProfile, bio: e.target.value })
              }
              rows={4}
              className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none resize-none"
            />
          ) : (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4  ">
                {shortedBio}
              </p>
              <button
                onClick={() => setShowBio((prev) => !prev)}
                className="text-primary cursor-pointer "
              >
                {showBio ? "Show less" : "Show more"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
