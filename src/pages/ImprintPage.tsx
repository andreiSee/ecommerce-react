import { ScrollRestoration } from 'react-router-dom';
import conti, { EmailTypes } from '../utilities/conti';
import { useState } from 'react';
import App from '../App';

const infoConti = conti(EmailTypes.Inf);

const ImprintPage = () => {
  const [{ aContiP, dContiP }] = useState(infoConti);

  return (
    <App>
      <ScrollRestoration />
      <div className="imprint">
        <h1>Impressum</h1>

        <p>
          Andrei See
          <br />
          andreiSee websolutions
          <br />
          Ziegetsdorfer Stra&szlig;e ,87
          <br />
          93051 Regensburg
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +4917647950551
          <br />
          E-Mail: {aContiP + dContiP}
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE285027472
        </p>

        <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong>
          <br />
          exali AG - Das Versicherungsportal f&uuml;r Dienstleister und freie
          Berufe
          <br />
          Franz-Kobinger-Str. 9<br />
          86157 Augsburg
        </p>
        <p>
          <strong>Geltungsraum der Versicherung:</strong>
          <br />
          Deutschland
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </App>
  );
};

export default ImprintPage;
