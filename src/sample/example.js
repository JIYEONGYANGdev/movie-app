import React from 'react'
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
    <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
      </div>
)
}

const foodILike = [{
  id:1,
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  rating: 5
},
  {
    id:2,
  name: "Samgyeopsal",
  image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  rating: 4.9
},
  {
    id:3,
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  rating: 4.8
},
  {
    id:4,
  name: "Doncasu",
  image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  rating: 4.7
},
  {
    id:5,
  name: "Kimbap",
  image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating: 3.9
}];

// function renderFood(dish) {
//   return (
//     <Food name={dish.name} picture={ dish.image}/>
//   )
// }

// props 체크 가능
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // rating: PropTypes.number // if there's no {rating} but no warning, because 필수라고는 X, number >or undefined<
};

function Example() {
  // console.log(foodILike.map(renderFood))
  return (
    <div>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(food => <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/> )}
    </div>
  )
}

export default Example
