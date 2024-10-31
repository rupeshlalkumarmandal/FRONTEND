### **Advanced Level (Advanced Concepts): Practicing Design Patterns (Singleton, Factory)**

---

### **1. Singleton Design Pattern**

The **Singleton Pattern** restricts the instantiation of a class to a single object. It ensures that only one instance of the class exists and provides a global point of access to that instance.

#### **How to Practice the Singleton Pattern:**

1. **Understanding Singleton:**
   - Write a class or object that ensures only one instance is created, even if multiple attempts are made to create a new instance.

2. **Exercise 1: Basic Singleton Pattern:**
   - Create a simple example of the Singleton pattern where a class is instantiated only once.

**Example:**
```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = "Singleton Data";
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true (Same instance)
instance1.setData('New Singleton Data');
console.log(instance2.getData()); // "New Singleton Data"
```

3. **Exercise 2: Singleton for Configuration Management:**
   - Create a singleton that manages configuration settings for an application, ensuring there's a single configuration point.

**Example:**
```javascript
class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    this.settings = {};
    Config.instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

const config1 = new Config();
config1.set('theme', 'dark');

const config2 = new Config();
console.log(config2.get('theme')); // "dark"
```

---

### **2. Factory Design Pattern**

The **Factory Pattern** is a creational pattern that provides an interface for creating objects without specifying their exact class or type. It helps in constructing objects based on certain conditions or inputs.

#### **How to Practice the Factory Pattern:**

1. **Understanding Factory:**
   - Write a function or class that returns different types of objects based on some condition.

2. **Exercise 1: Basic Factory Pattern:**
   - Create a factory function that creates different types of objects based on input.

**Example:**
```javascript
class Dog {
  speak() {
    return "Woof!";
  }
}

class Cat {
  speak() {
    return "Meow!";
  }
}

class AnimalFactory {
  static createAnimal(type) {
    if (type === "dog") {
      return new Dog();
    } else if (type === "cat") {
      return new Cat();
    }
  }
}

const dog = AnimalFactory.createAnimal("dog");
console.log(dog.speak()); // "Woof!"

const cat = AnimalFactory.createAnimal("cat");
console.log(cat.speak()); // "Meow!"
```

3. **Exercise 2: Factory for User Roles:**
   - Create a factory function that generates objects based on user roles, like `Admin`, `User`, and `Guest`.

**Example:**
```javascript
class Admin {
  getRole() {
    return "Admin privileges granted.";
  }
}

class User {
  getRole() {
    return "User privileges granted.";
  }
}

class Guest {
  getRole() {
    return "Guest access granted.";
  }
}

class UserFactory {
  static createUser(role) {
    switch (role) {
      case "admin":
        return new Admin();
      case "user":
        return new User();
      case "guest":
        return new Guest();
      default:
        return null;
    }
  }
}

const admin = UserFactory.createUser("admin");
console.log(admin.getRole()); // "Admin privileges granted."

const guest = UserFactory.createUser("guest");
console.log(guest.getRole()); // "Guest access granted."
```

---

### **3. Practice: Combining Singleton and Factory Patterns**

#### **Exercise: Create a Logger System Using Singleton and Factory Patterns**

- **Singleton**: Ensure that the logger system is a single instance.
- **Factory**: The logger should be able to create loggers for different logging levels (e.g., info, error, debug).

**Example:**
```javascript
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message, level) {
    this.logs.push({ message, level });
    console.log(`[${level.toUpperCase()}]: ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

class LoggerFactory {
  static createLogger(level) {
    const logger = new Logger();
    return function (message) {
      logger.log(message, level);
    };
  }
}

const infoLogger = LoggerFactory.createLogger("info");
const errorLogger = LoggerFactory.createLogger("error");

infoLogger("This is an info message.");
errorLogger("This is an error message.");
```

---

### **4. Additional Exercises:**

1. **Exercise: Game Character Factory**
   - Create a factory that generates different types of game characters like `Warrior`, `Mage`, and `Archer`. Each character should have unique methods and attributes.

2. **Exercise: Singleton Database Connection**
   - Simulate a database connection using the singleton pattern to ensure only one connection is active at any time.

3. **Exercise: Notification System using Factory**
   - Create a factory that returns different types of notifications (e.g., email, SMS, push notification) based on the input.

---

### **Summary**

- **Singleton Pattern** ensures a class has only one instance.
- **Factory Pattern** provides a way to create objects based on some input or condition.
- **Practice** both patterns through real-world examples like configuration management, user role systems, or logging mechanisms.