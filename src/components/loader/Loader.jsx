import "./Loader.css";

export const Loader_Ring_2 = ({
  size = 30,
  color = "black",
  trackOpacity = 0.1,
  speed = 0.8,
}) => {
  return (
    <svg
      className="container_ldrs_ring_2"
      viewBox="0 0 40 40"
      style={{
        "--uib-size": `${size}px`,
        "--uib-color": color,
        "--uib-bg-opacity": trackOpacity,
        "--uib-speed": `${speed}s`,
      }}
    >
      <circle
        className="track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
      <circle
        className="car"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
    </svg>
  )
}
