const Home = () => {
  return (
    <section className="flex mx-auto items-center py-10 px-2 gap-10 h-full">
      <section className="flex flex-col gap-6 w-fit">
        <section className="flex flex-col">
          <p className="font-lg">Hi all. I am</p>
          <h1 className="heading-h1">Aditya Garg</h1>
          <h4 className="heading-h4">&gt; Software Developer</h4>
        </section>
        <section className="flex flex-col gap-1">
          <p className="hidden md:block font-md">
            // complete the game to continue
          </p>
          <p className="font-md">// find my profile on Github:</p>
          <p className="font-md heading-md">
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githubLink</span> ={" "}
            <a
              className="link-forground break-all"
              href={"https://github.com/adityagarg2198"}
            >
              "https://github.com/adityagarg2198"
            </a>
          </p>
        </section>
      </section>
      <section className="hidden md:block">game</section>
    </section>
  );
};

export default Home;
