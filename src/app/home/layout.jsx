import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
// import { IntlProviderWrapper } from './[locale]';


export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      <Slider />

      {children} {/* This will render the content of the Home page */}
      <Footer />
    </div>
  );
}

