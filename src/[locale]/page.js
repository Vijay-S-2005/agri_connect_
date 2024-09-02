// app/[locale]/page.js
import { FormattedMessage } from 'react-intl';

export default function Home() {
  return (
    <div>
      <h1>
        <FormattedMessage id="greeting" />
      </h1>
    </div>
  );
}
