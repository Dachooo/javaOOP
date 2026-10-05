# Lekcija 27: Prevazilaženje metoda (override), protected i polimorfizam

## Cilj lekcije

Nakon ove lekcije, znaćete kako da **specijalizujete podklasu** dodavanjem sopstvenih polja i metoda, razumećete **prevazilaženje metoda (method overriding)** i njegove tri varijante (potpuna zamena, poziv roditeljske implementacije, proširenje roditeljske implementacije), znaćete kada koristiti modifikator **`protected`**, i dobićete prvi jasan uvid u **polimorfizam** — moćnu osobinu da se ista linija koda ponaša različito u zavisnosti od stvarnog tipa objekta.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Prevazilaženje metode (method overriding)** | Definisanje metode u podklasi sa **istim potpisom** kao metoda u nadklasi, čime se menja njeno ponašanje za tu podklasu. |
| **@Override** | Anotacija koja označava da metoda prevazilazi metodu nadklase; IntelliJ je automatski dodaje i pomaže u otkrivanju grešaka. |
| **super.metoda()** | Poziv implementacije metode **nadklase** iz prevaziđene metode podklase (različito od `super()`, koji poziva konstruktor). |
| **protected** | Modifikator pristupa koji dozvoljava pristup polju/metodi iz **podklasa** (i iz istog paketa), ali ne iz potpuno nepovezanog koda. |
| **Polimorfizam (polymorphism)** | "Mnogo oblika" — sposobnost da se objekat nadklase u stvarnosti ponaša kao neka njegova podklasa, u zavisnosti od stvarnog tipa objekta u trenutku izvršavanja. |

---

## 2. Detaljno objašnjenje

### 2.1 Specijalizacija podklase

Podklasa nasleđuje sve od nadklase, ali njena prava vrednost je u dodavanju **sopstvenih** polja i metoda. Na primer, `Dog` (pored nasleđenih `type`, `size`, `weight`) dobija svoja polja `earShape` i `tailShape`:

```java
public class Dog extends Animal {
    private String earShape;
    private String tailShape;

    public Dog(String type, double weight, String earShape, String tailShape) {
        super(type, (weight < 15) ? "small" : (weight < 35) ? "medium" : "large", weight);
        this.earShape = earShape;
        this.tailShape = tailShape;
    }
}
```

Veličina psa (`size`) se **izvodi** iz težine pomoću ugnježdenog ternarnog operatora, direktno u argumentu poziva `super(...)` — ovo je dozvoljeno jer `super(...)` i dalje ostaje **prva naredba** konstruktora, čak i kada su njeni argumenti složeniji izrazi.

### 2.2 Konstruktor koji pojednostavljuje kreiranje objekata

Dodatni, jednostavniji konstruktor može ulančano pozvati prethodni, sa podrazumevanim vrednostima za uobičajen slučaj:

```java
public Dog(String type, double weight) {
    this(type, weight, "perky", "curled"); // ulancava konstruktor sa 4 parametra
}
```

Ovo omogućava kreiranje psa sa samo dva argumenta, kada su oblik ušiju i repa standardni.

### 2.3 Prevazilaženje metode — potpuna zamena ponašanja

**Prevazilaženje metode (method overriding)** znači definisati u podklasi metodu sa **istim potpisom** (ime + parametri) kao metoda u nadklasi. Najjednostavniji oblik potpuno **zamenjuje** ponašanje nadklase:

```java
@Override
public void makeNoise() {
    // prazno telo - dog vise ne koristi animal-ovu implementaciju
}
```

Kada se na `Dog` objektu pozove `makeNoise()`, izvršava se **ova** (prazna) implementacija, a **ne** implementacija iz `Animal`. IntelliJ dodaje anotaciju **`@Override`** i poseban ikonu pored metode — korisno upozorenje da metoda namerno menja ponašanje nadklase. Anotacija nije strogo obavezna, ali je dobra praksa, jer kompajler njome može proveriti da li metoda zaista odgovara nekoj metodi nadklase (ako ne odgovara, prijavljuje grešku, što sprečava čest bag: slučajno drugačiji potpis koji bi, bez `@Override`, tiho kreirao **novu**, nepovezanu metodu).

### 2.4 Prevazilaženje metode — pozivanje implementacije nadklase (super.metoda())

Kada se metoda prevaziđe pomoću **IntelliJ-eve** opcije **Code → Override Methods**, generisani kod po podrazumevanom **poziva** implementaciju nadklase preko **`super.metoda()`**:

```java
@Override
public void move(String speed) {
    super.move(speed); // poziva Animal.move(speed)
}
```

**`super.move(speed)`** je drugačiji koncept od `super(...)` (poziv konstruktora) — ovo je poziv **metode** nadklase, slično kao `this.polje` upućuje na polje trenutnog objekta. Ovaj oblik, sam po sebi, ne menja ponašanje (isto je kao da metoda uopšte nije prevaziđena) — služi kao polazna tačka za dalje proširenje.

### 2.5 Prevazilaženje metode — proširenje ponašanja nadklase

Najkorisniji oblik prevazilaženja **zadržava** poziv `super.metoda()`, ali dodaje **dodatni** kod:

```java
@Override
public void move(String speed) {
    super.move(speed); // zadrzava animal-ovo ponasanje (ispis "type moves speed")
    System.out.println("Dogs walk, run, and wag their tail"); // dodatno ponasanje
}
```

Rezultat: kada se pozove `dog.move("fast")`, prvo se izvršava **originalna** logika iz `Animal` (preko `super.move(speed)`), a zatim i **dodatna** logika specifična za `Dog`. Ovo je suština proširivanja (extending) ponašanja — koristi se postojeće, a dodaje novo.

### 2.6 Tri varijante prevazilaženja — rezime

| Varijanta | Ponašanje |
|---|---|
| **Potpuna zamena** | Novo telo metode, bez poziva `super.metoda()` — stara implementacija se potpuno ignoriše. |
| **Samo poziv super.metoda()** | Ponaša se identično kao da metoda uopšte nije prevaziđena (redundantno samo po sebi, ali koristan početak za dalju izmenu). |
| **Proširenje** | Poziva `super.metoda()` i dodaje dodatni kod — zadržava staro ponašanje i nadograđuje ga. |

### 2.7 Dodavanje ponašanja specifičnog za podklasu

Metode koje imaju smisla **samo** za `Dog` (ne za sve životinje) definišu se direktno na `Dog`, bez ikakve veze sa `Animal`. Ako se koriste samo interno, iz drugih metoda iste klase, mogu biti **`private`**:

```java
private void bark() {
    System.out.print("Woof! ");
}

private void run() {
    System.out.print("Dog running. ");
}

private void walk() {
    System.out.print("Dog walking. ");
}

private void wagTail() {
    System.out.print("Tail wagging. ");
}
```

Ove privatne metode se zatim pozivaju iz prevaziđenih metoda `move` i `makeNoise`:

```java
@Override
public void move(String speed) {
    if (speed.equals("slow")) {
        walk();
        wagTail();
    } else {
        run();
        bark();
    }
    System.out.println();
}

@Override
public void makeNoise() {
    bark();
    System.out.println();
}
```

Ovde `makeNoise()` više **uopšte ne poziva** `super.makeNoise()` — ponašanje je u potpunosti specifično za pse. Kod koji poziva ove metode preko `Animal` reference (npr. `doAnimalStuff` iz prethodne lekcije) **ne mora da se menja** — automatski dobija ponašanje specifično za pse.

### 2.8 Modifikator protected — pristup polju iz podklase

Ako podklasa pokuša da direktno koristi **privatno** polje nadklase (npr. `type`), dobija grešku kompajlera, jer `private` znači pristup **samo unutar klase u kojoj je polje deklarisano** — čak ni podklase nemaju pristup:

```java
// U klasi Animal: private String type;
// U klasi Dog:
// if (type.equals("wolf")) { ... } // GRESKA: type has private access in Animal
```

Rešenje je promeniti modifikator polja `type` sa `private` na **`protected`**:

```java
protected String type; // umesto private String type;
```

**`protected`** dozvoljava pristup iz **podklasa** (bez obzira u kom su paketu), kao i iz klasa u **istom paketu** — ovo je primer **"uslovne" (ograničene) enkapsulacije**: polje nije potpuno javno, ali nije ni potpuno skriveno, već dostupno porodici povezanih klasa.

Nakon izmene, podklasa polju pristupa **direktno**, bez ikakvog kvalifikatora (`this.` ili `super.`), kao da je polje deklarisano na samoj podklasi:

```java
@Override
public void makeNoise() {
    if (type.equals("wolf")) {
        System.out.print("Howl! ");
    }
    bark();
    System.out.println();
}
```

Java prvo traži polje ili metodu na samoj klasi, a ako ga ne nađe, nastavlja pretragu **uz hijerarhiju nasleđivanja**, naviše.

### 2.9 Još jedna podklasa: Fish

Nasleđivanje omogućava proizvoljno mnogo podklasa iste nadklase. `Fish` nasleđuje od `Animal`, baš kao i `Dog`, ali sa potpuno drugačijim specifičnim poljima i ponašanjem:

```java
public class Fish extends Animal {
    private int gills;
    private int fins;

    public Fish(String type, double weight, int gills, int fins) {
        super(type, "small", weight); // sve ribe su "small"
        this.gills = gills;
        this.fins = fins;
    }

    private void moveMuscles() {
        System.out.print("Muscles moving. ");
    }

    private void moveBackFin() {
        System.out.print("Backfin moving. ");
    }

    @Override
    public void move(String speed) {
        moveMuscles();
        if (speed.equals("fast")) {
            moveBackFin();
        }
        System.out.println();
    }
}
```

### 2.10 Polimorfizam — "mnogo oblika"

Ključni uvid iz ove i prethodne lekcije: metoda `doAnimalStuff(Animal animal, String speed)` **nikada nije morala da zna** za postojanje klasa `Dog` ili `Fish`. Ipak, kada joj se prosledi `Dog` objekat, poziva se `Dog`-ova verzija `move()` i `makeNoise()`; kada joj se prosledi `Fish` objekat, poziva se `Fish`-ova verzija. Java u **trenutku izvršavanja (runtime)** prepoznaje **stvarni** tip objekta i poziva odgovarajuću (najspecifičniju) implementaciju metode — čak i kada je referenca formalno tipa `Animal`.

Ovo se naziva **polimorfizam** — bukvalno "mnogo oblika": `Animal` referenca može, u zavisnosti od stvarnog objekta na koji upućuje, poprimiti ponašanje baznog `Animal`-a, ili bilo koje njegove podklase (`Dog`, `Fish`, ili neke buduće podklase). Prednosti:

- **Jednostavniji kod** — logika se piše jednom, koristeći bazni tip, bez ručnog proveravanja ("ako je ovo pas, uradi ovo; ako je riba, uradi ono").
- **Proširivost koda** — nova podklasa (npr. `Cat`) se može dodati i koristiti sa postojećim kodom (`doAnimalStuff`) **bez ijedne izmene** tog postojećeg koda.

Detaljnija obrada polimorfizma kao formalnog koncepta objektno orijentisanog programiranja sledi u narednoj celini kursa. Takođe, svaka Java klasa (uključujući i sve koje smo mi napravili) implicitno nasleđuje od jedne ugrađene Java klase — ta tema je najavljena za narednu lekciju.

---

## 3. Kodni primeri

### 3.1 Prevazilaženje — potpuna zamena

```java
@Override
public void makeNoise() {
    // namerno prazno - dog ne koristi animal-ovu implementaciju
}
```

### 3.2 Prevazilaženje — proširenje ponašanja

```java
@Override
public void move(String speed) {
    super.move(speed);
    System.out.println("Dogs walk, run, and wag their tail");
}
```

### 3.3 protected polje dostupno podklasi

```java
// U Animal.java:
protected String type;

// U Dog.java:
if (type.equals("wolf")) {
    System.out.print("Howl! ");
}
```

### 3.4 Dve podklase, ista metoda u pozivaocu

```java
Dog yorkie = new Dog("Yorkie", 15);
Fish goldie = new Fish("Goldfish", 0.25, 2, 3);

doAnimalStuff(yorkie, "fast"); // poziva Dog-ove prevazidjene metode
doAnimalStuff(goldie, "fast"); // poziva Fish-ove prevazidjene metode
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        Dog yorkie = new Dog("Yorkie", 15);
        doAnimalStuff(yorkie, "fast");

        Dog wolf = new Dog("wolf", 40);
        doAnimalStuff(wolf, "slow");

        Fish goldie = new Fish("Goldfish", 0.25, 2, 3);
        doAnimalStuff(goldie, "fast");
    }

    public static void doAnimalStuff(Animal animal, String speed) {
        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);
        System.out.println("__________");
    }
}

class Animal {
    protected String type;
    protected String size;
    protected double weight;

    public Animal() {
    }

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    public void move(String speed) {
        System.out.println(type + " moves " + speed);
    }

    public void makeNoise() {
        System.out.println(type + " makes some kind of noise");
    }

    @Override
    public String toString() {
        return "Animal{type='" + type + "', size='" + size + "', weight=" + weight + "}";
    }
}

class Dog extends Animal {
    private String earShape;
    private String tailShape;

    public Dog(String type, double weight, String earShape, String tailShape) {
        super(type, (weight < 15) ? "small" : (weight < 35) ? "medium" : "large", weight);
        this.earShape = earShape;
        this.tailShape = tailShape;
    }

    public Dog(String type, double weight) {
        this(type, weight, "perky", "curled");
    }

    private void bark() {
        System.out.print("Woof! ");
    }

    private void run() {
        System.out.print("Dog running. ");
    }

    private void walk() {
        System.out.print("Dog walking. ");
    }

    private void wagTail() {
        System.out.print("Tail wagging. ");
    }

    @Override
    public void move(String speed) {
        if (speed.equals("slow")) {
            walk();
            wagTail();
        } else {
            run();
            bark();
        }
        System.out.println();
    }

    @Override
    public void makeNoise() {
        if (type.equals("wolf")) {
            System.out.print("Howl! ");
        }
        bark();
        System.out.println();
    }
}

class Fish extends Animal {
    private int gills;
    private int fins;

    public Fish(String type, double weight, int gills, int fins) {
        super(type, "small", weight);
        this.gills = gills;
        this.fins = fins;
    }

    private void moveMuscles() {
        System.out.print("Muscles moving. ");
    }

    private void moveBackFin() {
        System.out.print("Backfin moving. ");
    }

    @Override
    public void move(String speed) {
        moveMuscles();
        if (speed.equals("fast")) {
            moveBackFin();
        }
        System.out.println();
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo specijalizovali podklase `Dog` i `Fish`, dodajući im sopstvena polja i metode, i upoznali **prevazilaženje metoda (method overriding)** — definisanje metode u podklasi sa istim potpisom kao u nadklasi. Videli smo tri varijante: potpunu zamenu ponašanja, redundantan poziv `super.metoda()` (isto kao bez prevazilaženja), i **proširenje** ponašanja (poziv `super.metoda()` plus dodatni kod). Naučili smo da **`@Override`** anotacija pomaže kompajleru da proveri ispravnost potpisa, i da je **`protected`** modifikator potreban kada podklasa treba direktan pristup polju nadklase koje nije `public`. Na kraju smo dobili jasan uvid u **polimorfizam** — kod napisan za bazni tip (`Animal`) automatski radi ispravno sa bilo kojom podklasom (`Dog`, `Fish`), bez potrebe da se taj kod ikada menja, što čini kod jednostavnijim i lakšim za proširivanje.

### Zadatak za samostalan rad

1. Dodajte klasu `Cat extends Animal` sa poljem `furColor` i prevaziđenom metodom `makeNoise()` koja ispisuje "Meow!".
2. Prevazidite metodu `move()` u `Cat` tako da **proširi** (ne zameni) ponašanje iz `Animal`, dodavanjem poruke "Cats are sneaky movers.".
3. Pozovite postojeću metodu `doAnimalStuff(Animal, String)` sa `Cat` objektom, bez ikakve izmene te metode, i potvrdite da radi.
4. Promenite jedno polje u `Animal` sa `private` na `protected` i direktno mu pristupite iz `Cat`, bez `this`/`super` kvalifikatora.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto se `doAnimalStuff` metoda ne mora menjati kada se doda nova podklasa poput `Cat`, povezujući to sa pojmom polimorfizma.
