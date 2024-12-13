import "./Loader.css";

export function Loader() {
  return (
    <div className="loader-conteiner">
      <div className="loader-logo">
        <img src="./loader.svg" alt="death star icon loader" className="rotating-icon"/>
      </div>
    </div>
  );
}
