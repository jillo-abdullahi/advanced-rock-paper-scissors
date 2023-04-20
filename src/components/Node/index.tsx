export enum NodeType {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  LIZARD = "lizard",
  SPOCK = "spock",
}

interface NodeProps {
  children: JSX.Element;
  nodeType: NodeType;
  handleUserChoice?: (userChoice: NodeType) => void;
}

export const Node: React.FC<NodeProps> = ({
  children,
  nodeType,
  handleUserChoice,
}) => {
  let mainCircleBorderColor, outerCircleBorderColor;

  switch (nodeType) {
    case NodeType.ROCK:
      mainCircleBorderColor = "border-rock";
      outerCircleBorderColor = "border-rock-secondary";
      break;
    case NodeType.PAPER:
      mainCircleBorderColor = "border-paper";
      outerCircleBorderColor = "border-paper-secondary";
      break;
    case NodeType.SCISSORS:
      mainCircleBorderColor = "border-scissors";
      outerCircleBorderColor = "border-scissors-secondary";
      break;
    case NodeType.LIZARD:
      mainCircleBorderColor = "border-lizard";
      outerCircleBorderColor = "border-lizard-secondary";
      break;
    case NodeType.SPOCK:
      mainCircleBorderColor = "border-spock";
      outerCircleBorderColor = "border-spock-secondary";
      break;
  }

  return (
    <button
      className="relative hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={() => handleUserChoice && handleUserChoice(nodeType)}
    >
      <div
        className={`flex relative z-30 top-0 left-0 items-center overflow-hidden rounded-full justify-center border-16.84 ${mainCircleBorderColor} bg-background`}
        style={{
          width: "145px",
          height: "145px",
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
        className={`absolute z-20 top-1 left-0 border-12 border-blue-500 ${outerCircleBorderColor}`}
        style={{
          width: "145px",
          height: "148px",
          borderRadius: "50%",
          boxShadow: " 0px 3px 3px rgba(0, 0, 0, 0.196706)",
        }}
      ></div>
    </button>
  );
};
