import React from "react";
import Markdown from "react-markdown";
import styles from "./Documentation.module.css";

const help_info = `# Strona Pomocy BugTracker

## Witaj w centrum pomocy BugTracker

Cieszymy się, że korzystasz z BugTracker. Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania (FAQ). Jeśli nie znajdziesz odpowiedzi na swoje pytanie, prosimy o kontakt z naszym zespołem wsparcia.

## Najczęściej zadawane pytania (FAQ)

### Rejestracja i Konto

**1. Jak mogę założyć konto w BugTracker?**  
Aby założyć konto, przejdź na stronę rejestracji [tutaj](https://www.BugTracker.com/register), wypełnij wymagane informacje i postępuj zgodnie z instrukcjami na ekranie.

**2. Zapomniałem hasła. Jak mogę je odzyskać?**  
Aby odzyskać hasło, przejdź na stronę [odzyskiwania hasła](https://www.BugTracker.com/forgot-password), wprowadź swój adres e-mail i postępuj zgodnie z instrukcjami, aby zresetować hasło.

**3. Jak mogę zaktualizować swoje dane kontaktowe?**  
Zaloguj się na swoje konto, przejdź do sekcji "Ustawienia konta" i zaktualizuj swoje dane kontaktowe.

### Korzystanie z Usług

**1. Jak mogę zainstalować aplikację BugTracker na moim urządzeniu mobilnym?**  
Aplikację BugTracker można pobrać ze sklepu Google Play dla urządzeń z systemem Android oraz z App Store dla urządzeń z systemem iOS. Wyszukaj "BugTracker" i postępuj zgodnie z instrukcjami instalacji.

**2. Czy mogę korzystać z BugTracker offline?**  
Tak, BugTracker oferuje aplikacje offline, które można pobrać i używać bez połączenia z Internetem. Funkcjonalność offline jest jednak ograniczona i synchronizacja danych nastąpi, gdy urządzenie ponownie połączy się z Internetem.

**3. Jak mogę udostępniać swoje projekty innym użytkownikom?**  
Możesz udostępniać swoje projekty, przechodząc do projektu, który chcesz udostępnić, i klikając opcję "Udostępnij". Wprowadź adres e-mail osoby, której chcesz udostępnić projekt, i wybierz odpowiednie uprawnienia.

### Subskrypcje i Płatności

**1. Jak mogę zaktualizować informacje o płatności?**  
Zaloguj się na swoje konto, przejdź do sekcji "Subskrypcje" i wybierz opcję "Zaktualizuj informacje o płatności". Wprowadź nowe dane karty kredytowej lub inne informacje płatnicze.

**2. Jak mogę anulować subskrypcję?**  
Aby anulować subskrypcję, przejdź do sekcji "Subskrypcje" na swoim koncie i wybierz opcję "Anuluj subskrypcję". Postępuj zgodnie z instrukcjami na ekranie.

**3. Czy mogę uzyskać zwrot pieniędzy za niewykorzystaną subskrypcję?**  
Zwroty są rozpatrywane indywidualnie. Prosimy o kontakt z naszym działem wsparcia pod adresem support@BugTracker.com, aby omówić swoją sytuację.

### Bezpieczeństwo i Prywatność

**1. Jak BugTracker chroni moje dane?**  
BugTracker stosuje zaawansowane środki bezpieczeństwa, takie jak szyfrowanie danych, zapory ogniowe, systemy wykrywania intruzów oraz regularne audyty bezpieczeństwa, aby chronić Twoje dane.

**2. Gdzie mogę znaleźć Politykę Prywatności BugTracker?**  
Nasza Polityka Prywatności jest dostępna [tutaj](https://www.BugTracker.com/privacy).

**3. Jak mogę zgłosić podejrzane działanie na moim koncie?**  
Jeśli zauważysz jakiekolwiek podejrzane działanie na swoim koncie, natychmiast skontaktuj się z naszym działem bezpieczeństwa pod adresem security@BugTracker.com.

## Dodatkowe zasoby

### Samouczki i dokumentacja

- [Podręcznik użytkownika](https://www.BugTracker.com/user-guide)
- [Samouczki wideo](https://www.BugTracker.com/tutorials)
- [FAQ techniczne](https://www.BugTracker.com/technical-faq)

### Wsparcie techniczne

Jeśli potrzebujesz dodatkowej pomocy, nasz zespół wsparcia technicznego jest dostępny:

- **E-mail:** support@BugTracker.com
- **Telefon:** +48 987 654 321
- **Godziny pracy:** Poniedziałek - Piątek, 9:00 - 17:00

## Czekamy na Twoje pytania!

Dziękujemy za korzystanie z BugTracker. Jesteśmy tutaj, aby pomóc i zapewnić, że Twoje doświadczenie z naszymi usługami jest jak najlepsze.

`;
const Help = () => {
  return (
    <div className={styles.container}>
      <Markdown>{help_info}</Markdown>
    </div>
  );
};

export default Help;
