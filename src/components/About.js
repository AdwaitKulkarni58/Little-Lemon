import image1 from "../assets/restaurant.jpg";
import image2 from "../assets/restaurant chef B.jpg";

export default function About() {
  return (
    <>
      <div class="about">
        <div class="leftabout">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercise nulla pariatur et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exer cum soluta
            nobis nost laborum et dolor. Excepteur sint occaecat cupiditat non
            proident.
          </p>
        </div>
        <div class="rightabout">
          <img src={image1} class="jpg1" alt="img" />
          <img src={image2} class="jpg2" alt="img" />
        </div>
      </div>
    </>
  );
}
