function validateForm(name, age){
    try{
        if(!name){
            throw new Error ("Name cannot be empty");
        }
        if(age < 18){
            throw new Error("You must be at least 18 years old");
        }
        console.log("Form is vaild!");
    } catch (erro){
        console.error("Erro: ", error.message);
    }
}

validateForm("John", 19);