import Link from "next/link";
import { Logo } from "./logo"
import { Container } from "./container";


export const Navbar = () => {

  const Links = [
    {
      name: "Feature",
      href: "/feature",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Social",
      href: "/social",
    },
    {
      name: "Pricing",
      href: "/pricing",
    }
  ];


  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex justify-between items-center p-4">
        <Logo />
        <div className="flex gap-4 items-center">
          {Links.map((link, idx) => (
              <Link
              key={idx}
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-800 font-medium">
                {link.name}
              </Link>
          ))}
        </div>
        <div className="gap-4 flex  items-center">
          <Link href="/login" className="text-sm">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-black text-sm rounded-md px-4 py-2 text-white"
          >
            Signup
          </Link>
        </div>
      </Container>
    </div>
  );
}
