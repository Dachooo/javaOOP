# Lekcija 18: Petlja for, naredba break i provera prostih brojeva

## Cilj lekcije

Nakon ove lekcije, razumećete šta su **petlje** i zašto su važne, znaćete da napišete **`for` petlju** i objasnite njena tri dela (inicijalizacija, uslov, ažuriranje), moći ćete da koristite **`break`** za prevremeni izlazak iz petlje, prepoznaćete konvenciju imenovanja iteracione promenljive (`i`, `j`, `k`), i primenićete sve to na praktičnim primerima: računanju kamate i proveri **prostih brojeva** metodom `isPrime`.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Petlja (loop)** | Naredba koja ponavlja izvršavanje bloka koda dok se ne ispuni određeni uslov. |
| **for petlja** | Najčešća petlja u Javi; u zagradi sadrži inicijalizaciju, uslov i ažuriranje, razdvojene tačka-zapetama. |
| **Inicijalizacija** | Deo `for` petlje koji se izvršava jednom, pre početka petlje (najčešće deklaracija brojača). |
| **Uslov (izraz petlje)** | Proverava se pre svake iteracije; kada postane `false`, petlja se završava. |
| **Ažuriranje** | Izvršava se posle svake iteracije (najčešće uvećavanje brojača). |
| **Iteraciona promenljiva** | Promenljiva koja se menja kroz iteracije petlje; uobičajena imena su `i`, `j` i `k`. |
| **break** | Odmah izlazi iz petlje (ili `switch`-a) i nastavlja izvršavanje posle nje. |
| **Prost broj** | Ceo broj veći od 1 koji je deljiv samo sa 1 i samim sobom. |

---

## 2. Detaljno objašnjenje

### 2.1 Petlje u Javi

**Petlje** omogućavaju da se isti kod izvrši više puta, sve dok se ne ispuni neki uslov. Java ima tri osnovne vrste petlji, a u ovoj lekciji obrađujemo prvu:

- **`for`** — najčešća; sadrži inicijalizaciju, proveru uslova i ažuriranje na jednom mestu,
- **`while`** — izvršava kod dok je uslov tačan,
- **`do while`** — kao `while`, ali se kod uvek izvrši bar jednom.

### 2.2 Sintaksa for petlje

```java
for (inicijalizacija; uslov; ažuriranje) {
    // telo petlje
}
```

Tri dela u zagradi razdvojena su **tačka-zapetama**, a svaki od njih je opcioni:

1. **Inicijalizacija** — izvršava se **jednom**, pre petlje; obično deklariše brojač.
2. **Uslov** — proverava se pre svake iteracije; kada je `false`, petlja se završava.
3. **Ažuriranje** — izvršava se **posle svake iteracije**; obično uvećava brojač.

Primer: ispis brojeva od 1 do 5.

```java
for (int counter = 1; counter <= 5; counter++) {
    System.out.println(counter);
}
```

Brojač `counter` počinje od 1, petlja se ponavlja dok je `counter <= 5`, a posle svakog prolaza `counter++` uvećava brojač za 1. Kada `counter` postane 6, uslov je netačan i petlja se završava.

### 2.3 Praktičan primer: računanje kamate

Metoda koja računa kamatu na osnovu iznosa i kamatne stope:

```java
public static double calculateInterest(double amount, double interestRate) {
    return (amount * (interestRate / 100));
}
```

Zagrade oko izraza obezbeđuju ispravan redosled računanja. Ako želimo kamatu za stope 2%, 3%, 4% i 5%, kopiranje istog poziva četiri puta bilo bi zamorno (a zamislite 100 stopa). Zato koristimo petlju:

```java
for (double rate = 2.0; rate <= 5.0; rate++) {
    double interestAmount = calculateInterest(10000.0, rate);
    System.out.println("10000 at " + rate + "% interest = " + interestAmount);
}
```

Iteraciona promenljiva `rate` je tipa `double`, menja se u svakom prolazu (2.0, 3.0, 4.0, 5.0) i prosleđuje se metodi kao argument.

### 2.4 Korak različit od 1 i ime promenljive i

Brojač ne mora da raste za 1. Za stope od 7.5% do 10% sa korakom 0.25 koristi se **compound operator** `+=`:

```java
for (double i = 7.5; i <= 10; i += 0.25) {
    double interestAmount = calculateInterest(100.0, i);
    System.out.println("$100 at " + i + "% interest = $" + interestAmount);
}
```

U ovom primeru iteraciona promenljiva se zove `i`. To je široko usvojena konvencija: **`i`** je skraćenica za iteracionu promenljivu, a za ugnježdene petlje koriste se i **`j`** i **`k`**. Možete koristiti i opisno ime (`rate`), ali je važno da se naviknete na `i` jer ga srećete u većini Java koda.

### 2.5 Naredba break u petlji

**`break`** prekida petlju i prebacuje izvršavanje na prvu liniju posle nje. U `for` petlji obično se stavlja unutar `if` naredbe koja proverava neki uslov različit od uslova petlje.

Primer: prekinuti petlju čim kamata pređe 8.50 dolara:

```java
for (double i = 7.5; i <= 10; i += 0.25) {
    double interestAmount = calculateInterest(100.0, i);
    if (interestAmount > 8.5) {
        break; // izlazak iz petlje pre nego sto i dostigne 10
    }
    System.out.println("$100 at " + i + "% interest = $" + interestAmount);
}
```

Petlja se završava pre nego što uslov `i <= 10` postane netačan, a kod ispod `break`-a (u telu petlje) se za tu iteraciju više ne izvršava.

### 2.6 Prosti brojevi i metoda isPrime

**Prost broj** je ceo broj veći od 1 koji je deljiv samo sa 1 i samim sobom (npr. 2, 3, 5, 7, 17). Broj 1 nije prost, a svaki paran broj veći od 2 nije prost. Metodi dajemo ime sa prefiksom `is`, jer vraća `boolean` i "postavlja pitanje", kao i kod `boolean` promenljivih.

Postupak izgradnje metode:

1. **Brojevi manji ili jednaki 2:** negativni brojevi, 0 i 1 nisu prosti, a 2 jeste prost. To se rešava jednim `if`-om koji vraća rezultat poređenja: `return (wholeNumber == 2);`.
2. **Ostali brojevi:** proveravamo da li je broj deljiv nekim brojem `divisor` između 2 i broja. Ako se pronađe delilac bez ostatka (`wholeNumber % divisor == 0`), broj **nije** prost, pa odmah `return false`, čime se izlazi i iz petlje i iz metode.
3. Ako petlja završi bez pronađenog delioca, broj je prost: `return true`.

Petlja počinje od 2, jer je sve deljivo sa 1 i to bi dalo pogrešne rezultate. Uslov je `divisor < wholeNumber` (a ne `<=`), jer bi u suprotnom broj bio deljen samim sobom i svaki broj bi izgledao kao neprost.

**Optimizacija:** ako broj ima delilac veći od polovine samog sebe, mora imati i manji delilac, pa je dovoljno proveravati do `wholeNumber / 2`:

```java
public static boolean isPrime(int wholeNumber) {
    if (wholeNumber <= 2) {
        return (wholeNumber == 2);
    }
    for (int divisor = 2; divisor <= wholeNumber / 2; divisor++) {
        if (wholeNumber % divisor == 0) {
            return false;
        }
    }
    return true;
}
```

Pri radu sa petljama vredi razmišljati o smanjenju broja iteracija, naročito ako je telo petlje složeno. (U praksi biste za ovaj zadatak koristili gotovu metodu iz Java biblioteke, ali je ovo dobra vežba.)

### 2.7 Izazov: pronaći prva tri prosta broja

**Zadatak:** u opsegu brojeva (npr. od 10 do 50) proveravati svaki broj metodom `isPrime`, ispisati proste, brojati ih, i **prekinuti petlju kada se pronađu tri prosta broja**.

```java
int count = 0;
for (int i = 10; i <= 50; i++) {
    if (isPrime(i)) {
        System.out.println(i + " is a prime number");
        count++;
        if (count == 3) {
            System.out.println("Found 3, exiting for loop");
            break;
        }
    }
}
```

Ispisuju se prosti brojevi 11, 13 i 17, a petlja staje kod 17 (`i` nikada ne dostigne 50).

**Alternativa bez `break`-a:** uslov petlje može biti složeniji i koristiti promenljive deklarisane van petlje:

```java
int count = 0;
for (int i = 10; i <= 50 && count < 3; i++) {
    if (isPrime(i)) {
        System.out.println(i + " is a prime number");
        count++;
    }
}
```

Ovaj oblik ne ispisuje poruku o izlasku iz petlje, ali daje isti rezultat. To je još jedan primer da za isti problem postoji više ispravnih rešenja.

---

## 3. Kodni primeri

### 3.1 Osnovna for petlja

```java
for (int counter = 1; counter <= 5; counter++) {
    System.out.println("Brojac: " + counter);
}
```

### 3.2 Petlja sa korakom 0.25

```java
for (double i = 7.5; i <= 10; i += 0.25) {
    System.out.println(i);
}
```

### 3.3 Prekid petlje pomoću break

```java
for (int i = 1; i <= 10; i++) {
    if (i == 4) {
        break;
    }
    System.out.println(i); // ispisuje 1, 2, 3
}
```

### 3.4 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        // Racunanje kamate za stope od 2% do 5%
        for (double rate = 2.0; rate <= 5.0; rate++) {
            double interestAmount = calculateInterest(10000.0, rate);
            System.out.println("10000 at " + rate + "% interest = " + interestAmount);
        }

        // Pronalazenje prva tri prosta broja u opsegu od 10 do 50
        int count = 0;
        for (int i = 10; i <= 50; i++) {
            if (isPrime(i)) {
                System.out.println(i + " is a prime number");
                count++;
                if (count == 3) {
                    System.out.println("Found 3, exiting for loop");
                    break;
                }
            }
        }
    }

    public static double calculateInterest(double amount, double interestRate) {
        return (amount * (interestRate / 100));
    }

    public static boolean isPrime(int wholeNumber) {
        if (wholeNumber <= 2) {
            return (wholeNumber == 2);
        }
        for (int divisor = 2; divisor <= wholeNumber / 2; divisor++) {
            if (wholeNumber % divisor == 0) {
                return false;
            }
        }
        return true;
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **petlje** i najčešću među njima, **`for` petlju**, čija tri dela (inicijalizacija, uslov i ažuriranje) stoje u zagradi razdvojena tačka-zapetama. Videli smo kako petlja zamenjuje ponavljanje sličnih naredbi, na primeru računanja kamate za više kamatnih stopa, i da korak ne mora biti 1 (npr. `i += 0.25`). Naučili smo konvenciju da se iteraciona promenljiva često zove **`i`** (a za ugnježdene petlje `j` i `k`). Upoznali smo **`break`** za prevremeni izlazak iz petlje, obično uz `if` uslov. Na kraju smo napisali metodu **`isPrime`**, koja koristi petlju, operator ostatka i rani `return`, i rešili izazov pronalaženja prva tri prosta broja, i sa `break`-om i sa složenijim uslovom petlje.

### Zadatak za samostalan rad

1. Napišite `for` petlju koja ispisuje sve parne brojeve od 2 do 20.
2. Napišite `for` petlju koja ispisuje brojeve od 10 do 1 unazad (koristite `i--`).
3. Napišite petlju koja računa zbir brojeva od 1 do 100 i ispisuje rezultat posle petlje.
4. Napišite petlju koja ispisuje tablicu množenja broja 7 (od 7 x 1 do 7 x 10).
5. **Bonus:** Iskoristite metodu `isPrime` iz lekcije da ispišete sve proste brojeve između 1 i 100 i na kraju ispišete koliko ih ima. Objasnite (kao komentar) zašto se petlja u `isPrime` može zaustaviti na `wholeNumber / 2`.
