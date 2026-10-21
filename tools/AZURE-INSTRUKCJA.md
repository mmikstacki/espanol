# Nagrania MP3 – konto i klucz Microsoft Azure Speech (ok. 15 minut, raz)

Klucz służy tylko do jednorazowego wygenerowania nagrań na Twoim komputerze. Nie trafia do aplikacji ani na GitHuba.

## 1. Konto Azure
1. Wejdź na **azure.microsoft.com/free** → **Zacznij bezpłatnie** / **Try Azure for free**.
2. Zaloguj się kontem Microsoft (np. Outlook/Hotmail) albo załóż nowe.
3. Uzupełnij dane i weryfikację telefonem. Azure poprosi o kartę – służy do weryfikacji tożsamości. Plan, który wybierzemy niżej (**F0 – bezpłatny**), nie nalicza opłat: po wyczerpaniu limitu po prostu przestaje działać do kolejnego miesiąca.

## 2. Zasób „Speech”
1. Wejdź na **portal.azure.com**.
2. Na górze w wyszukiwarce wpisz **Speech** i wybierz **Speech services** (może się też nazywać „Azure AI Speech”) → **+ Utwórz / Create**.
3. Wypełnij:
   - **Subscription:** Twoja subskrypcja (np. „Azure subscription 1”)
   - **Resource group:** **Utwórz nową** → nazwa np. `espanol`
   - **Region:** **West Europe** (albo inny w Europie – zapamiętaj, który)
   - **Name:** np. `espanol-glos-<twoje-inicjały>` (musi być unikalna)
   - **Pricing tier:** **Free F0** ⚠️ ważne – nie wybieraj S0
4. **Review + create** → **Create**. Po chwili: **Go to resource**.

## 3. Klucz
1. W zasobie po lewej: **Keys and Endpoint** (Klucze i punkt końcowy).
2. Skopiuj **KEY 1** oraz **Location/Region** (np. `westeurope`).

## 4. Wklej klucz do pliku na komputerze
1. W folderze `3-Projects/espanol-app/app/` utwórz plik **`.env.local`** (np. w Notatniku: Plik → Zapisz jako → Typ: *Wszystkie pliki*, nazwa `.env.local`).
2. Wpisz dwie linie (bez spacji wokół `=`):
   ```
   AZURE_SPEECH_KEY=tu-wklej-KEY-1
   AZURE_SPEECH_REGION=westeurope
   ```
3. Zapisz. Plik jest wykluczony z Gita (`.gitignore`) – nie wyślemy go na GitHuba.

**Nie wklejaj klucza w rozmowie** – wystarczy, że napiszesz mi „klucz gotowy”, a ja uruchomię generowanie.

## Co dalej
Skrypt nagra każde hiszpańskie słowo i zdanie z lekcji głosem **Elvira (es-ES, Hiszpania)**. Darmowy plan pozwala na ok. 20 nagrań na minutę, więc kroki 1–3 (130 nagrań) zajmą kilka minut, cała lekcja – ok. 40 minut (robi się samo w tle).

## Bezpieczeństwo
- Gdyby klucz kiedyś wyciekł: w zasobie → **Keys and Endpoint** → **Regenerate Key 1**. Stary klucz przestaje działać.
- Po wygenerowaniu wszystkich lekcji możesz zasób usunąć – nagrania zostają w aplikacji.
