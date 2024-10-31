### **Advanced Level: Object-Oriented JavaScript - Practice: Build a Simple Game Using OOP**

In this practice, we'll create a simple game using **Object-Oriented Programming (OOP)** principles. By doing so, you will practice working with **classes**, **inheritance**, and **encapsulation** in JavaScript.

---

### **1. Game Idea: "Rock, Paper, Scissors"**

Let’s build a basic **Rock, Paper, Scissors** game where the player can choose between three options, and the computer makes a random choice. We'll compare the choices and decide the winner.

---

### **2. Define the Structure Using OOP**

We will define the game as a series of classes and methods:

- **Player Class**: Handles the player’s choice.
- **Computer Class**: Handles the computer’s random choice.
- **Game Class**: Handles the game logic, compares the choices, and determines the winner.

---

### **3. Step-by-Step Code Implementation**

#### **Step 1: Define the Player Class**

The player class will allow the user to input their choice (rock, paper, or scissors).

```javascript
class Player {
  constructor(name) {
    this.name = name;
    this.choice = null;
  }

  makeChoice(choice) {
    if (['rock', 'paper', 'scissors'].includes(choice)) {
      this.choice = choice;
    } else {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
  }
}
```

#### **Step 2: Define the Computer Class**

The computer class will randomly choose between rock, paper, or scissors.

```javascript
class Computer {
  constructor() {
    this.choice = null;
  }

  makeChoice() {
    const options = ['rock', 'paper', 'scissors'];
    this.choice = options[Math.floor(Math.random() * options.length)];
  }
}
```

#### **Step 3: Define the Game Class**

This class will handle the logic to compare the choices and decide the winner.

```javascript
class Game {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
  }

  decideWinner() {
    const { choice: playerChoice } = this.player;
    const { choice: computerChoice } = this.computer;

    if (playerChoice === computerChoice) {
      return "It's a draw!";
    } 

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `${this.player.name} wins!`;
    } else {
      return "Computer wins!";
    }
  }

  playRound(choice) {
    this.player.makeChoice(choice);
    this.computer.makeChoice();

    console.log(`Player choice: ${this.player.choice}`);
    console.log(`Computer choice: ${this.computer.choice}`);

    const result = this.decideWinner();
    console.log(result);
  }
}
```

---

### **4. Putting It All Together**

Now we can create an instance of the `Player`, `Computer`, and `Game` classes to run the game.

```javascript
const player = new Player("Alice");
const computer = new Computer();
const game = new Game(player, computer);

game.playRound('rock');   // Example round
game.playRound('paper');  // Another round
```

---

### **5. Advanced Practice: Add More Features**

Once you've built the basic game, try adding some more advanced features:

1. **Score Tracking**: Keep track of how many rounds the player and the computer have won.
   
   ```javascript
   class Game {
     constructor(player, computer) {
       this.player = player;
       this.computer = computer;
       this.playerScore = 0;
       this.computerScore = 0;
     }

     updateScore(result) {
       if (result.includes(this.player.name)) {
         this.playerScore++;
       } else if (result.includes("Computer")) {
         this.computerScore++;
       }
     }

     playRound(choice) {
       this.player.makeChoice(choice);
       this.computer.makeChoice();

       console.log(`Player choice: ${this.player.choice}`);
       console.log(`Computer choice: ${this.computer.choice}`);

       const result = this.decideWinner();
       console.log(result);

       this.updateScore(result);
       console.log(`Score - ${this.player.name}: ${this.playerScore}, Computer: ${this.computerScore}`);
     }
   }
   ```

2. **Best of 5**: Implement a system where the game ends after one side wins 5 rounds.

   ```javascript
   playRound(choice) {
     this.player.makeChoice(choice);
     this.computer.makeChoice();

     console.log(`Player choice: ${this.player.choice}`);
     console.log(`Computer choice: ${this.computer.choice}`);

     const result = this.decideWinner();
     console.log(result);

     this.updateScore(result);
     console.log(`Score - ${this.player.name}: ${this.playerScore}, Computer: ${this.computerScore}`);

     if (this.playerScore === 5) {
       console.log(`${this.player.name} wins the game!`);
       return;
     } else if (this.computerScore === 5) {
       console.log("Computer wins the game!");
       return;
     }
   }
   ```

---

### **Summary of What You've Practiced**

- **OOP Concepts**: Classes, methods, and encapsulation.
- **Inheritance**: While the example doesn’t have inheritance, it could be extended to use inheritance by having different types of players.
- **Encapsulation**: Each class handles its own behavior (e.g., player choice, computer choice, and game logic).
- **Game Logic**: Comparing choices, determining the winner, and keeping score.

This game is a great exercise in applying OOP principles to a real-world problem. You can keep extending the game by adding features like multiplayer, game modes, or difficulty levels.