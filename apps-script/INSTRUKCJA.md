# Dziennik postępów w Arkuszu Google – konfiguracja (ok. 15 minut, raz)

Po tej konfiguracji każde ukończone ćwiczenie i sprawdzian syna zapisuje się w Twoim arkuszu, a postęp jest wspólny dla telefonu i komputera.

## 1. Arkusz
1. Otwórz **sheets.new** (nowy Arkusz Google) na swoim koncie.
2. Nazwij go np. **Español – dziennik**.

## 2. Skrypt
1. W arkuszu: **Rozszerzenia → Apps Script**.
2. Usuń wszystko z edytora i wklej całą zawartość pliku `Code.gs` (z tego folderu).
3. Kliknij 💾 **Zapisz**.

## 3. Przygotowanie zakładek
1. Na górze edytora wybierz funkcję **setup** i kliknij **Uruchom**.
2. Google poprosi o uprawnienia: **Przejrzyj uprawnienia** → wybierz swoje konto.
3. Zobaczysz ostrzeżenie „Google nie zweryfikował tej aplikacji”. To normalne – to Twój własny skrypt. Kliknij **Zaawansowane → Przejdź do projektu (niebezpieczne)** → **Zezwól**.
4. W arkuszu pojawią się zakładki **Dziennik** i **Podsumowanie**.

## 4. Udostępnienie skryptu aplikacji
1. W edytorze: **Wdróż → Nowe wdrożenie**.
2. Kliknij ⚙️ przy „Wybierz typ” → **Aplikacja internetowa**.
3. Ustaw:
   - **Wykonaj jako:** Ja
   - **Kto ma dostęp:** Każdy
4. **Wdróż** i skopiuj **adres URL aplikacji internetowej** (kończy się na `/exec`).

## 5. Podłączenie aplikacji
Wyślij mi ten adres w rozmowie – wpiszę go do `config.js` i opublikuję aplikację.
(Albo sam: w pliku `app/config.js` wpisz go między apostrofy: `export const JOURNAL_URL = 'https://script.google.com/macros/s/…/exec';`)

## Co zobaczysz
- **Dziennik** – jeden wiersz na każde ćwiczenie/sprawdzian: data, imię, krok, wynik, zaliczony, lista błędnych pytań, czas.
- **Podsumowanie** – najlepszy wynik sprawdzianu na krok, liczba podejść, kiedy ostatnio, ile dni nauki w ostatnim tygodniu.

## Gdy zmienisz skrypt
**Wdróż → Zarządzaj wdrożeniami → ✏️ → Wersja: Nowa wersja → Wdróż.** Adres zostaje ten sam.

## Bezpieczeństwo
Adres skryptu pozwala tylko dopisywać wiersze do tego jednego arkusza i odczytywać wyniki sprawdzianów. Arkusza nie widzi nikt poza Tobą. Nie udostępniaj adresu publicznie.
