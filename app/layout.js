
import "../styles/globals.css";
import ArrayBubbles from "./utils/Bubbles";
import Navigate from "./Navigate/Navigate";
export default function RootLayout({ children, }) {
  return (
      <html>
        <body>
          <div className="bubbles">
            {ArrayBubbles.map(() => {
              return <div className="bubble"></div>;
            })}
          </div>
          {children}
        </body>
      </html>
  );
}
