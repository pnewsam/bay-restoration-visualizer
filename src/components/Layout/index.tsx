import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const text = {
  title: "Bay Area Bay Restoration",
};

export const Layout = ({ children }: Props) => (
  <div>
    <main>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <p className="title">{text.title}</p>
          </div>
        </div>
      </section>
    </main>
    {children}
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>Made with ❤️ by Paul Newsam.</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
