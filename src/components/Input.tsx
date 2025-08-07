
export function Input({reference,placeholder}:{placeholder:string ; reference:any}){
    return <div>
            <input  ref={reference} type={"text"} placeholder={placeholder} className="px-4 py-2 border rounded-sm m-2"></input>
           </div>
}