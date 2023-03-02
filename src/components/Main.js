import photo from "../assets/restaurantfood.jpg";

export default function Main() {
  return (
    <main>
      <div class="main">
        <div class="left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            At our family-owned Mediterranean restaurant, we take great pride in
            offering traditional recipes with a modern twist. Our menu features
            a wide array of authentic dishes, all made with the freshest and
            highest-quality ingredients. Whether you're in the mood for a
            classic Mediterranean appetizer like hummus or falafel, or you're
            looking to try something a little more unique, like our signature
            dish that combines traditional Mediterranean flavors with a modern
            twist, you're sure to find something you love at our restaurant.
          </p>
          <button class="reserveButton">Reserve a table</button>
        </div>
        <div class="right">
          <img src={photo} class="restaurantphoto" alt="img" />
        </div>
      </div>
    </main>
  );
}
