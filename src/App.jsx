import "./pagination.css";
import Pagination from "./Pagination";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        total={400}
        limit={20}  
        onPageChanage={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
