import React, { useState, useEffect} from 'react'
import styled from "styled-components";
import Favorites from './Favorites';
import Reviews from './Reviews';


function Kebabs({user}) {

  const [kebabs, setKebabs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("/kebabs")
      .then((r) => r.json())
      .then((kebabs) => setKebabs(kebabs));
  }, []);

  const addToFavorites = (id) => {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user.id,
        kebab_id: id
      })
    })
      .then((r) => r.json())
  }

  
  return (
      <div >
      <Form className="searchbar" >
      <Input 
        type="text"
        id="search"
        placeholder="Search Kebabs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/> 
     </Form>
     <div style={{color: 'black', textAlign: 'center'}}>
       <br/>
       <br/>
       <Title style={{color: 'red', textAlign: 'center', textDecoration: 'underline', fontFamily: 'bold', fontSize: '60px'}}>KEBABS</Title>
      {kebabs.filter((kebabs) => {
        if (searchTerm === '') {
          return kebabs;
        }else if (kebabs.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return kebabs;
        }
      }).map((kebabs) => (
        <Card key={kebabs.id}>
    <StyledRoot>
      <StyledContainer>
        <StyledPhoto src={kebabs.image_url} alt={kebabs.name} />
        <br/>
        <Title style={{color: 'red', fontSize: '20px', fontWeight: 'bold', textDecoration: 'underline'}}> Name: </Title>
        <Title>{kebabs.name}</Title>
        <br/>
        <Title style={{color: 'red', fontSize: '20px', fontWeight: 'bold', textDecoration: 'underline'}}>Description:</Title>
        <Description>{kebabs.description}</Description>
                                         
      <Button onClick={() => addToFavorites(kebabs.id)}>★</Button>
      <Reviews reviews={kebabs.reviews} user={user}  kebab={kebabs}  />
      </StyledContainer>
      </StyledRoot>
      {/* <Favorites kebab={kebabs} /> */}
    </Card>
    ))}
    </div>
    </div>

  );
}
  
  const StyledRoot = styled.div`
  padding: 50px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 10%;
  margin: auto;
  background: #bebebe;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

`;

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #989898;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  font-size: 18px;

`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  color: #555;
  text-align: center;
  margin-bottom: 10px;

`;

const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  margin: 0;
  color: #555;
  text-align: center;
  margin-bottom: 10px;

`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const Button = styled.button`
  background: "red";
  border: 1px solid red;
  border-radius: 6px; 
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2rem;
  background-color: #bebebe;
  border: 1px solid red;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  &:hover {
    background:  #989898;
    color: red;
  }
  

`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 20%;
  margin: auto;
  background: #bebebe;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;  
  margin-top: 10px;
  font-size: 1.2rem;
`

const Input = styled.input`
  width: 15%;
  height: 23px;
  border-radius: 6px;
  border: 2px solid red;
  border-color: red;
  background-color: #f2f3f4;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2rem;
  
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  margin: auto;
  background: #bebebe;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2rem;
`

export default Kebabs;

