import "./StarRating.css";

const StarRating = (props) => {
  const rateArray = [];
  for (let i = 0; i <= 6; i++) {
    if (props.rate > i && props.rate - i >= 1) {
      rateArray.push("full_star.svg");
    } else if (props.rate - i >= 0.5) {
      rateArray.push("half_star.svg");
    } else {
      rateArray.push("empty_star.svg");
    }
  }
  return (
    <div className="stars_wrapper">
      {rateArray.map((star, index) => (
        <img key={index} src={`/public/${star}`} alt="" />
      ))}
    </div>
  );
};

export default StarRating;
