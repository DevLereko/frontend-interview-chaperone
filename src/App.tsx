import "./App.css";
import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(
  () => import("./components/landing-page/LandingPage")
);
const Form = React.lazy(() => import("./components/form/Form"));
const ContentPanel = React.lazy(
  () => import("./components/content-page/ContentPage")
);

function App() {
  return (
    <Suspense
      fallback={
        <Flex
          direction="column"
          h="100vh"
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Flex>
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* nesting routes so that we can navigate back and forth */}
        <Route path="landing-page" element={<LandingPage />}>
          <Route index element={<Form />} />
          <Route path="content-page" element={<ContentPanel />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
