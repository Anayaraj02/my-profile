"use client";
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };
const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-8 py-4">
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative font-semibold text-gray-700 dark:text-gray-200 hover:text-purple-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </div>
  );
}
