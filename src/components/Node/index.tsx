export enum NodeType {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  LIZARD = "lizard",
  SPOCK = "spock",
}

export const Node: React.FC<{ children: JSX.Element; nodeType: NodeType }> = ({
  children,
  nodeType,
}) => {
  let mainCircleBorderColor, outerCircleBorderColor;

  switch (nodeType) {
    case NodeType.ROCK:
      mainCircleBorderColor = "#DB2E4D";
      outerCircleBorderColor = "#9D1634";
      break;
    case NodeType.PAPER:
      mainCircleBorderColor = "#4664F4";
      outerCircleBorderColor = "#2A45C2";
      break;
    case NodeType.SCISSORS:
      mainCircleBorderColor = "#EB9F0E";
      outerCircleBorderColor = "#C76C1B";
      break;
    case NodeType.LIZARD:
      mainCircleBorderColor = "#834EE3";
      outerCircleBorderColor = "#5F37A8";
      break;
    case NodeType.SPOCK:
      mainCircleBorderColor = "#3FB7CD";
      outerCircleBorderColor = "#2D8DAB";
      break;
  }

  return (
    <div className="relative">
      <div
        className={`flex relative z-30 top-0 left-0 items-center overflow-hidden rounded-full justify-center border-16.84`}
        style={{
          width: "145px",
          height: "145px",
          borderColor: `${mainCircleBorderColor}`,
          backgroundColor: "#BABFD4",
        }}
      >
        <div
          className="absolute z-10 top-1.5 left-0 right-0 mx-auto bg-white rounded-full"
          style={{
            width: "111px",
            height: "110px",
          }}
        ></div>
        <div className="z-20">{children}</div>
      </div>
      <div
        className={`absolute z-20 top-1 left-0 border-12 border-blue-500`}
        style={{
          width: "145px",
          height: "148px",
          borderRadius: "50%",
          borderColor: `${outerCircleBorderColor}`,
          boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.196706)",
        }}
      ></div>
    </div>
  );
};
