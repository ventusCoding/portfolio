import NextArrowComponent from "./NextArrow/NextArrow";
import PrevArrowComponent from "./PrevArrow/PrevArrow";

export function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right:"0%",
        height: "20px",
        width: "20px",
        color: "white",
        right:'-3%',
        transform: "translateY(-50%)",
        zIndex:"1"
      }}
      onClick={onClick}
    >
      <NextArrowComponent />
    </div>
  );
}

export function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left:"-3%",
        height: "20px",
        width: "20px",
        transform: "translateY(-50%)",
        zIndex:"1",
      }}
      onClick={onClick}>
      <PrevArrowComponent />
    </div>
  );
}
