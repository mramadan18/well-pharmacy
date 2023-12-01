import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="well-medic,pharmacy,drugs,medicine" />
        <meta name="keywords" content="well-medic,pharmacy,drugs,medicine" />
        <meta name="author" content="well-medic,pharmacy,drugs,medicine" />
      </Head>
      <body className="pb-[80px] lg:pb-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
