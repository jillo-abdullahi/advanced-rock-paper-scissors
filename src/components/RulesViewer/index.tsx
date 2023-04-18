import { useState } from "react";
import Image from "next/image";
import { GameModal } from "@/components/GameModal";

export const RulesViewer: React.FC = () => {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowRules(true)}
        className="uppercase rounded-xl text-center py-3 px-9 border-2 border-gray-400"
      >
        rules
      </button>
      <GameModal open={showRules} setOpen={setShowRules}>
        <div className="flex flex-col items-center justify-center space-y-20 sm:space-y-10 h-full">
          <div className="w-full flex justify-center sm:justify-between items-center">
            <h1
              className="uppercase text-3xl"
              style={{
                color: "#3B4262",
              }}
            >
              rules
            </h1>
            <button
              className="hidden sm:block"
              onClick={() => setShowRules(false)}
            >
              <Image
                src="/images/icon-close.svg"
                width={20}
                height={20}
                alt="rules"
              />
            </button>
          </div>

          {/* rules image  */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/image-rules-bonus.svg"
              width={336}
              height={330}
              alt="rules"
            />
          </div>
          <button
            className="block sm:hidden"
            onClick={() => setShowRules(false)}
          >
            <Image
              src="/images/icon-close.svg"
              width={20}
              height={20}
              alt="rules"
            />
          </button>
        </div>
      </GameModal>
    </>
  );
};
