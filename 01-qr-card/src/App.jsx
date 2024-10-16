import "./global.css";
import { Card } from "./components/Card";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Card />
    </div>
  );
}

export default App;
