 function ListGroup(){
    const items=[
        "chennai","Mumbai","Bengalore","Delhi"
    ]

    const handleClick =(event)=>console.log(event)
    return(
       <>
        <h1>List</h1>
        {items.length==0 && <p>No Items Found</p>}
        <ul className="list-group">
           {items.map((item,index)=>(
            <li className="list-group-item"
             key={item}
             onClick={handleClick}
             >{item}</li>
           ))}
        </ul>
    </>
    );
 }

 export default ListGroup;