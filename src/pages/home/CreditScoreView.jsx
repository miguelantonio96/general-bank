export const CreditScoreView = () => {
  return (
    <section className="credit-score__container">
      <div className="credit-score__info">
        <h2 className="credit-score__title">Stay on Top of Your Credit</h2>
        <p className="credit-score__description">
          Track your credit score and review your credit history alongside your
          accounts. Everything you need to stay informed—all in one place.
        </p>
        <a
          className="credit-score__button"
          onClick={() => (location.href = "/auth/register-1")}
        >
          Learn More
        </a>
      </div>
      <div className="credit-score__image-container">
        <img
          src="/img/credit-score-fisco.png"
          alt="Credit Score Illustration"
          className="credit-score__image"
        />
      </div>
    </section>
  );
};
