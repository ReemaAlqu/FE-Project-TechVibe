import React from 'react'
import "./Newsletter.css";

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
        <label>Email: </label>
        <input type="email" name="Enter your email address" />
        <button class="btn">Subscribe</button>
      </form>
    </div>
  );
}
