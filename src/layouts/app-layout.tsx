import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { Navbar, Footer } from "@/components/partials";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function AppLayout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={` ${plusJakartaSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Sterling Technologies & Systems",
};
