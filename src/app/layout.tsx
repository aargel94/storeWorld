import { Roboto } from "next/font/google";
import {Header} from "../components/shared/header";
import {Footer} from "../components/shared/footer";
import 'app/sass/globals.sass'

const roboto = Roboto({
    weight: ['100', '300', '500', '700'],
    subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
            <Header />
            {children}
            <Footer />
      </body>
    </html>
  );
}
