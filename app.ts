#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// create classes of hero and enemy 
class hero{
    name:string;
    fuel:number=100;

    constructor(name:string){
        this.name = name
    }
 decreasefuel(){
   let fuel = this.fuel - 25
   this.fuel = fuel
 } 
 increasefuel(){
    this.fuel = 100
 }  
}

class enemy{
    name:string;
    fuel:number=100;

    constructor(name:string){
      this.name=name;
    }
    decreasefuel(){
        let fuel = this.fuel - 25
        this.fuel = fuel
      }   
}

// create functions to ask user for hero name and enemy selection
let player= await inquirer.prompt({
    name:"name",
    type:"input",
    message:"Enter Your Name:"
})


let opponent = await inquirer.prompt({
    name:"select",
    type:"list",
    message:"Select your Opponent",
    choices:["Skeleton","Assassin","Zombie"]
})

// collect data
let p1 = new hero(player.name)
let o1 = new enemy(opponent.select)

do{
    //skeleton
    if(opponent.select == "Skeleton"){
    
    let ask = await inquirer.prompt({
        name:"opt",
        type:"list",
        message:"Select Your Opponent",
        choices:["Attack","Drink Portion","Run For Your Life..."],
    });
    if(ask.opt =="Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num > 0){
            p1.decreasefuel()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
           
            if(p1.fuel <= 0){
                console.log(chalk.bold.red.italic(`\n\t${p1.name} You lose,try again\n`))
                process.exit()
            }      
        }
        if(num <= 0){
            o1.decreasefuel()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
    
            if(o1.fuel <= 0){
                console.log(chalk.bold.green.italic(`\n\t ${p1.name} You win\n`))
                process.exit()
            }  
    }
}
    if(ask.opt =="Drink Portion"){
        p1.increasefuel()
        console.log(chalk.bold.yellowBright(`you drink health portion, 
        your health fuel is ${p1.fuel}`))
       
    }
    if(ask.opt =="Run For Your Life..."){
        console.log(chalk.bold.red.italic("you lose,good luck for the next time"))
    }
     }
     
    //  assassin
     if(opponent.select == "Assassin"){
        
        let ask = await inquirer.prompt({
            name:"opt",
            type:"list",
            message:"Select Your Opponent",
            choices:["Attack","Drink Portion","Run For Your Life..."],
        });
        if(ask.opt =="Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.decreasefuel()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
               
                if(p1.fuel <= 0){
                    console.log(chalk.bold.red.italic(`\n\t ${p1.name} You lose,try again\n`))
                    process.exit()
                }      
            }
            if(num <= 0){
                o1.decreasefuel()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        
                if(o1.fuel <= 0){
                    console.log(chalk.bold.green.italic(`\n\t ${p1.name} You win\n`))
                    process.exit()
                }  
        }
    }
        if(ask.opt =="Drink Portion"){
            p1.increasefuel()
            console.log(chalk.bold.yellowBright(`you drink health portion, 
            your health fuel is ${p1.fuel}`))
           
        }
        if(ask.opt =="Run For Your Life..."){
            console.log(chalk.bold.red.italic("you lose,good luck for the next time"))
        }
         }

         //zombie
         if(opponent.select == "Zombie"){
            
            let ask = await inquirer.prompt({
                name:"opt",
                type:"list",
                message:"Select Your Opponent",
                choices:["Attack","Drink Portion","Run For Your Life..."],
            });
            if(ask.opt =="Attack"){
                let num = Math.floor(Math.random() * 2)
                if(num > 0){
                    p1.decreasefuel()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                   
                    if(p1.fuel <= 0){
                        console.log(chalk.bold.red.italic(`\n\t ${p1.name} You lose,try again\n`))
                        process.exit()
                    }      
                }
                if(num <= 0){
                    o1.decreasefuel()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            
                    if(o1.fuel <= 0){
                        console.log(chalk.bold.green.italic(`\n\t ${p1.name} You win\n`))
                        process.exit()
                    }  
            }
        }
            if(ask.opt =="Drink Portion"){
                p1.increasefuel()
                console.log(chalk.bold.yellowBright(`you drink health portion, 
                your health fuel is ${p1.fuel}`))
               
            }
            if(ask.opt =="Run For Your Life..."){
                console.log(chalk.bold.red.italic("you lose,good luck for the next time"))
            }
             }
}
while(true)


