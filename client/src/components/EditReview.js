import React, {useState } from "react";
import styled from "styled-components";

function EditReview({review, kebab, user}) {

  const [edit, setEdit] = React.useState(false);
  const [localReview, setLocalReview] = React.useState(review);

  const [newReview, setNewReview] = useState({
    user_id: user.id,
    kebab_id: kebab.id,
    comment: localReview.comment,
    rating: localReview.rating,
  });
    
  function updateReview(e) {
    e.preventDefault();
    fetch(`/reviews/${localReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((review) => {
        setLocalReview({
            id: review.id,
            rating: review.rating,
            comment: review.comment,
          })
        setEdit(false)
      })
      .catch((err) => console.log(err));
    }
    return (
    <>
      {edit ? 
      (
        //EDIT COMMENT SECTION
        <>
            <form>
        <Title style={{color: 'red', textAlign: 'center', textDecoration: 'underline'}}>Edit Review</Title>
        <Title>{localReview.comment}</Title>
        <Input
          type="number"
          min="1"
          max="5"
          pattern="[1-5]"
          id="rating"
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({ ...newReview, rating: e.target.value })
          } />

        <Input
          name="comment"
          id="comment"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
  
        />
        <Button type="submit" onClick={updateReview}>Submit</Button> 
      </form>
            <Button onClick={ () => setEdit(false)}>Cancel</Button>
            <br/>
            <br/>
        </>
        //END EDIT COMMENT SECTION
      ) 
      : (
        // THIS IS THE READ ONLY SECTION
        <>
        <Card>
          <h2
            style={{
              color: "red",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {" "}
            Comment:{" "}
          </h2>
          <Title style={{ color: "#696969", fontSize: "25px" }}>
            {localReview.comment} 
          </Title>
          <h2
            style={{
              color: "red",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {" "}
            Rating:{" "}
          </h2>
          <Title>{localReview.rating}</Title>
          <Button  onClick={() => setEdit(true)} syle={{textAlign: "center"}}>
            EDIT
          </Button>
          <br/>
          </Card>
        </>
        //END OF READ ONLY SECTION
      )}
    </>
  );
}

export default EditReview;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  margin: auto;
  background: #bebebe;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

// const StyledRoot = styled.div``;

// const StyledContainer = styled.div``;

// const Text = styled.p``;
const Button = styled.button`
  background: "red";
  border: 1px solid red;
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px; 
  background-color: #f2f3f4;
  font-size: 1rem;
  border: 1px solid red;
  border-radius: 6px;
  color: red;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #989898;
    color: red;
  }

`;
const Input = styled.input`
  width: 100%;
  margin: 5px 5px 0px 0px;
  height: 30px;
  border: none;
  font-size: 1.2rem;
  background-color: #f2f3f4;
`;
// const Form = styled.form``;
// const FormField = styled.div``;
// const Label = styled.label``;

// const StyledTextarea = styled.textarea`
//   width: 100%;
//   margin: 5px 5px 0px 0px;
//   height: 30px;
// `;

const Title = styled.h2`
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  color: #555;
  text-align: center;
  margin-bottom: 10px;

`;
