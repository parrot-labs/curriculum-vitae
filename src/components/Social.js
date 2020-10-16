import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">

        <a
          href="https://github.com/parrot-labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/cornelaja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/lius.stroo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cornelius-situmorang-12135a1b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}

export default Social;
