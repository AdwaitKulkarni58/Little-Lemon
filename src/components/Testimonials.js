import favicon from "../assets/favicon.png";

export default function Testimonials() {
  return (
    <>
      <div class="testimonials">
        <div class="testimonials1">
          <text class="testtext">Testimonials</text>
        </div>
        <div class="testimonials2">
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon" />
            <text>Rating: *****</text>
            <text>Name: Lucas </text>
            <text>Review</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon" />
            <text>Rating: ***</text>
            <text>Name: Henry</text>
            <text>Review</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon" />
            <text>Rating: ***</text>
            <text>Name: John</text>
            <text>Review</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon" />
            <text>Rating: **</text>
            <text>Name: Harry</text>
            <text>Review</text>
          </div>
        </div>
      </div>
    </>
  );
}
