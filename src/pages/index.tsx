import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { RulesViewer } from "@/components/RulesViewer";
import { Node } from "@/components/Node";
import { NodeType } from "@/components/Node";

enum Winner {
  USER = "user",
  COMPUTER = "computer",
  DRAW = "draw",
}

export default function Home() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState<NodeType | null>(null);
  const [computerChoice, setComputerChoice] = useState<NodeType | null>(null);
  const [winner, setWinner] = useState<Winner | null>(null);
  const [showWinnerStatus, setShowWinnerStatus] = useState(false);
  const [showResultsCard, setShowResultsCard] = useState(false);

  const computerChoices = [
    NodeType.ROCK,
    NodeType.PAPER,
    NodeType.SCISSORS,
    NodeType.LIZARD,
    NodeType.SPOCK,
  ];

  const rules = {
    [NodeType.ROCK]: {
      beats: [NodeType.SCISSORS, NodeType.LIZARD],
      image: "/images/icon-rock.svg",
    },
    [NodeType.PAPER]: {
      beats: [NodeType.ROCK, NodeType.SPOCK],
      image: "/images/icon-paper.svg",
    },
    [NodeType.SCISSORS]: {
      beats: [NodeType.PAPER, NodeType.LIZARD],
      image: "/images/icon-scissors.svg",
    },
    [NodeType.LIZARD]: {
      beats: [NodeType.PAPER, NodeType.SPOCK],
      image: "/images/icon-lizard.svg",
    },
    [NodeType.SPOCK]: {
      beats: [NodeType.ROCK, NodeType.SCISSORS],
      image: "/images/icon-spock.svg",
    },
  };

  const handleUserChoice = (choice: NodeType) => {
    setComputerChoice(null);
    // show results card immediately
    setShowResultsCard(true);
    setTimeout(() => setUserChoice(choice), 1000);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setShowWinnerStatus(false);
    setShowResultsCard(false);
  };

  // setting choice after a delay for dramatic effect
  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        const computerChoice = Math.floor(Math.random() * 5);
        setComputerChoice(computerChoices[computerChoice]);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice]);

  // set winner status to show after a delay
  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        setShowWinnerStatus(true);
      }, 1000);
    }
  }, [winner]);

  // set winner based on choices
  useEffect(() => {
    if (userChoice && computerChoice) {
      if (userChoice === computerChoice) {
        setWinner(Winner.DRAW);
      } else if (rules[userChoice].beats.includes(computerChoice)) {
        setWinner(Winner.USER);
        setScore((prev) => prev + 1);
      } else {
        setWinner(Winner.COMPUTER);
        setScore((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice, userChoice]);

  const transitionStyles =
    "transform duration-200 ease-in-out transition-transform";

  return (
    <>
      <Head>
        <title>Rock Paper</title>
        <meta name="description" content="a fun rock paper scissors game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="h-full w-full min-h-screen"
        style={{
          background:
            "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full pt-12">
          {/* title and score  */}
          <div className="w-full max-w-[700px] p-5 rounded-xl flex items-center justify-between border-2 border-gray-400">
            <Image
              src="/images/logo-bonus.svg"
              width={159}
              height={96}
              alt="logo"
            />
            <div className="flex flex-col space-y-1 items-center rounded-md text-center px-12 py-8 bg-white">
              <h1
                className="uppercase"
                style={{
                  color: "#2A45C2",
                }}
              >
                score
              </h1>
              <h2
                className="text-6xl font-bold"
                style={{
                  color: "#565468",
                }}
              >
                {score}
              </h2>
            </div>
          </div>

          {/* // game board */}
          {!userChoice && (
            <div className="flex items-center justify-center w-full mt-24">
              <div className="relative p-4 border-1 border-gray-200">
                <Image
                  src="/images/bg-pentagon.svg"
                  width={345}
                  height={345}
                  alt="rules"
                />

                {/* top center */}
                <div className="absolute z-40 -top-12 left-0 right-0 mx-auto w-fit">
                  <Node
                    nodeType={NodeType.SCISSORS}
                    handleUserChoice={handleUserChoice}
                  >
                    <Image
                      src={rules[NodeType.SCISSORS].image}
                      width={62}
                      height={60}
                      alt="rules"
                    />
                  </Node>
                </div>

                {/* top left  */}
                <div className="absolute top-14 -left-12 w-fit">
                  <Node
                    nodeType={NodeType.SPOCK}
                    handleUserChoice={handleUserChoice}
                  >
                    <Image
                      src={rules[NodeType.SPOCK].image}
                      width={62}
                      height={60}
                      alt="rules"
                    />
                  </Node>
                </div>

                {/* top right  */}
                <div className="absolute top-14 -right-12 w-fit">
                  <Node
                    nodeType={NodeType.PAPER}
                    handleUserChoice={handleUserChoice}
                  >
                    <Image
                      src={rules[NodeType.PAPER].image}
                      width={62}
                      height={60}
                      alt="rules"
                    />
                  </Node>
                </div>

                {/* bottom left  */}
                <div className="absolute -bottom-10 left-0 w-fit">
                  <Node
                    nodeType={NodeType.LIZARD}
                    handleUserChoice={handleUserChoice}
                  >
                    <Image
                      src={rules[NodeType.LIZARD].image}
                      width={62}
                      height={60}
                      alt="rules"
                    />
                  </Node>
                </div>

                {/* bottom right  */}
                <div className="absolute -bottom-10 right-0 w-fit">
                  <Node
                    nodeType={NodeType.ROCK}
                    handleUserChoice={handleUserChoice}
                  >
                    <Image
                      src={rules[NodeType.ROCK].image}
                      width={62}
                      height={60}
                      alt="rules"
                    />
                  </Node>
                </div>
              </div>
            </div>
          )}

          {/* game result  */}
          {showResultsCard && (
            <div className="flex items-center justify-between w-full mt-24 max-w-[700px]">
              {/* user choice  */}
              <div
                className={`${transitionStyles} ${
                  userChoice ? "scale-100" : "scale-0"
                }`}
              >
                <div className="uppercase mb-16 font-bold text-2xl">
                  you picked
                </div>

                <div className="transform scale-150">
                  {userChoice && (
                    <Node nodeType={userChoice}>
                      <Image
                        src={rules[userChoice].image}
                        width={62}
                        height={60}
                        alt="rules"
                      />
                    </Node>
                  )}
                </div>
              </div>

              {/* win/lose/draw CTA  */}
              <div
                className={`flex flex-col space-y-6 justify-center items-center transform transition-transform duration-200 ${
                  showWinnerStatus ? "scale-100" : "scale-0"
                }`}
              >
                <div className="uppercase font-bold text-5xl">
                  {winner === Winner.DRAW
                    ? "draw"
                    : winner === Winner.USER
                    ? "you win"
                    : "you lose"}
                </div>
                <button
                  className="uppercase px-14 py-4 bg-white hover:bg-opacity-80 transition-opacity duration-200"
                  style={{
                    color: "#3B4262",
                    borderRadius: "8px",
                  }}
                  onClick={() => resetGame()}
                >
                  play again
                </button>
              </div>

              {/* computer choice  */}

              <div
                className={`${transitionStyles} ${
                  computerChoice ? "scale-100" : "scale-0"
                } text-center`}
              >
                <div className="uppercase mb-16 font-bold text-2xl">
                  the house picked
                </div>
                {computerChoice ? (
                  <div className="transform scale-150">
                    <Node nodeType={computerChoice}>
                      <Image
                        src={rules[computerChoice].image}
                        width={62}
                        height={60}
                        alt="rules"
                      />
                    </Node>
                  </div>
                ) : (
                  <div className="animate-pulse">
                    <div
                      className="rounded-full bg-black bg-opacity-10 h-10 w-10"
                      style={{
                        width: "224px",
                        height: "224px",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* game rules view button  */}
        <div className="absolute bottom-8 right-8">
          <RulesViewer />
        </div>
      </main>
    </>
  );
}
