const Footer = () => {
  const footerNavs = [
    {
      href: "/",
      name: "Terms",
    },
    {
      href: "/",
      name: "License",
    },
    {
      href: "/",
      name: "Privacy",
    },
    {
      href: "/",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
        <p>© 2022 Float UI Inc. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
          {footerNavs.map((item, index) => (
            <li key={index} className="text-gray-800 hover:text-gray-500 duration-150">
              <a key={index} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
