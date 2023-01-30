import Carousel from "react-bootstrap/Carousel";
import "./Principal.scss";

export const Principal = () => {
  return (
    <div className="principal__container">
      <Carousel className="carousel__container">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./img/Basketball-banner-2.jpeg"
            alt="Basket"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./img/Basketball-banner.jpeg"
            alt="Basket"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Running.jpeg"
            alt="Running"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
