import { useEffect, useState } from "react";
import "./Pagination.css"

function Pagination() {
  const [tableData, setTableData] = useState({ users: [], total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage] = useState(9);

  const indexOfLastItem = currentPage * rowPerPage;
  const indexOfFirstItem = indexOfLastItem - rowPerPage;
  const currentItems = tableData.users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.total / rowPerPage);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users?limit=0");
    const data = await res.json();
    setTableData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePre = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Users</h1>

      <div className="row">
        {currentItems.map((user) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <button onClick={handlePre} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}

          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
