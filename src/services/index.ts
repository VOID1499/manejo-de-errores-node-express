
const data = [
         {
            id:"1",
            name:"pi"
        },
        {
            id:"1",
            name:"po"
        }
]
export const getAllUsers = async ()=> {
    return data
}

export const getUserById = async (id:string)=>{
    return data.find(e=>e.id == id)
}