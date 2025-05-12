import { TextShimmerWave } from "@/components/global/text-shimmer";

const AuthLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <TextShimmerWave
        className="[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]"
        duration={1}
        spread={1}
        zDistance={1}
        scaleDistance={1.1}
        rotateYDistance={20}
      >
        Creating best experiences for you...
      </TextShimmerWave>
    </div>
  );
};

export default AuthLoading;
