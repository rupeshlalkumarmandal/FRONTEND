function fetchUserData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const success = true;

            if(success){
                resolve({username: "John_doe", age: 25});
            } else{
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

fetchUserData()
.then((data) => console.log(data))
.catch((error) =>console.log(error));


async function getUserData() {
    try{
        const data = await fetchUserData();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

getUserData();