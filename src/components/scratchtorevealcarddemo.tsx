
import ScratchToReveal from "@/components/eldoraui/scratchtoreveal";

const ScratchToRevealDemo = () => {
  const handleComplete = () => {
    // Do Something
  };

  return (
    <div>
      <ScratchToReveal
        width={250}
        height={250}
        minScratchPercentage={70}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        onComplete={handleComplete}
      >
        <p className="text-9xl">19th June</p>
      </ScratchToReveal>
    </div>
  );
};

export default ScratchToRevealDemo;
