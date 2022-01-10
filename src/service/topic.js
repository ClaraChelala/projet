export async function getalltopics(){
    const response = await fetch('http://localhost:4000/topic/')
    const res  = await response.json()
    return res
}