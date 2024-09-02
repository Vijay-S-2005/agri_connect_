// // app/[locale]/layout.js
// import { IntlProvider } from 'react-intl';
// import { useLocale } from 'next-intl';
// import messagesEn from '../../locales/en/common.json';
// import messagesTa from '../../locales/ta/common.json';
// // import LanguageSwitcher from '../../components/LanguageSwitcher';
// import Header from '../components/Header';
// import '../globals.css';
// import { useRouter } from 'next/router';

// const messages = {
//   en: messagesEn,
//   ta: messagesTa,
// };

// export default function LocaleLayout({ children }) {
//   const {locale} = useRouter();
//   const [messages, setMessages] = useState({});
//   useEffect(() => {
//     // Load the messages dynamically based on locale
//     fetch(`/locales/${locale}/messages.json`)
//       .then(response => response.json())
//       .then(data => setMessages(data));
//   }, [locale]);
//   return (
//     <IntlProvider locale={locale} messages={messages}>
//       {/* <Header /> */}
//       <main>{children}</main>
//     </IntlProvider>
//   );
// }
