import ReactGA from "react-ga4";

export function trackEvent({ category, action, label }) {
  ReactGA.event({ category, action, label });
}
