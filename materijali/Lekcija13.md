# Lekcija 13: If-else, else-if lanci i problem duplikacije koda

## Cilj lekcije

Nakon ove lekcije, znaćete kako da proširite `if` naredbu pomoću **`else`** i **`else if`** blokova za pokrivanje više scenarija, razumećete tačan redosled i pravila po kojima Java bira koji će se kod blok izvršiti, znaćete da komentarišete kod (line comment) radi privremenog isključivanja delova programa, i shvatićete zašto je **duplikacija koda** (kopiranje-lepljenje sličnih blokova) problematična praksa — što će motivisati uvod u **metode** u narednoj lekciji.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **if-else naredba** | Proširenje `if` naredbe koje izvršava alternativni kod blok (`else`) kada je uslov netačan. |
| **else if** | Dodatni uslov koji se proverava samo ako prethodni `if` (ili `else if`) uslov nije bio tačan. |
| **Either-or ponašanje** | Kod if-else lanca, izvršiće se tačno **jedan** kod blok — čim se pronađe prvi tačan uslov, ostali se preskaču bez provere. |
| **Line comment** | Komentar koji onemogućava izvršavanje jedne ili više linija koda, korišćen za privremeno "isključivanje" dela programa. |
| **Duplikacija koda** | Ponavljanje istog ili sličnog bloka koda na više mesta u programu — otežava održavanje i uvodi rizik od nekonzistentnih izmena. |
| **Metoda (najava)** | Mehanizam (obrađen u narednoj lekciji) koji omogućava da se kod napiše jednom, a zatim ponovo koristi na više mesta, eliminišući potrebu za duplikacijom. |

---

## 2. Detaljno objašnjenje

### 2.1 Podsetnik: osnovna if naredba

Kao što je pokazano u ranijim lekcijama, `if` naredba proverava uslov i izvršava kod blok samo ako je uslov tačan:

```java
int score = 5000;
if (score == 5000) {
    System.out.println("Your score was 5000");
}
```

**Opšta preporuka** ostaje ista: čak i kada kod blok sadrži samo jednu liniju, uvek ga zapisati unutar vitičastih zagrada `{ }` — ovo je dobra praksa koja čini kod čitljivijim i sprečava buduće greške.

### 2.2 if-else naredba

**if-else** naredba dodaje **alternativni** kod blok koji se izvršava kada `if` uslov **nije tačan**:

```java
int score = 5000;
if (score < 5000) {
    System.out.println("Your score was less than 5000");
} else {
    System.out.println("Got here");
}
```

Ponašanje if-else naredbe je uvek **either-or (ili-ili)** — izvršiće se **tačno jedan** od dva kod bloka: ili kod unutar `if` (ako je uslov tačan), ili kod unutar `else` (ako uslov nije tačan). U primeru iznad, pošto `score` (5000) nije manji od 5000, uslov je netačan, pa se izvršava `else` blok, ispisujući "Got here".

### 2.3 if-else-if-else lanac

Java dozvoljava proširivanje `if-else` naredbe dodatnim **`else if`** blokovima, radi provere **više uslova redom**:

```java
int score = 4000;

if (score < 5000 && score > 1000) {
    System.out.println("Your score was less than 5000 but greater than 1000");
} else if (score < 1000) {
    System.out.println("Your score was less than 1000");
} else {
    System.out.println("Got here");
}
```

Pravila ovakvog lanca:

- I **`else if`**, i finalni **`else`** su **opcioni**.
- Ako se koriste zajedno, moraju biti u tačno ovom redosledu: `if` → jedan ili više `else if` → (opciono) finalni `else` na kraju.
- Uslovi se proveravaju **redom, odozgo nadole**. Čim se pronađe **prvi tačan** uslov, njegov kod blok se izvršava, a **svi preostali uslovi se u potpunosti preskaču** — čak se ni ne proveravaju (ne izračunavaju).
- Ako **nijedan** od `if`/`else if` uslova nije tačan, izvršava se kod u finalnom `else` bloku (ako postoji).

U primeru iznad, sa `score = 4000`: prvi uslov (`score < 5000 && score > 1000`) je tačan (4000 je i manje od 5000 i veće od 1000), pa se izvršava prvi kod blok, a `else if` i `else` se uopšte ne proveravaju.

Da je `score` bio `800`: prvi uslov bi bio netačan (800 nije veće od 1000), pa bi se proverio `else if` uslov (`score < 1000`), koji je tačan za 800, pa bi se izvršio taj kod blok. Da su oba uslova netačna (npr. `score == 5000`), izvršio bi se finalni `else` blok.

### 2.4 Skraćeni zapis boolean uslova u if-else kontekstu

Kao što je pokazano u ranijoj lekciji, i ovde važi preporuka da se `boolean` promenljive testiraju skraćenim zapisom:

```java
boolean gameOver = true;
int finalScore = score;

if (gameOver) { // umesto: if (gameOver == true)
    finalScore += levelCompleted * bonus;
    System.out.println("Your final score was " + finalScore);
}
```

Ovaj zapis je preporučen jer je čitljiviji i sprečava slučajnu upotrebu operatora dodele (`=`) umesto poređenja (`==`), koja bi kod `boolean` promenljivih prošla bez greške kompajlera.

### 2.5 Komentarisanje koda (line comment)

Kada je potrebno privremeno onemogućiti deo koda bez brisanja (na primer, radi poređenja dva pristupa ili čuvanja stare verzije radi referenci), koristi se **komentar**:

```java
// int oldScore = 800;
// System.out.println("Ovaj kod se ne izvrsava, samo je zabelezen radi referenci.");
```

U IntelliJ-u, selektovani blok koda može se pretvoriti u komentar preko menija **Code → Comment with Line Comment**, ili odgovarajućom tastaturnom prečicom. Komentarisan kod se prikazuje drugom bojom u editoru i **ne izvršava se** prilikom pokretanja programa.

### 2.6 Problem duplikacije koda

Kada je potrebno ponoviti sličnu logiku sa različitim vrednostima (npr. izračunati konačan rezultat za dva različita igrača), postoje različiti pristupi — ali neki nose značajne nedostatke:

**Pristup 1 — nove promenljive za svaki scenario:**

```java
int score = 800;
int levelCompleted = 5;
int bonus = 100;

int newScore = 10000;
int newLevelCompleted = 8;
int newBonus = 200;
```

Nedostatak: troši se dodatna memorija na promenljive koje su, u suštini, iste namene — samo za drugi scenario.

**Pristup 2 — ponovno korišćenje istih promenljivih (prepisivanje vrednosti):**

```java
int score = 800;
int levelCompleted = 5;
int bonus = 100;
// ... izracunavanje i ispis za prvi scenario ...

score = 10000;
levelCompleted = 8;
bonus = 200;
// ... isti kod, kopiran i zalepljen, za drugi scenario ...
```

Nedostaci: **gube se originalne vrednosti** (prve promenljive se prepisuju), i, što je najozbiljnije, **kod se duplira** — isti blok logike postoji na dva mesta u programu.

### 2.7 Zašto je duplikacija koda opasna

Glavni problem duplikacije koda je što, ako je potrebno **izmeniti logiku** (na primer, dodati novi bonus od 1000 poena u formulu za konačan rezultat), ta izmena mora biti primenjena **na svakom mestu** gde je kod duplikovan:

```java
// Prvo mesto - izmenjeno:
finalScore += 1000;

// Drugo mesto - IZMENA ZABORAVLJENA (bag!):
// finalScore ostaje bez dodatnih 1000 poena, jer je kod kopiran pre izmene
```

Ako se propusti izmena na bilo kom od dupliranih mesta, rezultat je **nekonzistentno i pogrešno ponašanje programa** — greška koju je lako napraviti (svi smo ljudi i pravimo propuste), a teško uočiti, jer program i dalje radi bez grešaka kompajliranja, samo daje netačne rezultate na pojedinim mestima.

**Zaključak:** kad god se ista ili slična logika ponavlja na više mesta, treba težiti da se ta logika napiše **samo jednom** i zatim **ponovo koristi**. Upravo to omogućavaju **metode** — mehanizam koji će biti detaljno obrađen u narednoj lekciji, a koji rešava tačno ovaj problem: kod se piše jednom, na jednom mestu, a poziva se (koristi) proizvoljan broj puta.

---

## 3. Kodni primeri

### 3.1 Osnovni if-else

```java
int score = 5000;

if (score < 5000) {
    System.out.println("Your score was less than 5000");
} else {
    System.out.println("Got here");
}
// ispis: Got here (jer score nije manje od 5000)
```

### 3.2 if-else-if-else lanac

```java
int score = 4000;

if (score < 5000 && score > 1000) {
    System.out.println("Your score was less than 5000 but greater than 1000");
} else if (score < 1000) {
    System.out.println("Your score was less than 1000");
} else {
    System.out.println("Got here");
}
// ispis: Your score was less than 5000 but greater than 1000
```

### 3.3 Isti lanac sa drugačijom vrednošću (samo drugi uslov tačan)

```java
int score = 800;

if (score < 5000 && score > 1000) {
    System.out.println("Your score was less than 5000 but greater than 1000");
} else if (score < 1000) {
    System.out.println("Your score was less than 1000");
} else {
    System.out.println("Got here");
}
// ispis: Your score was less than 1000
```

### 3.4 Skraćeni zapis boolean uslova sa compound operatorom

```java
boolean gameOver = true;
int score = 800;
int levelCompleted = 5;
int bonus = 100;
int finalScore = score;

if (gameOver) {
    finalScore += levelCompleted * bonus;
    System.out.println("Your final score was " + finalScore); // 1300
}
```

### 3.5 Problem duplikacije koda (ilustracija)

```java
int score = 800;
int levelCompleted = 5;
int bonus = 100;
int finalScore = score;

if (true) {
    finalScore += levelCompleted * bonus;
    System.out.println("Prvi rezultat: " + finalScore); // 1300
}

// Duplirana logika za drugi scenario - rizik: izmena formule mora se ponoviti ovde
score = 10000;
levelCompleted = 8;
bonus = 200;
finalScore = score;

if (true) {
    finalScore += levelCompleted * bonus;
    System.out.println("Drugi rezultat: " + finalScore); // 11600
}
```

### 3.6 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        int finalScore = score;
        if (gameOver) {
            finalScore += levelCompleted * bonus;
            System.out.println("Your final score was " + finalScore); // 1300
        }

        // if-else-if-else lanac za kategorizaciju rezultata
        if (score < 5000 && score > 1000) {
            System.out.println("Score category: mid-range");
        } else if (score < 1000) {
            System.out.println("Score category: low"); // ispisuje se za score = 800
        } else {
            System.out.println("Score category: high or exact 5000");
        }
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo proširili poznavanje `if` naredbe dodavanjem **`else`** bloka (koji se izvršava kada je uslov netačan) i **`else if`** blokova (za proveru dodatnih uslova redom, odozgo nadole). Naučili smo ključno pravilo: čim se pronađe prvi tačan uslov u lancu, njegov kod blok se izvršava, a **svi preostali uslovi se preskaču** bez provere — ponašanje je uvek "either-or". Podsetili smo se preporuke da se `boolean` promenljive testiraju skraćenim zapisom (`if (gameOver)`) radi čitljivosti i sigurnosti. Upoznali smo i **komentarisanje koda** (line comment) kao način privremenog isključivanja dela programa. Na kraju smo analizirali **problem duplikacije koda** — kada se slična logika kopira na više mesta, svaka buduća izmena mora biti ponovljena svuda, što lako dovodi do zaboravljenih izmena i nekonzistentnih, teško uočljivih grešaka. Ovaj problem direktno motiviše uvod u **metode**, temu naredne lekcije, koje omogućavaju da se kod napiše jednom i ponovo koristi na više mesta.

### Zadatak za samostalan rad

1. Napišite if-else naredbu koja proverava da li je `int` promenljiva `temperatura` veća od `30`, i ispisuje "Vruće je" ili "Nije vruće".
2. Proširite prethodni zadatak dodavanjem `else if` bloka koji proverava da li je temperatura između `15` i `30` (uključivo), i ispisuje "Prijatno je", pre finalnog `else` bloka koji ispisuje "Hladno je".
3. Napišite kod sa tri različita testa vrednosti promenljive `temperatura` (npr. `35`, `20`, `5`) i za svaki zabeležite (kao komentar) koji tačno kod blok se izvršava i zašto.
4. Namerno duplirajte blok koda koji izračunava neku formulu (npr. cenu sa popustom) za dva različita seta vrednosti, a zatim izmenite formulu samo na jednom mestu i objasnite (kao komentar) kakav bag ovo stvara na drugom mestu.
5. **Bonus:** Zakomentarišite (koristeći `//`) ceo drugi scenario iz prethodnog zadatka, pokrenite program i objasnite (kao komentar) zašto se taj deo koda više ne izvršava, iako i dalje postoji u fajlu.
