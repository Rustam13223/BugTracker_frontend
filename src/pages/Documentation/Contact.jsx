import React from "react";
import Markdown from "react-markdown";
import styles from "./Documentation.module.css";
const contact = `# Strona Kontaktowa BugTracker

## Jak się z nami skontaktować?

Jeśli masz jakiekolwiek pytania, potrzebujesz wsparcia lub chciałbyś uzyskać więcej informacji na temat naszych usług, prosimy o kontakt. Poniżej znajdują się różne sposoby, jakimi możesz się z nami skontaktować.

### Dane kontaktowe

#### Adres główny

BugTracker Sp. z o.o.  
ul. Przykładowa 123  
00-001 Warszawa  
Polska

#### Adres e-mail

- **Wsparcie techniczne:** support@BugTracker.com
- **Sprzedaż:** sales@BugTracker.com
- **Zagadnienia prawne:** legal@BugTracker.com
- **Zgłaszanie incydentów bezpieczeństwa:** security@BugTracker.com
- **Ogólne zapytania:** info@BugTracker.com

#### Numery telefonów

- **Biuro główne:** +48 123 456 789
- **Wsparcie techniczne:** +48 987 654 321
- **Sprzedaż:** +48 456 789 012

### Godziny pracy

Nasze biura są otwarte od poniedziałku do piątku, w godzinach od 9:00 do 17:00.

### Formularz kontaktowy

Jeśli wolisz, możesz skorzystać z naszego formularza kontaktowego na stronie internetowej. Wypełnij wszystkie wymagane pola, a my skontaktujemy się z Tobą tak szybko, jak to możliwe.

[Formularz Kontaktowy]

### Media społecznościowe

Możesz również skontaktować się z nami za pośrednictwem naszych mediów społecznościowych:

- [Facebook]
- [Twitter]
- [LinkedIn]
- [Instagram]

### Adresy biur regionalnych

#### Biuro Kraków

BugTracker Sp. z o.o.  
ul. Przykładowa 456  
31-001 Kraków  
Polska

#### Biuro Wrocław

BugTracker Sp. z o.o.  
ul. Przykładowa 789  
50-001 Wrocław  
Polska

### Mapy i wskazówki dojazdu

Aby uzyskać wskazówki dojazdu do naszych biur, odwiedź naszą stronę [Lokalizacje] i wybierz odpowiednie biuro.

## Czekamy na kontakt!

Dziękujemy za zainteresowanie BugTracker. Czekamy na kontakt i chętnie pomożemy w każdej sprawie.

`;
const Contact = () => {
  return (
    <div className={styles.container}>
      <Markdown>{contact}</Markdown>
    </div>
  );
};

export default Contact;
