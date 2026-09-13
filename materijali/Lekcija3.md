# Lekcija 3: Primitivni tipovi za cele brojeve, wrapper klase i prekoračenje opsega

## Cilj lekcije

Nakon ove lekcije, znaćete koji su svi primitivni tipovi podataka u Javi, razumećete koncept **wrapper klase** i njenu ulogu, znaćete kako da programski proverite minimalnu i maksimalnu vrednost nekog celobrojnog tipa, razumećete pojmove **overflow** (prekoračenje) i **underflow** (potkoračenje), i naučićete razlike između tipova `byte`, `short`, `int` i `long`, uključujući njihovu širinu u memoriji i upotrebu sufiksa `L`.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Primitivni tip podatka** | Jedan od osam osnovnih, ugrađenih tipova u Javi (npr. `int`, `byte`, `long`); čist "placeholder" za vrednost u memoriji. |
| **Wrapper klasa** | Klasa koja "obavija" primitivni tip i pruža dodatne mogućnosti (npr. `Integer` za `int`), poput dobijanja opsega vrednosti. |
| **Opseg (range)** | Skup svih dozvoljenih vrednosti nekog tipa, ograničen minimalnom i maksimalnom vrednošću. |
| **Overflow (prekoračenje)** | Kada rezultat izraza premaši maksimalnu vrednost tipa, vrednost "kruži" nazad na minimum. |
| **Underflow (potkoračenje)** | Kada rezultat izraza padne ispod minimalne vrednosti tipa, vrednost "kruži" na maksimum. |
| **Širina (width/size)** | Broj bitova koje tip zauzima u memoriji (npr. `int` = 32 bita). |
| **Sufiks `L`** | Slovo dodato na kraju celobrojnog literala da bi se on tretirao kao `long`, a ne kao podrazumevani `int`. |
| **Konkatenacija stringova** | Spajanje teksta i drugih vrednosti u jedan string pomoću operatora `+`. |

---

## 2. Detaljno objašnjenje

### 2.1 Osam primitivnih tipova podataka

Java poseduje ukupno **osam primitivnih tipova podataka**, podeljenih po vrsti vrednosti koju čuvaju:

- **Celi brojevi (bez decimala):** `byte`, `short`, `int`, `long`
- **Realni brojevi (sa decimalama):** `float`, `double`
- **Pojedinačni karakter:** `char`
- **Logička vrednost:** `boolean`

Ovi tipovi predstavljaju osnovne "građevinske blokove" za rad sa podacima u Javi — svaki od njih je samo mesto u memoriji rezervisano za određenu vrstu vrednosti.

### 2.2 Opseg vrednosti i wrapper klase

Svaki numerički tip podataka ima definisan **opseg** — minimalnu i maksimalnu vrednost koju može da čuva. Taj opseg nije beskonačan, i pokušaj da se u promenljivu smesti vrednost izvan opsega izaziva problem.

Da bismo programski proverili opseg nekog tipa, koristimo njegovu **wrapper klasu**. **Klasa** je gradivni blok objektno-orijentisanog programiranja koji nam omogućava da kreiramo sopstvene tipove podataka (o čemu će biti reči kasnije u kursu). Java definiše wrapper klasu za svaki od osam primitivnih tipova — obično isto ime kao primitivni tip, samo sa velikim početnim slovom. Izuzeci su `int`, čija je wrapper klasa `Integer`, i `char`, čija je wrapper klasa `Character`.

Preko wrapper klase možemo pristupiti korisnim informacijama koje sami primitivni tip ne može da čuva, kao što su:

- `MIN_VALUE` — minimalna dozvoljena vrednost tipa,
- `MAX_VALUE` — maksimalna dozvoljena vrednost tipa,
- `SIZE` — širina tipa u bitovima.

Na primer, `Integer.MIN_VALUE` i `Integer.MAX_VALUE` daju granice opsega za `int` (od otprilike -2,15 milijardi do +2,15 milijardi).

### 2.3 Kombinovanje teksta i brojeva u ispisu

Kada se operator `+` koristi unutar `System.out.print(...)`, on **spaja (konkateniše)** string sa vrednošću koja sledi — Java automatski konvertuje ne-string vrednost u tekst i nadovezuje je na prethodni string:

```java
System.out.print("Integer Minimum Value = " + Integer.MIN_VALUE);
```

Ovakav pristup omogućava kombinovanje opisnog teksta (labele) sa numeričkim vrednostima u jednoj liniji izlaza, a moguće je koristiti proizvoljan broj `+` operatora da se sastavi složenija poruka od više string literala i vrednosti.

### 2.4 Overflow i underflow

Ako se od maksimalne vrednosti tipa doda još jedan broj (npr. `Integer.MAX_VALUE + 1`), rezultat **ne baca grešku** — umesto toga, vrednost "prelazi" na drugi kraj opsega i postaje **minimalna** vrednost tog tipa. Ova pojava naziva se **overflow (prekoračenje)**.

Simetrično, oduzimanje jedan od minimalne vrednosti (`Integer.MIN_VALUE - 1`) rezultuje **underflow-om (potkoračenjem)** — vrednost "kruži" na maksimum.

Ovo ponašanje se naziva i **integer wraparound**, i predstavlja čest izvor suptilnih grešaka u programima (na primer, brojač poseta sajtu koji pređe maksimalnu vrednost `int`-a bi iznenada postao negativan broj). Odgovornost je programera da izabere odgovarajući tip podataka i da proveri da li vrednosti ostaju unutar dozvoljenog opsega.

**Važna razlika:** overflow/underflow se dešava samo kada je rezultat **izraza** (expression) van opsega — kompajler ne pokušava da izračuna vrednost izraza unapred, pa takav kod uspešno prolazi kompajliranje. Međutim, ako se **direktno dodeli brojčani literal** koji je van opsega tipa (npr. `int x = 2147483648;`), kompajler **prijavljuje grešku** ("integer number too large"), jer u tom slučaju odmah zna da vrednost ne može da stane u dati tip.

### 2.5 Čitljivost velikih brojeva pomoću donje crte

Java ne dozvoljava korišćenje zareza unutar brojčanog literala (npr. `2,147,483,647` nije validno). Umesto toga, Java dozvoljava upotrebu **donje crte (`_`)** kao vizuelnog separatora, koja se može staviti bilo gde unutar broja (osim na sam početak ili kraj):

```java
int myMinIntValue = -2_147_483_648;
```

Donja crta ne utiče na vrednost broja — služi isključivo da olakša čitanje velikih brojeva u kodu.

### 2.6 Tipovi byte, short i long — širina i opseg

Pored `int`-a, Java ima još tri primitivna tipa za cele brojeve, koji se razlikuju po **širini (width)**, odnosno broju bitova koje zauzimaju u memoriji, što direktno određuje njihov opseg vrednosti:

| Tip | Širina (bita) | Opseg vrednosti |
|---|---|---|
| `byte` | 8 | od -128 do 127 |
| `short` | 16 | od -32 768 do 32 767 |
| `int` | 32 | od -2 147 483 648 do 2 147 483 647 |
| `long` | 64 | mnogo veći opseg (2⁶³ vrednosti) |

Širinu tipa možemo takođe proveriti programski preko wrapper klase, koristeći polje `SIZE` (velikim slovima), npr. `Integer.SIZE` ili `Long.SIZE`.

`byte` i `short` imaju isti problem overflow-a/underflow-a kao `int`, samo u okviru svog (mnogo manjeg) opsega. Manji tipovi poput `byte`-a se ređe koriste danas (memorija i brzina retko su ograničavajući faktor), ali mogu poslužiti kao vid dokumentacije koda — signaliziraju čitaocu da se očekuje mali opseg vrednosti.

### 2.7 Sufiks `L` za tip long

Svaki celobrojni literal (npr. `100`) je **po difoltu tipa `int`**, čak i kada se dodeljuje promenljivoj tipa `long`. Da bi se literal eksplicitno označio kao `long`, dodaje se sufiks **`L`** na njegov kraj:

```java
long myLongValue = 100L;
```

Java pravi retak izuzetak od pravila o osetljivosti na velika/mala slova — i malo `l` i veliko `L` znače isto. Ipak, preporučuje se **veliko `L`**, jer se malo `l` lako pobrka sa brojem `1` (jedan), što može zbuniti čitaoca koda.

**Implicitno proširenje (widening):** pošto `long` (64 bita) uvek može da "primi" bilo koju vrednost tipa `int` (32 bita), Java dozvoljava dodelu `int` literala promenljivoj tipa `long` **bez** sufiksa `L` — kompajler automatski proširuje vrednost:

```java
long myLongValue = 100; // ispravno - int se automatski siri u long
```

Međutim, ako brojčani literal **premašuje** opseg za `int` (npr. veći od `Integer.MAX_VALUE`), on **mora** imati sufiks `L`, inače kompajler javlja grešku "integer number too large" — jer bez sufiksa Java pokušava prvo da protumači literal kao `int`, što ne uspeva.

Slično tome, ako se `int` literal (bez ikakvog sufiksa) dodeljuje promenljivoj tipa `short` ili `byte`, kompajler proverava da li se vrednost uklapa u ciljni, uži tip — ako ne, javlja grešku tipa **"incompatible types"** ("required short, found int").

---

## 3. Kodni primeri

### 3.1 Opseg vrednosti tipa int preko wrapper klase Integer

```java
int myValue = 10_000;               // koriscenje donje crte radi citljivosti

int myMinIntValue = Integer.MIN_VALUE; // -2147483648
int myMaxIntValue = Integer.MAX_VALUE; // 2147483647

System.out.println("Integer Minimum Value = " + myMinIntValue);
System.out.println("Integer Maximum Value = " + myMaxIntValue);
```

### 3.2 Ispis opsega u jednoj liniji (konkatenacija stringova)

```java
System.out.println("Integer range (" + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
```

### 3.3 Overflow i underflow

```java
int myMaxIntValue = Integer.MAX_VALUE;
int myBustedMaxValue = myMaxIntValue + 1; // OVERFLOW: postaje najmanja vrednost (kruzi)
System.out.println(myBustedMaxValue);     // ispisuje: -2147483648

int myMinIntValue = Integer.MIN_VALUE;
int myBustedMinValue = myMinIntValue - 1; // UNDERFLOW: postaje najveca vrednost (kruzi)
System.out.println(myBustedMinValue);     // ispisuje: 2147483647
```

### 3.4 Greška kod direktnog literala van opsega (razlika u odnosu na overflow)

```java
// Ovo NE baca gresku pri kompajliranju - overflow se desava u izrazu tokom izvrsavanja:
int a = Integer.MAX_VALUE + 1;

// Ovo BACA gresku pri kompajliranju ("integer number too large"),
// jer je literal direktno van opsega za int:
// int b = 2147483648;
```

### 3.5 Tipovi byte i short

```java
byte myMinByteValue = Byte.MIN_VALUE;   // -128
byte myMaxByteValue = Byte.MAX_VALUE;   // 127
System.out.println("Byte range (" + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE + ")");

short myMinShortValue = Short.MIN_VALUE; // -32768
short myMaxShortValue = Short.MAX_VALUE; // 32767
System.out.println("Short range (" + Short.MIN_VALUE + " to " + Short.MAX_VALUE + ")");
```

### 3.6 Tip long, sufiks L i širina tipova

```java
long myLongValue = 100L;              // preporuceno: eksplicitni sufiks L
long myLongValueImplicit = 100;       // dozvoljeno: int se automatski siri u long

System.out.println("A long has a width of " + Long.SIZE);  // 64
System.out.println("An int has a width of " + Integer.SIZE); // 32

long bigLongLiteralValue = 2_147_483_647L; // maksimum za int, ali kao long literal (sa L)
long biggerLongLiteralValue = 2_147_483_647_234L; // veci od Integer.MAX_VALUE - MORA imati L

// Sledeca linija bi izazvala gresku kompajlera ("integer number too large") jer nema sufiks L:
// long invalidLongLiteral = 2_147_483_647_234;
```

### 3.7 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        // Opseg za int
        System.out.println("Integer range (" + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");

        // Overflow primer
        int maxInt = Integer.MAX_VALUE;
        int overflowed = maxInt + 1;
        System.out.println("Max int + 1 = " + overflowed); // -2147483648

        // Opsezi za byte i short
        System.out.println("Byte range (" + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE + ")");
        System.out.println("Short range (" + Short.MIN_VALUE + " to " + Short.MAX_VALUE + ")");

        // Long sa sufiksom L i sirina tipova
        long bigNumber = 9_000_000_000L; // veci od opsega int-a, zato mora L
        System.out.println("Big number = " + bigNumber);
        System.out.println("Long width = " + Long.SIZE + " bits");
        System.out.println("Int width = " + Integer.SIZE + " bits");
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali svih osam **primitivnih tipova podataka** u Javi i detaljnije obradili četiri tipa za cele brojeve: `byte`, `short`, `int` i `long`. Naučili smo da svaki numerički tip ima definisan **opseg vrednosti**, koji možemo proveriti preko odgovarajuće **wrapper klase** (`Byte`, `Short`, `Integer`, `Long`) korišćenjem polja `MIN_VALUE`, `MAX_VALUE` i `SIZE`. Obradili smo pojmove **overflow** i **underflow** — situacije kada vrednost izraza premaši opseg tipa i "kruži" na suprotan kraj opsega — i napravili razliku između ovog ponašanja i greške kompajlera koja nastaje kada se **literal** direktno dodeljuje van opsega tipa. Takođe smo naučili da koristimo **donju crtu** za čitljivost velikih brojeva, i **sufiks `L`** za eksplicitno označavanje `long` literala, uz pravilo implicitnog proširenja `int` vrednosti u `long`.

### Zadatak za samostalan rad

1. Napišite Java kod koji ispisuje opseg vrednosti za sva četiri celobrojna primitivna tipa (`byte`, `short`, `int`, `long`) u čitljivom formatu, npr. `"Byte range (-128 to 127)"`.
2. Demonstrirajte overflow tako što ćete promenljivoj tipa `byte` dodeliti `Byte.MAX_VALUE`, zatim joj dodati `1` u novom izrazu, i ispisati rezultat. Objasnite dobijenu vrednost.
3. Napišite liniju koda koja namerno izaziva grešku kompajlera "integer number too large" (direktnom dodelom literala van opsega za `int`), a zatim je ispravite dodavanjem odgovarajućeg sufiksa i promenom tipa promenljive u `long`.
4. Deklarišite promenljivu tipa `long` sa vrednošću većom od `Integer.MAX_VALUE`, koristeći donju crtu za lakše čitanje broja (npr. `3_000_000_000L`), i ispišite je zajedno sa širinom (`SIZE`) tipa `long`.
5. **Bonus:** Napišite kratak komentar u kodu koji objašnjava zašto se sledeća linija neće kompajlirati: `short s = 40000;`, i ispravite je tako da koristi odgovarajući tip podataka.
