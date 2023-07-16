import "../styles/globals.css";
import ArrayBubbles from "./utils/Bubbles";
import Navigate from "./Navigate/Navigate";
export default function RootLayout({ children, session }) {
  return (
      <html>
        <body>
          <div className="bubbles">
            {ArrayBubbles.map(() => {
              return <div className="bubble"></div>;
            })}
          </div>
          <Navigate />
          {children}
        </body>
      </html>
  );
}
