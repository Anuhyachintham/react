function Carname(Props){
    return(<h1>{Props.brand}</h1>)
}


function Brandname(){
    bumaName="buma"
    return(<div>
        <Carname brand={bumaName}/>
    </div>)
}
export default Brandname;
