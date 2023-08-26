export function fetchAllQuestion(){

    return new Promise(async(resolve)=>{
        const response = await fetch('http://localhost:8080/question')
        const data = await response.json();
        resolve({data})
    })

}