import React from "react";
import "./Newsletter.css";
import TextField from "@mui/material/TextField";

export default function Newsletter() {
  return (
    <div className="news-letter">
      <article>
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Get the latest updates and exclusive deals delivered straight to your
          inbox !
        </p>
      </article>

      <form>
        <TextField id="standard-basic" label="Email:" variant="standard" />
        <br />
        <button class="btn">Subscribe</button>
      </form>
    </div>
  );
}
