import RestTypography from "./RestTypos";

export default function TyposLeft() {
  return (
    <div className="p-8 space-y-4">
      <RestTypography
        variant="muted"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />
      <RestTypography
        variant="primary"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />
      <RestTypography
        variant="info"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />
      <RestTypography
        variant="success"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />
      <RestTypography
        variant="warning"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />
      <RestTypography
        variant="danger"
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
      />

      {/* Header Section */}
      <header>
        <h1 className="text-4xl font-light">Header with small subtitle</h1>
        <small className="text-gray-500 text-base">
          <p className="text-sm text-gray-500 mt-2">{`Use "Small" tag for the headers`}</p>
        </small>
      </header>
    </div>
  );
}
