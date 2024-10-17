import Records from "./assets/posts.json";
import styles from "./assets/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Explore Our Latest Articles</h1>
      {Records && Records.length > 0 ? (
        Records.map((record) => (
          <div className={styles.box} key={record.id}>
            <strong>{record.Title}</strong>
            <br />
            {record.content}
            <br />
            <br />
          </div>
        ))
      ) : (
        <div>No records found.</div>
      )}
    </div>
  );
}

export default App;
