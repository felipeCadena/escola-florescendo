import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-10 space-y-10 max-sm:px-4 max-w-screen md:max-w-screen-md mx-auto md:border md:border-gray-300 md:rounded-xl md:p-10 md:shadow-md">
      <div className="text-center space-y-6">
        <Image
          src="/logo.png"
          alt="Logo do site"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="text-2xl md:text-3xl font-bold">
          Estamos em manutenção! 🔧
        </h1>

        <h1 className="font-bold">
          Vamos trazer uma nova versão do nosso querido site, mais moderna e
          cheia de novidades para você.
        </h1>
        <p>Agradecemos a sua compreensão e paciência durante esse processo.</p>

        <p>
          Em breve, estaremos de volta com uma experiência ainda melhor. 🎉 🥳
        </p>
        <p>Fiquem ligados. Vem coisa boa por aí! ✨</p>
      </div>

      <div className="flex flex-col gap-2 items-start md:w-1/2 mx-auto">
        <p className="font-bold">Contatos:</p>
        <p>🏡 Rua Marques de Pinedo 66, Laranjeiras</p>
        <p className="flex gap-2 items-center justify-center">
          <Image
            alt="logo instagram"
            src="/instagram.svg"
            width={20}
            height={20}
          />{" "}
          <Link
            href="https://www.instagram.com/escolaflorescendo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            @escolaflorescendo
          </Link>
        </p>
        <p>📞 21 98230-0040</p>
        <p>📱 21 2554-6055</p>
        <p>
          📧{" "}
          <a
            href="mailto:escola@florescendo.com.br"
            className="hover:underline"
          >
            escola@florescendo.com.br
          </a>
        </p>
      </div>
    </main>
  );
}
