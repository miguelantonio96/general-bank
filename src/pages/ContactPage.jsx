const title =
  "Whatever your question or concern, you can contact your local city banker for the personalized service you know.";

export const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>{title}</h2>
      <section className="contact-cards-container">
        <div className="contact-card">
          <h2>Online and Mobile Banking</h2>
          <p>
            For help with online or mobile banking, call our Customer Service
            Center at (888) 816-8064 or log in to Online Banking to chat with an
            agent. Service hours are Monday to Friday from 8:00 a.m. to 8:00
            p.m. and Saturdays from 8:00 a.m. to 5:00 p.m.
          </p>
        </div>
        <div className="contact-card">
          <h2>Credit and Debit Card Support</h2>
          <p>
            If you need to report a lost or stolen card, you can do so using the
            Manage Card feature within the City Mobile Banking app or by calling
            (833) 933-1681 (domestic) or (812) 647-9794 (international).
          </p>
          <p>
            To activate a debit card or reset your debit card PIN, call (833)
            681-3454.
          </p>
          <p>
            If you have other questions about debit and credit cards, call our
            Customer Service Center at (888) 816-8064 or log in to Online
            Banking to chat with an agent. Service hours are Monday to Friday
            from 8:00 a.m. to 8:00 p.m. and Saturdays from 8:00 a.m. to 5:00
            p.m.
          </p>
        </div>
        <div className="contact-card">
          <h2>Loan Support</h2>
          <p>
            For questions about auto loans, personal loans, home loans, or
            homeowner loans, call our Customer Service Center at (888) 816-8064
            or log in to Online Banking to chat with an agent. Service hours are
            Monday to Friday from 8:00 a.m. to 8:00 p.m. and Saturdays from 8:00
            a.m. to 5:00 p.m.
          </p>
        </div>
        <div className="contact-card">
          <h2>Fraud</h2>
          <p>
            To respond to Fraud Detection, reply to the text message you
            received. Note: Fraud detection messages should only ask you to
            verify the validity of a transaction; City will never request login
            credentials or passwords.
          </p>
          <p>
            To report fraud on your account, contact your local branch or our
            Customer Service Center at (888) 816-8064. Service hours are Monday
            to Friday from 8:00 a.m. to 8:00 p.m. and Saturdays from 8:00 a.m.
            to 5:00 p.m.
          </p>
        </div>
      </section>
    </div>
  );
};
