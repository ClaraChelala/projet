export async function getallposts(){
    const response = await fetch('http://localhost:4000/post/Allposts')
    const res  = await response.json()
    return res
}


