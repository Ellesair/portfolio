import React from "react";

function contact() {
  return (
    <>
      <h2>Send me something!</h2>
      <form>
        <label>
          <input type="text" placeholder="Title"></input>
        </label>
        <label>
          <input type="text" placeholder="Your Name"></input>
        </label>
        <label>
          <textarea></textarea>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default contact;
