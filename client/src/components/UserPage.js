import React from "react";
import styled from "styled-components";

const UserPage = ({ user }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "red",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          background: "#989898",
          color: "#555",
          minWidth: "400px",
          textAlign: "justify",
          padding: "10px",
          overflowY: "scroll",
        }} >
          
          <h2 style={{ textAlign: "center" }}>Welcome, {user.username}!</h2>
          <img
            style={{ width: '100%'}}
            src={user.image_url}
            alt="img"
          ></img>
          <br/>
          <br/>
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>  Bio</h3>
          <Card>
          <h3 style={{ fontSize: '18px' }}>{user.bio}</h3>
          </Card>
        </div>
        <div >
          <img style={{height: '90vh', width: '130vh'}} alt="kebab" src="https://media.istockphoto.com/photos/kebabs-grilled-meat-and-vegetables-on-wooden-background-picture-id913058752?k=20&m=913058752&s=170667a&w=0&h=1JedSFqR7j1HwDz5ZHGR_-TJmHTk8wvnK8pk_NB_tkw="></img>
        </div>
       
    </div>
  );
};

export default UserPage;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin: auto;
  background: #d3d3d3;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`