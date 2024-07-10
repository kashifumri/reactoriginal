import table from 'react-bootstrap';
function Bootable(){
    const student=
        [
        { name:'kashif umri',id:'21cs083',contactno:'111'},
        { name:'avais umri',id:'19cs083',contactno:'222'},
        { name:'aaman umri',id:'20cs083',contactno:'333'}

        ]
        
    return(
       
<div >
    <table  border='3'>
    
    <tbody>
    <tr >
        <td>name</td>
        <td>id</td>
        <td>contactno</td>
       </tr>   
      { student.map((details,i) =>
       <tr border='1' key={i}>
        <td>{details.name}</td>
        <td>{details.id}</td>
        <td>{details.contactno}</td>
       </tr>
       )
      }
      </tbody>
       </table>    
</div>
    )
}
export default Bootable