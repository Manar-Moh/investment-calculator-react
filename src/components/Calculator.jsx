import { UserInput } from "./UserInput";

export function Calculator({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          id="Initial"
          onChange={handleChange}
          val={userInput.Initial}
        />
        <UserInput
          label="Annual Investment"
          id="Annual"
          onChange={handleChange}
          val={userInput.Annual}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          id="Return"
          onChange={handleChange}
          val={userInput.Return}
        />
        <UserInput
          label="Duration"
          id="Duration"
          onChange={handleChange}
          val={userInput.Duration}
        />
      </div>
    </section>
  );
}
