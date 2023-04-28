
import { Card,Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { notes } from "../../utils/constant";
import { useEffect,useState } from "react";
import Accordion from 'react-bootstrap/Accordion';






function MyNotes({ history, search }) {

 

  const [ data, setData ] = useState([])

  const deleteHandle = (id) => {
    console.log(id)
  }

useEffect(() => {
  fetchData();
},[])
  
  
 async function  fetchData() {
   await fetch('http://localhost:5000/products',{      
    method: "GET",  
   }).then((response) => 
      response.json()
   )
     .then((data) =>  {setData(data)} )
     .catch((err) =>  console.log(err) );
  }


  console.log(data);
  
return data.length === 0 ?  <><p>Loading ...</p></> :
   (
    <MainScreen title={`Welcome Back..`}>
     
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
        <Accordion defaultActiveKey="0" flush style={{width: '100%'}}>
             {data.map((ele) => {
               return (
                     <Accordion.Item eventKey={ele._id}  key={ele._id}>
                       <Accordion.Header>
                         <Card.Header style={{ display: "flex" }}>
                            <span style={{
                               color: "black",
                               textDecoration: "none",
                               flex: 1,
                               cursor: "pointer",
                               alignSelf: "center",
                               fontSize: 18,
                             }}>
                              {ele.name}
                            </span>
                            <Button href={`/note/${ele._id}`}>Edit</Button>
                            <Button onClick={()=>{deleteHandle(ele.id)}} variant="danger" className="mx-2" > Delete </Button>
                         </Card.Header>
                        </Accordion.Header>
                        <Accordion.Body>
                           {ele.price}
                        </Accordion.Body>
                    </Accordion.Item>
      
          
              )
            })}
         </Accordion>
      
      
      
      
     
    </MainScreen>
  );
}

export default MyNotes;