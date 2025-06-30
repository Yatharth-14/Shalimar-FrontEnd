import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

ReactGA.initialize(measurementId);
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});
createRoot(document.getElementById("root")!).render(<App />);
