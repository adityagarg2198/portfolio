import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t flex justify-between border-color w-full font-md">
      <section className="flex text-center">
        <p className="p-1.5 border-r border-color">find me in:</p>
        <a className="p-1.5 border-r border-color cursor-pointer">
          <Linkedin />
        </a>
      </section>
      <section className="flex border-l border-color gap-1 text-center max-w-24 p-1.5">
        <p className="hidden md:block">@adityagarg2198</p>
        <a href="">
          <Github />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
