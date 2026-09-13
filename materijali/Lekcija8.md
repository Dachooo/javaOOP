# Lekcija 8: Prelazak na IDE — instalacija i podešavanje IntelliJ IDEA

## Cilj lekcije

Nakon ove lekcije, razumećete šta je **IDE (Integrated Development Environment)** i zašto profesionalni programeri koriste IDE umesto ručnog kompajliranja koda, upoznaćete **IntelliJ IDEA** kao razvojno okruženje koje će se koristiti u nastavku kursa, znaćete osnovne korake instalacije i podešavanja IntelliJ-a na Windows sistemu, i razumećete zašto je neophodno **povezati JDK sa IDE-om** pre početka pisanja programa.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **IDE (Integrated Development Environment)** | Razvojno okruženje koje objedinjuje pisanje, kompajliranje, pokretanje i debagovanje koda na jednom mestu. |
| **IntelliJ IDEA** | Popularan IDE za Javu, razvijen od strane kompanije JetBrains, dostupan u besplatnom (Community) i plaćenom (Ultimate) izdanju. |
| **JDK (Java Development Kit)** | Skup alata (kompajler, debager, itd.) koji IDE koristi da razume, kompajlira i pokreće Java kod — mora biti povezan sa IDE-om pre rada. |
| **Build System** | Mehanizam koji IDE koristi za kompajliranje i pravljenje (build) projekta — u ovom kursu koristi se ugrađeni IntelliJ build sistem. |
| **Debager (debugger)** | Alat unutar IDE-a koji omogućava korak-po-korak praćenje izvršavanja programa radi pronalaženja grešaka. |
| **Code completion (automatsko dovršavanje koda)** | Funkcija IDE-a koja predlaže nastavak koda dok programer kuca, ubrzavajući pisanje i smanjujući greške. |
| **Version Control System (VCS)** | Sistem za praćenje verzija koda (npr. Git), sa kojim se IDE može povezati radi timskog rada. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je IDE i zašto je koristan

**IDE (Integrated Development Environment)**, odnosno integrisano razvojno okruženje, jeste alat koji objedinjuje sve što je potrebno za pisanje programa na jednom mestu. Osnovna komponenta IDE-a je **tekst editor** u koji se kuca kod, ali IDE dodatno **kompajlira i pokreće** program, bez potrebe da se izlazi iz njega.

Pre pojave IDE-a, proces pisanja programa bio je mnogo mukotrpniji — kod bi se napisao i sačuvao u editoru, zatim bi se editor napustio da bi se ručno pokrenuo kompajler, a nakon eventualnih grešaka, ceo proces bi se ponavljao ispočetka. IDE ovaj proces svodi na jednostavan klik na dugme ili opciju iz menija, pri čemu se greške u kodu često prijavljuju **i pre** samog pokretanja programa.

Glavne prednosti korišćenja IDE-a u odnosu na ručni rad su:

- veća produktivnost,
- **automatsko dovršavanje koda (code completion)**,
- alati za **refaktorisanje** (preoblikovanje) koda,
- alati za **debagovanje (debugging)**,
- integracija sa sistemima za kontrolu verzija (npr. Git),
- podrška za timski rad na projektima.

### 2.2 IntelliJ IDEA kao izabrani IDE za ovaj kurs

Za potrebe ovog kursa koristi se **IntelliJ IDEA**, IDE razvijen od strane kompanije **JetBrains**, sam napisan u Javi. Dostupan je u besplatnom, open-source izdanju **Community Edition**, koje je potpuno dovoljno za potrebe ovog kursa.

Iako postoje i drugi popularni IDE alati (npr. Eclipse, NetBeans, Visual Studio Code), preporučuje se korišćenje IntelliJ-a ukoliko je ovo prvo iskustvo sa razvojnim okruženjem — na taj način, sve što se prikazuje u lekcijama odgovaraće tačno onome što se vidi na sopstvenom računaru. Ako već postoji iskustvo sa nekim drugim IDE-om, sasvim je u redu nastaviti sa njim, jer većina modernih IDE alata nudi slične funkcionalnosti — znanje stečeno u jednom IDE-u lako se prenosi na drugi.

### 2.3 Instalacija IntelliJ IDEA na Windows-u

Osnovni koraci instalacije IntelliJ IDEA na Windows operativnom sistemu su sledeći:

1. Posetiti zvaničan sajt **jetbrains.com**, otvoriti sekciju **Developer Tools** i izabrati **IntelliJ IDEA**.
2. Na stranici za preuzimanje, proveriti da je izabran operativni sistem **Windows**.
3. Preuzeti **izvršni (.exe) instalacioni fajl** — za Intel/AMD procesore standardni `.exe`, a za ARM64 procesore odgovarajuću ARM verziju (ne preuzimati zip arhivu).
4. Pokrenuti preuzeti instalacioni fajl i, ukoliko se pojavi sistemski upit za dozvolu izmena na računaru, potvrditi sa **Da/Yes**.
5. Kroz instalacioni čarobnjak (setup wizard): potvrditi podrazumevanu lokaciju instalacije, označiti opcije za **kreiranje asocijacija fajlova** (radi lakšeg otvaranja Java fajlova direktno u IntelliJ-u) i, po želji, opciju za kreiranje prečice na desktopu.
6. Kliknuti na **Install** i sačekati da se instalacija završi.
7. Nakon instalacije, pri prvom pokretanju IntelliJ-a, prihvatiti uslove korišćenja i (opciono) odlučiti da li se šalju anonimni podaci o korišćenju ka JetBrains-u.
8. Kada se pojavi upozorenje Windows Security zaštitnog zida, dozvoliti pristup za **privatne mreže (Private networks)** — ovo je podrazumevana i preporučena opcija za rad u ovom kursu.

### 2.4 Povezivanje JDK-a sa IntelliJ IDEA

Da bi IntelliJ mogao da razume, kompajlira i pokreće Java kod, neophodno je **povezati instalirani JDK** (u ovom kursu, ranije instaliran JDK 17 LTS) sa IDE-om. Ovo se radi u prozoru za kreiranje novog projekta (**New Project**):

- U levom panelu potrebno je izabrati **Java** kao jezik projekta (IntelliJ podržava i druge jezike, poput Kotlin-a ili Groovy-ja, ali za ovaj kurs koristi se isključivo Java).
- IntelliJ obično **automatski prepoznaje** instalirani JDK i prikazuje njegovu verziju u padajućem meniju — potrebno je proveriti da odgovara ranije instaliranoj **LTS verziji** (npr. JDK 17).
- Ukoliko IntelliJ ne pronađe JDK automatski, moguće ga je ručno dodati preko opcije **Add JDK**, navigacijom do foldera u kome je JDK instaliran (na Windows-u tipično `Program Files\Java\<verzija JDK-a>`).
- Potrebno je proveriti da je **Build System** postavljen na **IntelliJ** (podrazumevana vrednost), što određuje kako će IDE kompajlirati i praviti projekat.

### 2.5 Preporučena podešavanja za rad u kursu

Radi lakšeg praćenja koda tokom učenja, preporučuju se sledeća podešavanja u meniju **Settings** IntelliJ-a:

- **Appearance** — izbor vizuelne teme (npr. svetla tema poput *Islands Light* radi bolje čitljivosti, ili tamna tema poput *Darcula*, koja je blaža za oči prilikom dužeg programiranja); ovo je isključivo stvar ličnog izbora i može se menjati u bilo kom trenutku.
- **Editor → General** — uključivanje opcija automatskog uvoza (**Auto-import**), konkretno "Add unambiguous imports on the fly" i "Optimize imports on the fly", što olakšava rad sa Java bibliotekama.
- **Editor → Code Folding** — isključivanje opcija koje sakrivaju delove koda (npr. "One line methods", "Closures", "File header", "Imports"), kako bi početnik u učenju video **kompletan** kod koji piše, bez skrivenih delova.
- **Editor → Appearance** — provera da je opcija **"Show line numbers"** uključena, radi lakšeg praćenja i referenciranja linija koda.

### 2.6 Prozor za kreiranje novog projekta

Nakon pokretanja IntelliJ-a, na početnom ekranu (Welcome screen) nude se tri osnovne opcije:

- **New Project** — kreiranje novog projekta (opcija koja će se najviše koristiti tokom kursa).
- **Open** — otvaranje već postojećeg projekta radi nastavka rada.
- **Clone Repository** — preuzimanje projekta iz sistema za kontrolu verzija (VCS), poput Git-a; ova opcija nije neophodna dok se ne stekne iskustvo sa verzionisanjem koda.

---

## 3. Kodni primeri

Ova lekcija je uglavnom posvećena instalaciji i podešavanju alata, bez novih Java sintaksnih koncepata. Ipak, ključna razlika u odnosu na dosadašnji rad u JShell-u jeste da se u IntelliJ-u (i u svakom pravom Java programu) kod uvek piše unutar **klase** i metode **`main`**, a rezultati se ne ispisuju automatski — potrebno je eksplicitno pozvati `System.out.println`.

### 3.1 Provera verzije Jave koju IntelliJ koristi (komandna linija, van IDE-a)

```
java -version
```

### 3.2 Prvi program napisan u IntelliJ IDEA (za razliku od JShell-a)

```java
public class Main {
    public static void main(String[] args) {
        // Za razliku od JShell-a, IDE ne ispisuje automatski rezultat izraza
        // - moramo eksplicitno pozvati System.out.println
        int result = 5 + 10;
        System.out.println(result); // ispisuje: 15
    }
}
```

### 3.3 Podsetnik — isti kod u JShell-u (radi poređenja)

```java
// U JShell-u je dovoljno samo uneti izraz - rezultat se ispisuje automatski:
5 + 10
// $1 ==> 15

// U pravom Java programu (IDE), ovo mora biti unutar main metode
// i mora se eksplicitno ispisati pomocu System.out.println
```

### 3.4 Kompletan primer programa spremnog za pokretanje u IntelliJ-u

```java
public class Main {
    public static void main(String[] args) {
        // Jednostavan program koji demonstrise da IDE zahteva
        // kompletnu strukturu (klasa + main metoda), za razliku od JShell-a
        String poruka = "Zdravo iz IntelliJ IDEA!";
        System.out.println(poruka);

        int a = 7;
        int b = 3;
        System.out.println("Zbir: " + (a + b));
        System.out.println("Ostatak: " + (a % b));
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo napravili prelaz sa JShell-a na **integrisano razvojno okruženje (IDE)**, konkretno **IntelliJ IDEA**, koje objedinjuje pisanje, kompajliranje, pokretanje i debagovanje koda na jednom mestu, uz dodatne pogodnosti poput automatskog dovršavanja koda i ranog otkrivanja grešaka. Prošli smo kroz osnovne korake **instalacije IntelliJ-a na Windows sistemu**, kao i kroz proces **povezivanja instaliranog JDK-a** sa IDE-om, bez čega IntelliJ ne bi mogao da razume ni pokrene Java kod. Takođe smo prošli kroz preporučena podešavanja (tema, auto-import, prikaz punog koda bez skrivanja, brojevi linija) koja olakšavaju praćenje nastave. Ključna razlika u odnosu na JShell koju treba zapamtiti jeste da u IntelliJ-u (i u svakom pravom Java programu) kod mora biti smešten unutar klase i `main` metode, a rezultati se moraju eksplicitno ispisati pomoću `System.out.println`, jer se, za razliku od JShell-a, ne ispisuju automatski.

### Zadatak za samostalan rad

1. Instalirajte IntelliJ IDEA (Community Edition) na svom računaru, prateći korake opisane u lekciji.
2. Proverite da li je IntelliJ automatski pronašao instalirani JDK prilikom kreiranja novog projekta; ako nije, ručno ga dodajte preko opcije Add JDK.
3. Podesite IntelliJ prema preporukama iz lekcije (uključite Auto-import, isključite Code Folding opcije koje skrivaju kod, proverite da su brojevi linija vidljivi).
4. Kreirajte novi projekat u IntelliJ-u i napišite program koji ispisuje vaše ime i prezime, kao i zbir dva broja po vašem izboru, koristeći klasu `Main` i metodu `main`.
5. **Bonus:** Objasnite (kao komentar u kodu) tri konkretne razlike koje ste primetili između pisanja koda u JShell-u i pisanja istog koda u IntelliJ IDEA okruženju.
