import salad from "../assets/greek salad.jpg";
import pie from "../assets/lemon dessert.jpg";
import cart from "../assets/edit.png";

export default function Specials() {
  return (
    <>
      <div class="highlights">
        <h1 class="title3">This weeks speacials</h1>
        <button class="click2">Online Menu</button>
        <div className="special1">
          <div className="box-image">
            <img
              src={salad}
              width="100"
              height="100"
              alt="img"
              class="specialimage"
            />
          </div>
          <div className="box-text">
            <div class="foodtitle">
              <text class="foodname">Greek Salad</text>
              <text class="foodprice">$ 12.99</text>
            </div>
            <text class="fooddesc">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </text>
            <div class="ordering">
              <text class="delivery">Order a delivery</text>
              <img
                src={cart}
                width="40px"
                height="40px"
                alt="cart"
                class="cart"
              />
            </div>
          </div>
        </div>
        <div className="special2">
          <div className="box-image">
            <img
              src={pie}
              width="100"
              height="100"
              alt="img"
              class="specialimage"
            />
          </div>
          <div className="box-text">
            <div class="foodtitle">
              <text class="foodname">Lemon Dessert</text>
              <text class="foodprice">$ 5.00</text>
            </div>
            <text class="fooddesc">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </text>
            <div class="ordering">
              <text class="delivery">Order a delivery</text>
              <img src={cart} width="40" height="40" alt="cart" class="cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
