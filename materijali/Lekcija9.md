# Lekcija 9: Prvi projekat u IntelliJ-u — klase, main metoda i osnovna sintaksa

## Cilj lekcije

Nakon ove lekcije, znaćete kako da napravite novi projekat i klasu u IntelliJ IDEA okruženju, razumećete pravila imenovanja projekata i klasa (**upper camel case / PascalCase**), znaćete šta znače ključne reči `public`, `class`, `static` i `void` u deklaraciji `main` metode, razumećete pojam **koda bloka** (curly braces) na nivou klase i metode, i naučićete razliku između `System.out.print` i `System.out.println`.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Projekat (project)** | Osnovna radna jedinica u IntelliJ-u koja objedinjuje sve fajlove, podešavanja i kod jednog programa. |
| **Upper camel case (Pascal case)** | Konvencija imenovanja gde se prvo slovo svake reči piše veliko, bez razmaka (npr. `HelloWorld`) — koristi se za nazive projekata i klasa. |
| **Lower camel case** | Konvencija imenovanja gde je prvo slovo prve reči malo, a svaka naredna reč počinje velikim slovom (npr. `myFirstNumber`) — koristi se za nazive promenljivih. |
| **Klasa (class)** | Osnovna građevinska jedinica Java programa, definisana ključnom rečju `class`; sadrži podatke i kod unutar svog tela (code block). |
| **Access modifier (modifikator pristupa)** | Ključna reč (npr. `public`) koja određuje koji delovi koda mogu pristupiti određenom elementu. |
| **Metoda (method)** | Skup od jedne ili više naredbi koje zajedno izvršavaju određenu operaciju. |
| **main metoda** | Posebna metoda koju Java traži kao **ulaznu tačku (entry point)** svakog programa — izvršavanje programa uvek počinje odatle. |
| **Kod blok (code block)** | Deo koda ograničen vitičastim zagradama `{ }` — može predstavljati telo klase, telo metode ili grupu naredbi. |

---

## 2. Detaljno objašnjenje

### 2.1 Kreiranje novog projekta u IntelliJ-u

Pri kreiranju novog projekta (**New Project**) u IntelliJ-u, potrebno je odrediti:

- **ime projekta** — u ovom kursu, na primer, `HelloWorld`;
- **lokaciju** projekta na disku (podrazumevano se koristi folder podešen prilikom konfiguracije IntelliJ-a);
- **jezik** — bira se **Java**;
- **JDK** — treba proveriti da odgovara ranije instaliranoj LTS verziji (npr. JDK 17);
- opciju **"Add sample code"** treba **isključiti**, jer ćemo kod pisati sami.

### 2.2 Pravila imenovanja — camel case i Pascal case

Iako je tehnički moguće koristiti razmake u imenu projekta (npr. `Hello World`), to se **ne preporučuje**, jer ime projekta postaje deo naziva foldera i fajlova na disku, a razmaci u putanjama mogu izazvati probleme u pojedinim operativnim sistemima i alatima.

Umesto razmaka, koristi se konvencija imenovanja nazvana **camel case**:

- **Lower camel case** — prva reč počinje malim slovom, a svaka naredna reč velikim (npr. `myFirstNumber`). Ovu konvenciju smo do sada koristili za **imena promenljivih**.
- **Upper camel case**, poznat i kao **Pascal case** — čak i prva reč počinje velikim slovom (npr. `HelloWorld`). Ova konvencija se koristi za **imena projekata i klasa**.

Napomena: ime projekta nije element Java jezika, već deo IntelliJ-eve organizacije fajlova — ali dobra je praksa primenjivati iste principe imenovanja i na projekat.

### 2.3 Struktura projekta i kreiranje klase

Nakon kreiranja projekta, IntelliJ automatski generiše osnovnu strukturu foldera, uključujući `.idea` folder (interni radni fajlovi IntelliJ-a, koji se ne diraju ručno) i `src` folder, gde se čuva izvorni kod programa.

Nova **klasa** se kreira desnim klikom na `src` folder → **New** → **Java Class**, uz unos imena klase u **upper camel case** stilu (npr. `FirstClass`). IntelliJ automatski generiše osnovni "skelet" koda:

```java
public class FirstClass {
}
```

U levom panelu (Project pane), klase se prepoznaju po plavoj ikonici sa slovom "C" pored imena fajla.

### 2.4 Ključne reči u deklaraciji main metode

IntelliJ nudi prečicu **`psvm`** + `Tab` koja automatski generiše kompletnu deklaraciju `main` metode:

```java
public static void main(String[] args) {
}
```

Svaka reč u ovoj liniji ima tačno određeno značenje:

- **`public`** — **access modifier (modifikator pristupa)**, koji određuje da metodi (ili klasi) mogu pristupiti drugi delovi koda. Za sada se `public` koristi svaki put kada se kreira nova klasa ili `main` metoda, kako bi imale pun pristup.
- **`static`** — ključna reč potrebna da bi Java mogla da pronađe `main` metodu i pokrene je bez potrebe za kreiranjem instance klase (detaljnije objašnjenje sledi kasnije u kursu, nakon uvoda u objektno orijentisano programiranje).
- **`void`** — označava da metoda **ne vraća nikakvu vrednost** (takođe detaljnije objašnjeno kasnije).
- **`main`** — ime metode; Java specifično traži metodu ovog imena kao **ulaznu tačku (entry point)** programa.
- **`(String[] args)`** — **parametar** metode, način prosleđivanja informacija metodi prilikom pokretanja (detalji kasnije u kursu).

**Ova deklaracija mora biti napisana tačno na ovaj način** — svaka izmena (npr. veliko slovo u `Public` umesto `public`) izaziva grešku, koju IntelliJ odmah ističe crvenom bojom, čak i pre pokretanja programa. Ovo je čest podsetnik da su Java greške često samo posledica pogrešne velike/male slovne oznake (case sensitivity).

### 2.5 Klasa i metoda kao kod blokovi

I **klasa** i **metoda** imaju svoje telo, ograničeno **vitičastim zagradama `{ }`** — ovaj koncept naziva se **kod blok (code block)**:

```java
public class FirstClass {
    public static void main(String[] args) {
        // telo main metode - takodje kod blok
    }
}
```

- Sve što se nalazi između spoljašnjih `{` i `}` predstavlja **telo klase**.
- Sve što se nalazi između unutrašnjih `{` i `}` (main metode) predstavlja **telo metode**.

Ovo je isti koncept vitičastih zagrada koji je ranije korišćen u JShell-u za grupisanje više naredbi — samo što ovde definiše granice klase, odnosno metode.

### 2.6 Pokretanje programa u IntelliJ-u

Za razliku od JShell-a, gde se kod izvršavao automatski pri pritisku na Enter, u IntelliJ-u je potrebno **eksplicitno pokrenuti** program. Ovo se može uraditi na nekoliko ekvivalentnih načina:

- klikom na zeleno dugme (strelicu) u gornjem desnom uglu prozora,
- klikom na zelenu strelicu pored broja linije (levo od koda),
- desnim klikom unutar `main` metode i izborom opcije **Run**.

Nakon pokretanja, IntelliJ **kompajlira** kod pomoću JDK-a, a zatim prikazuje rezultat u **Run panelu** na dnu ekrana. Poruka **"Process finished with exit code 0"** znači da je program uspešno završen bez grešaka — vrednost `0` je uobičajena oznaka uspešnog završetka u programiranju.

### 2.7 Greška: nedostajući navodnik i osetljivost na velika/mala slova

Ako se u string literalu (npr. `"Hello World"`) slučajno izostavi zatvarajući navodnik, IntelliJ **odmah** (pre pokretanja) podvlači problematičan deo koda i, prilikom prelaska mišem preko njega, prikazuje poruku **"Illegal line end in string literal"** — ekvivalent JShell-ovoj grešci "unclosed string literal".

Slično tome, ako se bilo koja ključna reč u `main` deklaraciji pogrešno napiše velikim/malim slovom (npr. `Public` umesto `public`), IntelliJ prijavljuje grešku, jer Java **razlikuje velika i mala slova (case-sensitive)** — ovo je jedan od najčešćih izvora grešaka kod početnika.

### 2.8 System.out.print naspram System.out.println

Kada se u istoj `main` metodi koristi **više uzastopnih** `System.out.print` naredbi, njihov tekst se ispisuje **nadovezano, na istoj liniji**, bez razdvajanja:

```java
System.out.print("Hello, Tim");
System.out.print("Hello World");
// ispis: Hello, TimHello World (sve na istoj liniji)
```

Da bi se svaki ispis prikazao u **novom redu**, koristi se **`System.out.println`** (skraćeno od "print line") — funkcioniše identično kao `print`, ali dodatno ubacuje prelazak u novi red nakon ispisa:

```java
System.out.println("Hello, Tim");
System.out.println("Hello World");
// ispis:
// Hello, Tim
// Hello World
```

Zbog ove pogodnosti, `System.out.println` se u praksi koristi **mnogo češće** od `System.out.print`.

---

## 3. Kodni primeri

### 3.1 Osnovni "skelet" klase koji generiše IntelliJ

```java
public class FirstClass {
}
```

### 3.2 Kompletna main metoda generisana prečicom psvm

```java
public class FirstClass {
    public static void main(String[] args) {
    }
}
```

### 3.3 Prvi program — ispis teksta

```java
public class FirstClass {
    public static void main(String[] args) {
        System.out.print("Hello World");
    }
}
```

### 3.4 Izmena teksta (rešenje izazova iz lekcije)

```java
public class FirstClass {
    public static void main(String[] args) {
        System.out.println("Hello, Tim");
    }
}
```

### 3.5 Greška — nedostajući zatvarajući navodnik (samo ilustracija)

```java
// System.out.print("Hello World); // GRESKA: Illegal line end in string literal

System.out.print("Hello World"); // ISPRAVNO - navodnici moraju biti zatvoreni
```

### 3.6 Razlika između print i println

```java
public class HelloDemo {
    public static void main(String[] args) {
        System.out.print("Hello, Tim");
        System.out.print("Hello World");
        // ispis (na istoj liniji): Hello, TimHello World

        System.out.println("Hello, Tim");
        System.out.println("Hello World");
        // ispis (u dva reda):
        // Hello, Tim
        // Hello World
    }
}
```

### 3.7 Kompletan Java program koji objedinjuje primere

```java
public class Hello {
    public static void main(String[] args) {
        // Koriscenje println za citljiv ispis u posebnim redovima
        System.out.println("Hello, Tim");
        System.out.println("Hello World");

        // Poredjenje sa print - ispisuje se sve u istom redu
        System.out.print("Ovo ");
        System.out.print("je ");
        System.out.println("jedan red.");
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo napravili prvi pravi korak u IntelliJ IDEA okruženju — kreirali smo projekat i klasu, poštujući konvencije imenovanja (**upper camel case / Pascal case** za projekte i klase, nasuprot **lower camel case** za promenljive). Upoznali smo strukturu deklaracije `main` metode (`public static void main(String[] args)`) i objasnili ulogu svake ključne reči: `public` kao **access modifier**, `static` i `void` (detaljnije kasnije), i `main` kao **ulaznu tačku** svakog Java programa. Naučili smo pojam **kod bloka** — tela klase i tela metode, ograničenog vitičastim zagradama. Videli smo kako IntelliJ **pre pokretanja** programa otkriva greške poput nedostajućeg navodnika ili pogrešne velike/male slovne oznake, i naučili razliku između **`System.out.print`** (ispis bez prelaska u novi red) i **`System.out.println`** (ispis sa prelaskom u novi red), koji se u praksi koristi mnogo češće.

### Zadatak za samostalan rad

1. Kreirajte novi projekat u IntelliJ-u sa imenom u upper camel case stilu (npr. `MojPrviProjekat`) i proverite da je JDK ispravno povezan.
2. Kreirajte novu klasu po imenu `Pozdrav` i unutar `main` metode ispišite svoje ime i prezime koristeći `System.out.println`.
3. Namerno napravite grešku uklanjanjem zatvarajućeg navodnika iz string literala, zabeležite tačnu poruku greške koju prikazuje IntelliJ, a zatim je ispravite.
4. Napišite program koji koristi tri uzastopne `System.out.print` naredbe (bez `println`) i objasnite (kao komentar) zašto se sav tekst ispisuje u jednom redu; zatim ih zamenite sa `println` i uporedite izlaz.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto izmena reči `public` u `Public` u deklaraciji `main` metode izaziva grešku, povezujući to sa pojmom case sensitivity koji smo upoznali još u JShell lekcijama.
