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
  let mainCircleColor, outerCircleColor;

  switch (nodeType) {
    case NodeType.ROCK:
      mainCircleColor = "border-red-500";
      outerCircleColor = "border-red-500";
      break;
    case NodeType.PAPER:
      mainCircleColor = "border-yellow-500";
      outerCircleColor = "border-yellow-500";
      break;
    case NodeType.SCISSORS:
      mainCircleColor = "border-purple-500";
      outerCircleColor = "border-purple-500";
      break;
    case NodeType.LIZARD:
      mainCircleColor = "border-red-500";
      outerCircleColor = "border-green-500";
      break;
    case NodeType.SPOCK:
      mainCircleColor = "border-blue-500";
      outerCircleColor = "border-blue-500";
      break;
  }

  return (
    <div className="relative">
      <div
        className={`flex relative z-30 top-0 left-0 items-center overflow-hidden rounded-full justify-center border-16.84`}
        style={{
          width: "145px",
          height: "145px",
          borderColor: "#834EE3",
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
          borderColor: "#5F37A8",
          boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.196706)",
        }}
      ></div>
    </div>
  );
};
