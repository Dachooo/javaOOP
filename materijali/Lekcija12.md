# Lekcija 12: Ključne reči, izrazi, naredbe, whitespace i uvlačenje koda

## Cilj lekcije

Nakon ove lekcije, znaćete šta su **rezervisane ključne reči (keywords)** u Javi i zašto se ne mogu koristiti kao identifikatori, jasno ćete razlikovati tri hijerarhijske jedinice Java koda — **izraz (expression)**, **naredbu (statement)** i **kod blok (code block)**, i razumećete koncept **whitespace-a (razmaka)** i **uvlačenja (indentation)** koda, kao i zašto su, iako ih Java ignoriše prilikom kompajliranja, ključni za čitljivost koda.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Ključna reč (keyword)** | Rezervisana reč u Javi (npr. `int`, `if`, `class`) koja ima posebno, unapred definisano značenje i ne može se koristiti kao ime promenljive, klase ili metode. |
| **Kontekstualna ključna reč** | Reč koja je ključna samo u određenim, specifičnim situacijama (uvedeno od JDK 17), za razliku od potpuno rezervisanih reči. |
| **Identifikator (identifier)** | Ime koje programer dodeljuje elementu koda — promenljivoj, klasi, metodi itd. |
| **Izraz (expression)** | Deo koda koji se izračunava u **jednu jedinstvenu vrednost**; sastoji se od vrednosti, promenljivih i operatora. |
| **Naredba (statement)** | Samostalna jedinica koda koja predstavlja kompletnu radnju — obično se sastoji od izraza plus tipa podatka (kod deklaracije) i tačka-zapete. |
| **Kod blok (code block)** | Skup od nula, jedne ili više naredbi, obično grupisanih vitičastim zagradama `{ }` radi postizanja jednog zajedničkog cilja. |
| **Whitespace (razmak)** | Bilo koji dodatni razmak (horizontalni ili vertikalni) u kodu, koji Java kompajler u potpunosti ignoriše, ali koji poboljšava čitljivost za ljude. |
| **Uvlačenje (indentation)** | Konzistentno pomeranje udesno delova koda unutar kod blokova, radi jasnijeg prikaza logičke strukture programa. |

---

## 2. Detaljno objašnjenje

### 2.1 Ključne reči u Javi

Java ima ukupno **51 rezervisanu ključnu reč** (npr. `boolean`, `double`, `float`, `if`, `class`, `public`, `static`, `void`), definisanih u zvaničnoj specifikaciji Java jezika. Ove reči imaju **strogo definisano značenje** i **ne mogu se koristiti** kao imena promenljivih, klasa, metoda ili bilo kog drugog **identifikatora** u programu.

Pored potpuno rezervisanih reči, od **JDK 17** Java ima i **16 kontekstualnih ključnih reči** — reči koje su ključne samo u specifičnim situacijama, dok se u drugim kontekstima mogu koristiti slobodno. Detaljnija obrada pojedinačnih ključnih reči sledi tokom čitavog kursa, kako se svaka od njih uvodi.

### 2.2 Zašto se ključna reč ne može koristiti kao ime promenljive

Pokušaj da se ključna reč iskoristi kao ime promenljive izaziva grešku kompajlera:

```java
int int = 5; // GRESKA: identifier expected
```

IntelliJ prijavljuje grešku **"identifier expected"**, jer reč `int` prepoznaje isključivo kao tip podatka, a ne kao moguće ime promenljive. Međutim, ako se ključnoj reči doda dodatni karakter (čime prestaje da bude **identična** ključnoj reči), ime postaje validno:

```java
int int2 = 5; // ISPRAVNO - "int2" nije rezervisana rec, samo je delimicno sadrzi
```

**Pravilo:** nijedan **identifikator** (ime promenljive, klase, metode itd.) ne sme biti **identičan** rezervisanoj ključnoj reči. Ako se u kodu pojave neobične greške ("identifier expected" i slično), vredi proveriti da li je slučajno iskorišćena ključna reč kao ime.

### 2.3 Specijalne vrednosti: true, false i null

Pored formalnih ključnih reči, postoje i vrednosti koje **nisu zvanično ključne reči**, ali se, iz istog razloga, ne mogu koristiti kao identifikatori:

- **`true`** i **`false`** — nisu zvanično ključne reči, već **boolean literali (literalne vrednosti)**.
- **`null`** — takođe ne može biti ime identifikatora; njegovo puno značenje biće objašnjeno kasnije, u kontekstu klasa i objekata.

### 2.4 Tri hijerarhijske jedinice: izraz, naredba, kod blok

Pisanje Java koda liči na pisanje dokumenta — sastoji se od hijerarhijskih jedinica koje zajedno čine celinu:

1. **Izraz (expression)** — deo koda koji se izračunava u **jednu vrednost**. Sastoji se od vrednosti, promenljivih i operatora.
2. **Naredba (statement)** — samostalna jedinica rada; obično predstavlja **kompletnu liniju koda** (izraz plus, po potrebi, tip podatka na početku i tačka-zapeta na kraju).
3. **Kod blok (code block)** — skup od nula, jedne ili više naredbi, grupisanih (obično vitičastim zagradama) radi ostvarivanja jednog zajedničkog cilja.

### 2.5 Prepoznavanje izraza unutar naredbe

Posmatrajmo primer:

```java
double kilometers = 100 * 1.60934;
```

- **Tip podatka** (`double`) i **tačka-zapeta** na kraju **nisu deo izraza**.
- **Izraz** je deo `kilometers = 100 * 1.60934` — sadrži promenljivu, vrednost i operatore (dodela i množenje).
- Dodavanjem tipa podatka na početku i tačka-zapete na kraju, izraz postaje **kompletna naredba**.

Složeniji primer sa `if` naredbom sadrži **više izraza** u jednoj celini:

```java
int highScore = 50;
if (highScore > 25) {
    highScore = 1000 + highScore; // bonus poeni
}
```

U ovom kodu možemo identifikovati **četiri odvojena izraza**:

1. `highScore = 50` — izraz u deklaracionoj naredbi.
2. `highScore > 25` — izraz unutar zagrada `if` naredbe (sama `if` ključna reč, zagrade i kod blok **nisu** deo ovog izraza — oni čine `if` naredbu).
3. `1000 + highScore` — izraz izračunavanja unutar koda bloka.
4. `highScore = 1000 + highScore` — ceo taj red (bez tačka-zapete) je takođe, gledano u celini, jedan izraz — dodela rezultata prethodnog izraza promenljivoj.

### 2.6 Šta je naredba (statement)

**Naredba** je kompletna, samostalna linija koda. Na primer:

```java
int myVariable = 50;
```

Ovo je jedna kompletna naredba — dodavanjem tipa podatka na izraz `myVariable = 50` i tačka-zapete na kraju, dobija se validna Java naredba. Naredbe mogu biti razne vrste — deklaracije sa dodelom, inkrement/dekrement (`myVariable++;`), pozivi metoda (`System.out.println("Ovo je test");`), itd.

**Tačka-zapeta je ta koja jednu liniju kôda pretvara u naredbu** — bez nje, `myVariable++` je samo izraz, ne i kompletna naredba (uz izuzetke, poput `if` naredbe, koje ćemo dalje razmatrati).

### 2.7 Naredba raspoređena preko više linija

Java dozvoljava da se **jedna naredba** rasporedi preko **više linija koda**, sve dok se tačka-zapeta ne postavi pre nego što je naredba zaista završena:

```java
System.out.println("Ovaj tekst je "
    + "podeljen "
    + "u vise linija.");
```

Sve dok se na kraju svake "polu-linije" ne stavi tačka-zapeta, Java tretira ceo ovaj blok kao **jednu jedinstvenu naredbu** — identično kao da je napisana u jednoj liniji. Ovo je korisna tehnika za poboljšanje čitljivosti dužih naredbi.

### 2.8 Više naredbi u jednoj liniji (nije preporučeno)

Kao što je već pokazano u ranijim lekcijama u JShell-u, i u IntelliJ-u je moguće napisati **više naredbi u jednoj liniji**, razdvojenih tačka-zapetama:

```java
int anotherVariable = 50; myVariable--; System.out.println(myVariable);
```

Iako je ovo sintaksno validno, **generalno se ne preporučuje**, jer otežava čitanje koda — čitalac (uključujući i samog autora, nakon nekog vremena) lako može prevideti da se na jednoj liniji zapravo nalazi više odvojenih naredbi. **Preporuka:** jedna naredba po liniji, ili razbijanje duže naredbe na više linija radi čitljivosti (kao u prethodnoj sekciji).

### 2.9 Whitespace — razmaci koje Java ignoriše

**Whitespace** je bilo koji dodatni razmak (horizontalni, poput više uzastopnih razmaka, ili vertikalni, poput praznih linija) postavljen oko Java koda. Java **u potpunosti ignoriše** whitespace prilikom kompajliranja — sledeći primeri su za Javu potpuno identični:

```java
int myVariable=50;

int    myVariable    =    50   ;
```

Iako Java ne pravi razliku, **whitespace je izuzetno važan za čitljivost** koda od strane ljudi. Postoje i formalni vodiči za stil pisanja koda (npr. Google Java Style Guide) koji definišu preporučena pravila za razmake — na primer, preporuku da se prazna linija između deklaracija promenljivih koristi samo kada se time postiže jasnija logička grupacija.

IntelliJ nudi funkciju **"Reformat Code"** (dostupnu iz menija **Code**), koja automatski primenjuje standardne konvencije razmaka na selektovani kod — razdvaja naredbe u zasebne linije, dodaje razmake oko operatora dodele, itd.

### 2.10 Uvlačenje (indentation) koda

**Uvlačenje** je praksa pomeranja delova koda udesno (obično korišćenjem tabulatora), kako bi se vizuelno naglasila hijerarhijska struktura koda — na primer, sadržaj unutar `if` naredbe ili metode uvlači se u odnosu na okružujući kod:

```java
if (myVariable == 0) {
    System.out.println("It's now zero!");
}
```

Kod bez uvlačenja je znatno teže pratiti, iako je za Javu potpuno ispravan — uvlačenje **ne utiče na izvršavanje** programa, već isključivo na čitljivost. IntelliJ automatski uvlači kod prilikom otvaranja novih kod blokova, a funkcija **"Reformat Code"** može ispraviti i uvlačenje selektovanog dela koda koje je, iz bilo kog razloga, narušeno.

---

## 3. Kodni primeri

### 3.1 Greška — ključna reč kao ime promenljive

```java
// int int = 5; // GRESKA: identifier expected

int int2 = 5; // ISPRAVNO - ime samo delimicno sadrzi kljucnu rec
System.out.println(int2);
```

### 3.2 Izrazi unutar jednostavne deklaracije

```java
double kilometers = 100 * 1.60934; // izraz je "kilometers = 100 * 1.60934"
System.out.println(kilometers);
```

### 3.3 Prepoznavanje više izraza u složenijoj naredbi

```java
int highScore = 50; // izraz 1: highScore = 50

if (highScore > 25) { // izraz 2: highScore > 25
    highScore = 1000 + highScore; // izraz 3: 1000 + highScore, izraz 4: highScore = 1000 + highScore
}

System.out.println(highScore); // 1050
```

### 3.4 Naredba raspoređena preko više linija

```java
System.out.println("Ovaj tekst je "
    + "podeljen "
    + "u vise linija.");
// ispis: Ovaj tekst je podeljen u vise linija.
```

### 3.5 Više naredbi u jednoj liniji (samo ilustracija, nije preporučeno)

```java
int myVariable = 50;
int anotherVariable = 50; myVariable--; System.out.println(myVariable); // NIJE preporuceno stilski

// Preporuceni, citljiviji nacin:
anotherVariable = 50;
myVariable--;
System.out.println(myVariable);
```

### 3.6 Whitespace se ignoriše, ali utiče na čitljivost

```java
int myVariable=50;System.out.println(myVariable);
// Java ovo prihvata, ali citljivija verzija je:

int myVariableReadable = 50;
System.out.println(myVariableReadable);
```

### 3.7 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        // Deklaracija i izraz
        double kilometers = 100 * 1.60934;
        System.out.println("Kilometara: " + kilometers);

        // Slozenija naredba sa vise izraza
        int highScore = 50;
        if (highScore > 25) {
            highScore = 1000 + highScore; // bonus poeni
        }
        System.out.println("Rezultat: " + highScore);

        // Naredba raspodeljena preko vise linija radi citljivosti
        System.out.println("Ovaj tekst je "
            + "podeljen "
            + "u vise linija.");
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **ključne reči (keywords)** Jave — 51 rezervisanu reč (plus 16 kontekstualnih od JDK 17) koje se ne mogu koristiti kao **identifikatori** (imena promenljivih, klasa, metoda), kao ni specijalne vrednosti `true`, `false` i `null`. Zatim smo detaljno razložili tri hijerarhijske jedinice Java koda: **izraz** (deo koda koji se izračunava u jednu vrednost), **naredbu** (kompletna, samostalna linija koda, obično završena tačka-zapetom) i **kod blok** (grupa naredbi, obično ograničena vitičastim zagradama). Videli smo da se jedna naredba može rasporediti preko više linija (sve dok se tačka-zapeta ne postavi prevremeno), kao i da je moguće (ali nepreporučljivo) staviti više naredbi u jednu liniju. Na kraju smo obradili **whitespace** (razmake) i **uvlačenje (indentation)** — koncepte koje Java kompajler u potpunosti ignoriše, ali koji su ključni za čitljivost koda od strane ljudi, uz pomoć IntelliJ-eve funkcije **"Reformat Code"** za automatsko sređivanje formatiranja.

### Zadatak za samostalan rad

1. Pokušajte da deklarišete promenljivu sa imenom identičnim nekoj ključnoj reči (npr. `class` ili `boolean`), zabeležite tačnu grešku koju IntelliJ prijavljuje, a zatim je ispravite dodavanjem dodatnog karaktera imenu.
2. Napišite naredbu koja sadrži `if` uslov sličan primeru iz lekcije, a zatim nabrojte (kao komentare) sve pojedinačne izraze koje prepoznajete u toj naredbi.
3. Napišite jednu `System.out.println` naredbu koja je raspoređena preko tri linije koda korišćenjem operatora `+` za spajanje teksta, bez prevremenog završavanja tačka-zapetom.
4. Napišite kod sa namerno lošim whitespace-om i uvlačenjem (sve nalepljeno u jednoj liniji ili bez uvlačenja), a zatim primenite IntelliJ funkciju "Reformat Code" i uporedite izgled pre i posle.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto whitespace i uvlačenje ne utiču na to da li se program uspešno kompajlira i izvršava, ali su i dalje smatrani "dobrom praksom" u profesionalnom programiranju.
