import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex ">
          <nav>
            <ul className="flex list-none place-content-start gap-10">
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Formação</a>
              </li>
              <li>
                <a href="">Experiências</a>
              </li>
              <li>
                <a href="">Portfólio</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="content-center mx-85 bg-amber-900 border-1 border-b-0 rounded-t-lg">
          <div className="">
            MAIN
          </div>
        </div>
      </main>
    </>
  );
}
