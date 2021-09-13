// promise
// const getData = () => {
//     fetch("https://api.github.com/users/ridwans15")
//         .then((Response) => Response.json())
//         .then((Result) => console.log(Result))
//         .catch((error) => alert(error, "Hubungi admin"))
// }
// getData()


// async
const getDataAsync = async () => {
    let response = await fetch("https://api.github.com/users/ridwans15");
    let result = await response.json()
    return await result
}
getDataAsync();