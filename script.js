// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(),
//  que muestra por consola las propiedades de la persona.
class Person{

     constructor(name1, age, genre){
     
        this.name1 = name1;
        this.age = age;
        this.genre = genre;    
     }

     obtDetails = function()
     {
        console.log("---------- Ejercicio 1 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
     }
}

const person1 = new Person("Laura",20,"M");
person1.obtDetails();


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(),
//  que muestre por consola el resultado.

class Student extends Person{

    constructor(name1, age, genre, course, group){
        
        super(name1, age, genre);
        
        this.course = course;
        this.group = group;  
     }

     register = function()
     {
        console.log("---------- Ejercicio 2 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
        console.log("Su curso es:", this.course, " y su grupo es: ",this.group);
     }
}

const student1 = new Student("Markel",30,"H","Full-Stack","B");
student1.register();

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y 
// level y el método assign(), que muestre por consola el resultado.
class Teacher extends Person{

    constructor(name1, age, genre, asignatura, level){
        
        super(name1, age, genre);
        
        this.asignatura = asignatura;
        this.level = level;  
     }

     assign = function()
     {
        console.log("---------- Ejercicio 3 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
        console.log("Asignatura:", this.asignatura, " Nivel:", this.level);
        
     }
}

const teacher1 = new Teacher("Mar",50,"M","Ingles","B1");
teacher1.assign();

// //--------------------------------------------------------------------------------------------------------------
// Construye las siguientes clases:
// 1 -Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.
class Warrior{
    
    constructor(life, power)
    {
        this.life = life;
        this.power = power;
    }

    attack()
    {
        return this.power;
    }

    defend(damage)
    {
        const result = this.life - damage;
        console.log("La vida restante de warrior es:", result);
        
    }

}
console.log(" ---------------- Ejercicio Extra 1 -----------------------");
console.log(" ---------------- Ejercicio Warrior -----------------------");
const warrior1 = new Warrior(60,30);
console.log("El power del guerrero es:", warrior1.attack());
warrior1.defend(10);


// 2- Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.
class Maya extends Warrior
{
    drinkColaCao = function()
    {
        const result = this.power + 10;
        console.log("Sube de poder +10: ", result);
        
    }
}

// 3 -Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.
class Aztec extends Maya{
    
    drinkNesquik = function()
    {
        const result = this.life + 10;
        console.log("Sube la vida +10: ", result);
        
    }
}

// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik
const azteca1 = new Aztec(90,40);
azteca1.drinkNesquik();

// Maya bebe Cola Cao
const maya1 = new Maya(80,50);
maya1.drinkColaCao();

// Maya ataca a azteca. Azteca defiende.
const damageToAztec = maya1.attack();
azteca1.defend(damageToAztec);

// Azteca ataca a maya. Maya defiende.
const damageToMaya = azteca1.attack();
maya1.defend(damageToMaya);

