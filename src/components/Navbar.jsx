export const Navlinks = [
  {
    id: 1,
    name: "home",
    link: "/#home",
  },
  {
    id: 2,
    name: "about",
    link: "/#about",
  },
  {
    id: 3,
    name: "projects",
    link: "/#projects",
  },
  {
    id: 4,
    name: "contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full">
      <div className="bg-opacity-45 bg-white backdrop-blur-md border-b-4">
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4">
          <a
            href="/#home"
            className="font-lacquer cursor-pointer mr-8 text-5xl hover:drop-shadow-custom-hov hover:scale-125 hover:rotate-6 duration-100"
          >
            :)
          </a>
          <ul className="flex items-center gap-8">
            {Navlinks.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="font-lacquer inline-block text-lg hover:drop-shadow-custom-hov hover:scale-110 duration-150"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
