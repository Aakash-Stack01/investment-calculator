export default function UserInput({getDetails, setInvestmentDetails}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={getDetails.initialInvestment}
            onChange={(event) =>
              setInvestmentDetails("initialInvestment", event.target.value)
            }
          ></input>
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={getDetails.annualInvestment}
            onChange={(event) =>
              setInvestmentDetails("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={getDetails.expReturn}
            onChange={(event) =>
              setInvestmentDetails("expReturn", event.target.value)
            }
          ></input>
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={getDetails.duration}
            onChange={(event) =>
              setInvestmentDetails("duration", event.target.value)
            }
          ></input>
        </p>
      </div>
    </section>
  );
}
