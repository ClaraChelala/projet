export async function getallusers(){
    const response = await fetch('http://localhost:4000/user/')
    const res  = await response.json()
    return res
}