import React from "react";

const Index = () => {
  return (
    <div>
      <header>
        <h1>Hi, I am Marco Zammuto</h1>
        <h2>I am Full Stack Developer and Musician</h2>
      </header>

      <main>
        <h2>How can I help you?</h2>
        <section>
          <section id="music-wrap">
            <h3>Double Bass</h3>
            <p>Explore my musical journey as a Double Bass player.</p>
            <button>
              Visit Music Page
            </button>
          </section>

          <section id="programming-wrap">
            <h3>Web Development</h3>
            <p>Discover my portfolio and web development projects.</p>
            <button>
              View Portfolio
            </button>
          </section>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Giuseppe Marco Zammuto</p>
      </footer>
    </div>
  );
};

export default Index;
