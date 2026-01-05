import "./ShootingStars.css"; // Make sure to create this CSS file

const ShootingStars = () => {
  const stars = [...Array(20)];

  return (
    <div className="star-background">
      {stars.map((_, index) => {
        const style = {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        };

        return <div key={index} className="star" style={style} />;
      })}
    </div>
  );
};

export default ShootingStars;
