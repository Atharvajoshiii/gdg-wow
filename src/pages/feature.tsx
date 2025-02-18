import { AnimatedCardDemo } from "@/components/animatedcarddemo";

import { DefaultDemo } from "@/components/text";

const Feature = () => {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
        {/* First Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatedCardDemo />
        </div>

        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <DefaultDemo name="About GDSC WOW" />
          <p className="text-lg leading-relaxed text-gray-600 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            doloribus tenetur tempore ipsam earum officia, tempora nihil
            mollitia, minima exercitationem dolore praesentium laborum
            voluptatibus esse illum quod quidem ducimus facere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
