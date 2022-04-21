const Food = (props) => {
  const { food } = props;
  const [x, y] = food;
  const positionStyle = {
    top: `${x}%`,
    left: `${y}%`,
  };

  return <div className="snake-food" style={positionStyle}></div>;
};

export default Food;
