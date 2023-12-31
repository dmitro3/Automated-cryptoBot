import React from "react";
import FullContainer from "@/components/custom/FullContainer";
import Stack from "@/components/custom/Stack";
import Prelaunch from "@/components/prelaunch/Prelaunch";

const Home = () => {
  return (
    <Stack width="w-full" margin="mt-4 md:px-6 lg:px-6" sx="bg-no-repeat bg-cover bg-center bg-[url('/bg-prelaunch.png')] bg-fixed">
      <Prelaunch />
    </Stack>
  );
};

export default Home;
