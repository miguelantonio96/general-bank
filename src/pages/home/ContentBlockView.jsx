export const ContentBlockView = () => {
  return (
    <section className="content-block__container">
      <h2 className="content-block__title">Money Made Simple</h2>
      <p className="content-block__description">
        This is a placeholder for the Content Block View component.
      </p>
      <div className="content-block__cards-container">
        <div className="content-block__card">
          <img src="/img/secure-transactions.png" alt="Security Icon" />
          <div className="content-block__card__info">
            <h3 className="content-block__card__title">Secure Transactions</h3>
            <p className="content-block__card__description">
              Your security is our priority. We use advanced encryption to
              protect your data.
            </p>
          </div>
        </div>
        <div className="content-block__card">
          <img src="/img/easy-budgeting.png" alt="Budgeting Icon" />
          <div  className="content-block__card__info"  >
            <h3 className="content-block__card__title">Easy Budgeting</h3>
            <p className="content-block__card__description">
              Track your spending and manage your budget with our intuitive
              tools.
            </p>
          </div>
        </div>
        <div className="content-block__card">
          <img src="/img/simple-onboarding.png" alt="Onboarding Icon" />
          <div  className="content-block__card__info"  >
            <h3 className="content-block__card__title">Simple Onboarding</h3>
            <p className="content-block__card__description">
              Get started quickly with our easy and straightforward onboarding
              process.
            </p>
          </div>
        </div>
      </div>
      <button
        className="content-block__button"
        onClick={() => (location.href = "/auth/register-1")}
      >
        Learn More
      </button>
    </section>
  );
};
