import Dynamic from "./DynamicInline";
import External from "./External";
import Inline from "./Inline";
import Styled from "./styled";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h3
        style={{ color: "red", textAlign: "center", backgroundColor: "black" }}
      >
        Style in css
      </h3>
      <Inline />
      <Dynamic />
      <External />
      <hr />
      <UserProfile />
      <hr />
      <Styled />
    </div>
  );
}

export default App;
