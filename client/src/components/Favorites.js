import React, { useState, useEffect } from "react";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
 
    useEffect(() => {
    fetch("/favorites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          fetch("/kebabs/" + data[i].kebab_id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((r) => {
              if (r.ok) {
                return r.json();
              }
            })
            .then((kebab) => {
                kebab.favorite_id = data[i].id;     
                
              setFavorites((favorites) => [...favorites, kebab]);

            });
        }
      });
  },[]);

    function deleteFavorite(id) {
        console.log(id)
      fetch(`/favorites/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          if (r.ok) {
            setFavorites(favorites.filter((favorite) => favorite.favorite_id !== id));
          }
        }).catch((err) => console.log(err));
    }
       
     return (
    < div style={{backgroundColor: "#dcdcdc"}}>
        <h1 style={{color: "red", textDecoration: "underline", fontSize:" 60px", fontWeight:"bold", textAlign: "auto", float:"left"}}> Favorites</h1>
      <div class="container" >
        <div class="row">
            <br/>
            <br/>
          {favorites.map((favorite) => (
            <>
              <div class="col-sm" >
                <div class="card" style={{ width: "25rem"}}>
                  <img
                    class="card-img-top"
                    style={{ width: "25rem", height: "25rem" }}
                    src={favorite.image_url}
                    alt="Card cap"
                  />
                  <div class="card-body" style={{backgroundColor: "#808080" }}>
                    <h5 class="card-title">{favorite.name}</h5>
                        <button class="btn btn-primary" onClick={() => deleteFavorite(favorite.favorite_id)} style={{backgroundColor: "red"}}>
                            Unfavorite
                        </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Favorites;
