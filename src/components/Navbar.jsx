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
    <div className="fixed z-10 w-full flex items-center justify-between p-6">
      <div className="hover:scale-125 hover:rotate-6 hover:translate-x-2 duration-100">
        <a href="/#home" className="font-lacquer cursor-pointer mr-8 text-5xl hover:drop-shadow-custom-hov">
          :)
        </a>
      </div>
      <nav className="">
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
  );
};

export default Navbar;
