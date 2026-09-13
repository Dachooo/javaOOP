# Lekcija 1: Priprema razvojnog okruženja i prvi koraci sa JShell-om

## Cilj lekcije

Nakon ove lekcije, znaćete koje alate je potrebno instalirati da biste počeli sa programiranjem u Javi, razumećete razliku između pisanja koda u običnom tekst editoru i u razvojnom okruženju (IDE), i naučićete da koristite **JShell** — interaktivni alat za brzo isprobavanje Java koda bez potrebe za pisanjem kompletnog programa.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **JDK (Java Development Kit)** | Skup alata potreban za pisanje, kompajliranje i pokretanje Java programa. |
| **JRE (Java Runtime Environment)** | Deo JDK-a zadužen samo za izvršavanje već kompajliranih Java programa. |
| **IDE (Integrated Development Environment)** | Razvojno okruženje (npr. IntelliJ IDEA) koje olakšava pisanje koda kroz automatsko dovršavanje, otkrivanje grešaka i organizaciju projekta. |
| **JShell** | Interaktivna komandna alatka (REPL) uvedena u Javi 9, koja omogućava trenutno izvršavanje Java koda liniju po liniju. |
| **REPL (Read-Eval-Print-Loop)** | Ciklus u kom se kod čita, izvršava, ispisuje rezultat, a zatim se ceo proces ponavlja. |
| **LTS (Long-Term Support)** | Oznaka za verziju Jave koja ima produženu, dugoročnu podršku — u ovom kursu se koristi Java 17 LTS. |

---

## 2. Detaljno objašnjenje

### 2.1 Zašto su nam potrebni JDK i IDE

Da bismo pisali i pokretali Java programe, prvi neophodan alat je **JDK (Java Development Kit)** — softverski paket koji sadrži kompajler i sve što je potrebno za razvoj i pokretanje Java aplikacija. U ovom kursu koristi se **verzija 17**, koja predstavlja **LTS (Long-Term Support)** izdanje, što znači da uživa produženu zvaničnu podršku i stabilnost.

Drugi alat koji se koristi je **IntelliJ IDEA** — razvojno okruženje (IDE) slično tekst procesoru, ali specijalizovano za pisanje programskog koda. IntelliJ postoji u dve varijante: besplatnoj **Community Edition** i plaćenoj **Ultimate Edition**. Za potrebe ovog kursa, obe verzije su potpuno zadovoljavajuće. Napomenimo i da se mogu koristiti i drugi IDE alati poput Eclipse-a ili NetBeans-a, ukoliko postoji prethodno iskustvo s njima.

### 2.2 Instalacija JDK-a

Proces instalacije JDK-a na Windows sistemu podrazumeva sledeće korake:

1. Otvoriti zvaničnu stranicu za preuzimanje Jave (Oracle-ova stranica za Java SE).
2. Izabrati **Java SE 17 (LTS)** — voditi računa da se ne preuzme neka novija verzija (npr. Java 19), jer je za ovaj kurs neophodna verzija 17.
3. Izabrati operativni sistem (Windows) i preuzeti **x64 installer**, koji odgovara većini savremenih 64-bitnih računara.
4. Pokrenuti preuzeti fajl i pratiti standardni instalacioni proces (uz eventualno dozvoljavanje instalacije kroz `Da/Yes` dijalog operativnog sistema).
5. Zapamtiti **lokaciju instalacije**, jer će ta putanja biti potrebna u narednim koracima rada sa IDE-om.

> **Napomena:** Ukoliko se koristi stariji, 32-bitni Windows 10 sistem, potrebno je preuzeti stariju verziju JDK-a prilagođenu toj arhitekturi. Windows 11 postoji isključivo u 64-bitnoj verziji, pa ovo ograničenje tamo ne postoji.

Nakon instalacije JDK-a, sledeći korak je instalacija IntelliJ IDEA razvojnog okruženja, koje će se koristiti za pisanje kompleksnijih programa kasnije u kursu.

### 2.3 Provera instalacije Jave

Pre nego što se pređe na pisanje koda, neophodno je proveriti da li je Java ispravno instalirana. To se radi otvaranjem **komandne linije (Command Prompt)** na Windows-u, odnosno **Terminala** na Mac/Linux sistemima, i unosom komande:

```
java -version
```

Ukoliko je instalacija uspešna, u izlazu (output-u) treba da piše verzija koja počinje brojem **17** (npr. `17.0.4.1`). Ako se prikaže neka druga verzija ili komanda nije prepoznata, potrebno je ponoviti instalacioni proces.

### 2.4 Načini pisanja Java koda

Postoje tri osnovna načina da se piše i izvršava Java kod:

- **Obični tekst editor** (npr. Notepad, TextEdit ili `vi`) — funkcioniše, ali zahteva ručno kompajliranje i pokretanje koda, a kod je teže čitati jer nema isticanja sintakse (*syntax highlighting*).
- **Integrisano razvojno okruženje (IDE)** — najčešće korišćen pristup u profesionalnom razvoju. IDE poput IntelliJ-a nudi automatsko dovršavanje koda, upozorenja na greške, predloge najboljih praksi i preglednije formatiranje koda.
- **JShell** — interaktivni alat direktno iz komandne linije, idealan za brzo eksperimentisanje i učenje osnovnih koncepata bez potrebe za kreiranjem kompletnog projekta.

### 2.5 Šta je JShell

**JShell** je zvanično postao deo JDK-a od verzije Java 9. Reč je o alatu tipa **REPL (Read-Eval-Print-Loop)**, što znači da radi po sledećem principu:

1. **Read** — čita kod ili komandu koju korisnik unese.
2. **Eval** — izvršava (evaluira) uneti kod.
3. **Print** — ispisuje rezultat izvršavanja, bez potrebe da programer eksplicitno piše kod za ispis.
4. **Loop** — vraća se na početak i čeka sledeći unos.

JShell predstavlja svojevrsni **sandbox** (sigurno okruženje za eksperimentisanje) u kome se koncepti Jave mogu isprobavati trenutno, uz odmah vidljive rezultate. Važno je naglasiti da JShell **ne zamenjuje IDE** — on je samo koristan alat za brzo upoznavanje sa jezikom, dok će se za ozbiljniji razvoj kasnije koristiti IntelliJ IDEA.

### 2.6 Osnovne JShell komande

Pokretanje JShell-a vrši se unosom komande `jshell` u terminalu. Nakon pokretanja, na raspolaganju su sledeće korisne komande:

- `/help` — prikazuje spisak svih dostupnih komandi sa kratkim opisom.
- `/help intro` — prikazuje uvodno objašnjenje o tome šta je JShell.
- `/list` — prikazuje istoriju unetog koda u trenutnoj sesiji.
- `/list -all` — prikazuje kompletnu listu, uključujući i ugrađene (built-in) biblioteke koje JShell automatski učitava pri pokretanju.
- `/list -start` — prikazuje samo kod koji se izvršava prilikom pokretanja JShell-a.
- `/exit` — izlazi iz JShell okruženja i vraća korisnika na regularnu komandnu liniju.

Dodatno, tasteri **strelica gore/dole** omogućavaju kretanje kroz istoriju prethodno unetih komandi, što olakšava izmenu i ponovno izvršavanje koda.

Ukoliko se u JShell unese otvorena vitičasta zagrada `{`, prompt se menja u `...>`, što signalizira da JShell očekuje unos više linija koda koje čine jednu celinu (blok koda). Iz ovog stanja moguće je izaći unosom zatvorene vitičaste zagrade `}` (čime se blok završava i izvršava), ili pritiskom na **Ctrl+C**, čime se unos prekida bez izvršavanja.

---

## 3. Kodni primeri

Iako je ova lekcija uglavnom posvećena instalaciji alata i upoznavanju sa JShell-om, ispod su prikazani osnovni primeri koji se mogu isprobati direktno u JShell-u, kao i njihov ekvivalent u vidu punog Java programa.

### 3.1 Provera verzije Jave (komandna linija)

```
java -version
```

### 3.2 Osnovne komande unutar JShell-a

```
// Pokretanje JShell-a iz terminala:
jshell

// Prikaz uvodnih informacija o JShell-u:
/help intro

// Prikaz svih dostupnih komandi:
/help

// Prikaz kompletne istorije, uključujući ugrađene biblioteke:
/list -all

// Prikaz samo koda koji se učitava pri pokretanju:
/list -start

// Izlazak iz JShell-a:
/exit
```

### 3.3 Prvi izraz u JShell-u

Jedna od prednosti JShell-a je mogućnost trenutnog izvršavanja pojedinačnih izraza, bez pisanja kompletnog programa:

```java
// Unosom ovog izraza u JShell, rezultat se odmah ispisuje na ekranu
5 + 10

// JShell automatski prikazuje rezultat, npr:
// $1 ==> 15
```

### 3.4 Isti primer kao klasičan Java program

Za razliku od JShell-a, klasičan Java program zahteva definisanje klase i metode `main`, kao i eksplicitan poziv za ispis rezultata:

```java
public class Main {
    public static void main(String[] args) {
        // Sabiranje dva broja i ispis rezultata na konzoli
        int rezultat = 5 + 10;
        System.out.println(rezultat); // ispisuje: 15
    }
}
```

### 3.5 Primer višelinijskog bloka u JShell-u

```java
// Unosom otvorene vitičaste zagrade, JShell prelazi u režim za unos bloka koda:
{
    int a = 3;
    int b = 4;
    System.out.println(a + b);
} // zatvaranjem zagrade, ceo blok se izvršava odjednom
```

---

## 4. Rezime

U ovoj lekciji smo prošli kroz pripremu razvojnog okruženja za rad sa Javom. Instalirali smo **JDK 17 (LTS)**, koji je neophodan za kompajliranje i pokretanje Java programa, i upoznali smo se sa **IntelliJ IDEA** razvojnim okruženjem koje ćemo koristiti kasnije u kursu. Naučili smo da proverimo uspešnost instalacije komandom `java -version`, i upoznali smo tri načina pisanja Java koda: običan tekst editor, IDE i **JShell**. Detaljno smo obradili JShell kao **REPL** alat za brzo eksperimentisanje sa Java kodom, uključujući osnovne komande (`/help`, `/list`, `/exit`) i rad sa višelinijskim blokovima koda.

### Zadatak za samostalan rad

1. Proverite da li je Java ispravno instalirana na vašem računaru pomoću komande `java -version`. Zabeležite koju verziju dobijate.
2. Pokrenite JShell i isprobajte sledeće:
   - Unesite komandu `/help` i pronađite opis komande koja briše sve promenljive iz trenutne sesije.
   - Izračunajte zbir, razliku, proizvod i količnik dva broja po vašem izboru, direktno unosom matematičkog izraza (npr. `12 * 7`).
   - Napravite višelinijski blok koda (koristeći `{` i `}`) koji deklariše dve celobrojne promenljive i ispisuje njihov zbir pomoću `System.out.println`.
3. Izađite iz JShell-a komandom `/exit`.
4. **Bonus:** Napišite isti kod iz drugog zadatka (sabiranje dve promenljive) kao kompletan Java program sa klasom `Main` i metodom `main`, spreman za pokretanje iz IntelliJ IDEA okruženja.
