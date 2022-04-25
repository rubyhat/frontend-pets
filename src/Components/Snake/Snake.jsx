const Snake = (props) => {
  const { snakeData } = props;
  return (
    <div>
      {snakeData.map((dot, index) => {
        const [x, y] = dot;
        const position = {
          top: `${x}%`,
          left: `${y}%`,
        };
        return <div className="snake-dot" key={index} style={position}></div>;
      })}
    </div>
  );
};

export default Snake;
