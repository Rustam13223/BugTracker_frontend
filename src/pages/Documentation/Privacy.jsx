import React from "react";
import Markdown from "react-markdown";
import styles from "./Documentation.module.css";

const privacy = `# Polityka Prywatności BugTracker

## Wprowadzenie

Twoja prywatność jest dla nas ważna. W niniejszej Polityce Prywatności wyjaśniamy, jakie informacje zbieramy, jak je wykorzystujemy i chronimy oraz jakie masz prawa w związku z tymi informacjami.

## Jakie informacje zbieramy?

### Dane osobowe

Możemy zbierać dane osobowe, takie jak imię i nazwisko, adres e-mail, numer telefonu, adres fizyczny oraz inne informacje, które podajesz podczas rejestracji konta, subskrypcji naszych usług, korzystania z naszych usług lub komunikowania się z nami.

### Dane techniczne

Możemy zbierać informacje techniczne dotyczące urządzeń, z których korzystasz, aby uzyskać dostęp do naszych usług, takie jak adres IP, typ przeglądarki, system operacyjny, typ urządzenia oraz inne dane techniczne.

### Dane dotyczące użytkowania

Możemy zbierać informacje o tym, jak korzystasz z naszych usług, takie jak strony, które odwiedzasz, czas spędzony na poszczególnych stronach, działania podejmowane w ramach naszych usług oraz inne dane dotyczące korzystania.

## Jak wykorzystujemy zebrane informacje?

### Świadczenie i doskonalenie usług

Wykorzystujemy zebrane informacje, aby świadczyć nasze usługi, zarządzać Twoim kontem, odpowiadać na Twoje zapytania oraz doskonalić nasze usługi.

### Komunikacja

Możemy wykorzystywać Twoje dane osobowe do komunikowania się z Tobą, wysyłania powiadomień o zmianach w naszych usługach, ofertach promocyjnych oraz innych informacji, które mogą Cię zainteresować.

### Analiza i badania

Możemy wykorzystywać zebrane dane do analizy i badań, aby lepiej zrozumieć, jak korzystasz z naszych usług, oraz w celu doskonalenia naszych usług.

## Jak chronimy Twoje informacje?

### Środki bezpieczeństwa

Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane osobowe przed nieautoryzowanym dostępem, ujawnieniem, modyfikacją lub zniszczeniem.

### Przechowywanie danych

Przechowujemy Twoje dane osobowe przez okres niezbędny do realizacji celów, dla których zostały zebrane, lub zgodnie z wymogami prawa.

## Twoje prawa

### Dostęp do danych

Masz prawo do dostępu do swoich danych osobowych oraz do uzyskania kopii danych, które przechowujemy.

### Korekta danych

Masz prawo do żądania korekty swoich danych osobowych, jeśli są one nieprawidłowe lub niekompletne.

### Usunięcie danych

Masz prawo do żądania usunięcia swoich danych osobowych, jeśli nie są one już potrzebne do celów, dla których zostały zebrane, lub jeśli wycofasz swoją zgodę na ich przetwarzanie.

### Sprzeciw wobec przetwarzania

Masz prawo do wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych, jeśli przetwarzanie odbywa się na podstawie naszych prawnie uzasadnionych interesów.

## Zmiany w Polityce Prywatności

Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Wszelkie zmiany zostaną opublikowane na naszej stronie internetowej oraz poinformujemy Cię o nich drogą e-mailową, jeśli zmiany będą znaczące.

## Kontakt

Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące niniejszej Polityki Prywatności, skontaktuj się z nami pod adresem privacy@BugTracker.com.

`;
const Privacy = () => {
  return (
    <div className={styles.container}>
      <Markdown>{privacy}</Markdown>
    </div>
  );
};

export default Privacy;
