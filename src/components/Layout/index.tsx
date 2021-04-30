import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div>
    <main>{children}</main>
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
