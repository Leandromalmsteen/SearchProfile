import ContentLoader from "react-content-loader";

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={1}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="71" y="171" rx="2" ry="2" width="180" height="180" />
      <rect x="288" y="82" rx="0" ry="0" width="28" height="0" />
    </ContentLoader>
  </div>
);

export default CardLoader;
