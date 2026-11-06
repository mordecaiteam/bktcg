export default function LoadingScreen() {
  return (
    <div className="site-loader" role="status" aria-live="polite" aria-label="Loading page">
      <img className="site-loader-logo" src="/bktcg-logo.webp" alt="" width="176" height="176" fetchPriority="high" />
      <p className="site-loader-text">Loading...</p>
    </div>
  );
}
