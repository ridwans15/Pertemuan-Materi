
const getDataAsync = async () => {
    let response = await fetch('https://api.github.com/users/ridwans15')
    let result = await response.json()

    const name = document.getElementById('name') 
    const login = document.getElementById('login')
    const followers = document.getElementById('followers')
    const avatarUrl = document.getElementById('avatar_url')
    
    console.log(result)

    name.innerHTML = result.name
    avatarUrl.src = result.avatar_url
    login.innerHTML = result.login 
    followers.innerHTML = ("Jumlah followers kamu cuma " + result.followers )
    }
    
getDataAsync()