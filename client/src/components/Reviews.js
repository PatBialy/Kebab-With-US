import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditReview from "./EditReview";

function Reviews({ user, kebab }) {

    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
    user_id: user.id,
    kebab_id: kebab.id,
    comment: "",
    rating: null,
  });

  useEffect(() => {
    fetch(`/kebabs/${kebab.id}`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  function addNewReview(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
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
      .then((data) => setReviews([...reviews, data]));
  }

  function deleteReview(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          setReviews(reviews.filter((review) => review.id !== id));
          console.log(id);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <br />
      {reviews.map((review) => (
        <>
        <EditReview review={review} kebab={kebab} user={user}/>
        <Button onClick={() => deleteReview(review.id)}>🗑</Button>{" "}
        <br/>
        <br/>
        </>
))}

      <Form>
        <Title
          style={{
            color: "red",
            fontSize: "25px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          {" "}
          Add A Review:{" "}
        </Title>
        <Input
          type="number"
          min="1"
          max="5"
          pattern="[1-5]"
          id="rating"
          placeholder="Rating..."
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({ ...newReview, rating: e.target.value })
          }
        />

        <StyledTextarea
          name="comment"
          id="comment"
          placeholder="Comment..."
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />

        <Button type="submit" onClick={addNewReview}>
          Submit
        </Button>

      </Form>
      <br />
    </div>
  );
}

const Title = styled.h1``;

const Button = styled.button`
  background: "red";
  border: 1px solid red;
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
  background-color: #f2f3f4;
  font-size: 1.2rem;
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
const Form = styled.form``;

const StyledTextarea = styled.textarea`
  width: 100%;
  margin: 5px 5px 0px 0px;
  height: 30px;
`;

export default Reviews;
