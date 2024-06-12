import React from "react";
import Markdown from "react-markdown";
import styles from "./Documentation.module.css";

const security_info = `# Strona Informacyjna o Bezpieczeństwie BugTracker

## Wprowadzenie

W BugTracker priorytetem jest bezpieczeństwo danych naszych użytkowników. Poniżej przedstawiamy informacje na temat naszych praktyk i środków bezpieczeństwa, które stosujemy, aby chronić Twoje dane.

## Bezpieczeństwo danych

### Szyfrowanie

- **Szyfrowanie danych w spoczynku**: Wszystkie dane przechowywane na naszych serwerach są szyfrowane przy użyciu zaawansowanych algorytmów szyfrujących.
- **Szyfrowanie danych w tranzycie**: Dane przesyłane między Twoim urządzeniem a naszymi serwerami są chronione za pomocą szyfrowania SSL/TLS, co zapewnia poufność i integralność danych.

### Kontrola dostępu

- **Autoryzacja i uwierzytelnianie**: Użytkownicy muszą przejść proces uwierzytelniania, aby uzyskać dostęp do swoich kont. Wspieramy dwuskładnikowe uwierzytelnianie (2FA) dla dodatkowej warstwy bezpieczeństwa.
- **Zarządzanie uprawnieniami**: Dostęp do danych użytkowników jest ściśle kontrolowany i ograniczony do autoryzowanych pracowników, którzy potrzebują tego dostępu w ramach swoich obowiązków.

### Ochrona przed zagrożeniami

- **Zapory ogniowe i systemy wykrywania intruzów**: Nasze serwery są chronione za pomocą zapór ogniowych i systemów wykrywania oraz zapobiegania intruzjom (IDS/IPS), które monitorują i blokują podejrzane działania.
- **Regularne testy penetracyjne**: Regularnie przeprowadzamy testy penetracyjne i audyty bezpieczeństwa, aby identyfikować i naprawiać potencjalne luki w zabezpieczeniach.

## Zarządzanie danymi

### Kopie zapasowe

- **Regularne kopie zapasowe**: Regularnie tworzymy kopie zapasowe wszystkich danych użytkowników, aby zapewnić możliwość ich odzyskania w przypadku awarii systemu lub innych incydentów.
- **Przechowywanie kopii zapasowych**: Kopie zapasowe są przechowywane w bezpiecznych lokalizacjach, z dala od głównych serwerów, aby zapewnić ich dostępność w sytuacjach awaryjnych.

### Bezpieczeństwo fizyczne

- **Bezpieczne centra danych**: Nasze serwery są hostowane w centrach danych, które spełniają najwyższe standardy bezpieczeństwa fizycznego, w tym kontrolę dostępu, monitoring i zabezpieczenia przeciwpożarowe.
- **Kontrola dostępu fizycznego**: Dostęp do naszych centrów danych jest ściśle kontrolowany i ograniczony do autoryzowanego personelu.

## Edukacja i świadomość

### Szkolenia pracowników

- **Szkolenia z zakresu bezpieczeństwa**: Nasi pracownicy regularnie uczestniczą w szkoleniach z zakresu bezpieczeństwa, aby być na bieżąco z najnowszymi zagrożeniami i najlepszymi praktykami w zakresie ochrony danych.
- **Polityki i procedury**: Pracownicy są zobowiązani do przestrzegania surowych polityk i procedur dotyczących bezpieczeństwa informacji.

## Reagowanie na incydenty

### Zgłaszanie incydentów

- **Zgłaszanie naruszeń**: Jeśli podejrzewasz naruszenie bezpieczeństwa lub zauważysz podejrzane działania, prosimy o natychmiastowe zgłoszenie tego faktu na adres security@BugTracker.com.
- **Procedury reagowania**: Posiadamy procedury reagowania na incydenty, które umożliwiają szybkie i skuteczne działania w przypadku naruszenia bezpieczeństwa.

## Kontakt

Jeśli masz jakiekolwiek pytania dotyczące bezpieczeństwa danych lub chcesz zgłosić incydent, skontaktuj się z naszym zespołem ds. bezpieczeństwa pod adresem security@BugTracker.com.

`;
const Security = () => {
  return (
    <div className={styles.container}>
      <Markdown>{security_info}</Markdown>
    </div>
  );
};

export default Security;
