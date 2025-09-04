export const PromotionsView = () => {
  return (
    <section
      className="promotions__container"
      style={{
        backgroundColor: "#eaf9fe",
        borderRadius: "12px",
        width: "100%",
        margin: "2rem auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "var(--azul-claro)",
          marginBottom: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Become a Client and Get
      </h1>
      <article className="promotions__cards" style={{ display: "flex" }}>
        <div
          className="promotion__card"
          style={{
            background: "#c7eeff",
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "fit-content",
            marginBottom: "2rem",
          }}
        >
          <h2
            className="promotion__card-title"
            style={{
              color: "var(--azul-claro)",
              fontSize: "1.5rem",
              marginBottom: "0.75rem",
              fontWeight: "bold",
            }}
          >
            50% Off on First Deposit!
          </h2>
          <p
            className="promotion__card-description"
            style={{
              color: "#4a5568",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            Open a new account and get 50% off on your first deposit. Limited
            time offer!
          </p>
          <button
            className="promotion__card-button"
            style={{
              width: "100%",
              background: "var(--azul-claro)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "0.5rem",
              transition: "background 0.2s",
            }}
          >
            Get Started
          </button>
          <span
            style={{
              color: "#718096",
              fontSize: "0.95rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            View offer Details
          </span>
        </div>
        <img
          src="/img/become-a-client.png"
          alt="Promotional Decorative"
          style={{ width: "500px", height: "250px", margin: "0 2rem" }}
          className="promotion__card-image"
        />
      </article>

      <p style={{ textAlign: "center", color: "#000000", fontSize: "1.05rem" }}>
        Explore our exclusive deals and save big on your favorite services.{" "}
        <span>
          <a
            href="/promotions"
            style={{ color: "#3182ce", textDecoration: "none" }}
          >
            See all promotions
          </a>
        </span>
      </p>
    </section>
  );
};
