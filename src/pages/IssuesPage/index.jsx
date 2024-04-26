import { Typography, Table } from "@mui/joy";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

function IssuesPage() {
  const [issuesList, setIssuesList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function get() {
      const issues = await ApiService.getIssues();
      setIssuesList([...issues]);
    }
    get();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: "25px",
        boxSizing: "border-box",
      }}
    >
      <Typography level="h1">Issues page</Typography>
      <Table
        stripe="odd"
        variant="soft"
        sx={{
          "& tr > *:not(:first-child)": { textAlign: "right" },
          borderRadius: "15px",
        }}
      >
        <thead
          style={{
            borderRadius: "15px",
          }}
        >
          <tr>
            <th style={{ width: "80px" }}>Issue ID</th>
            <th style={{ width: "30%", textAlign: "left" }}>Title</th>
            <th>Created</th>
            <th>Reporter</th>
            <th>Assigned to</th>
            <th style={{ width: "80px" }}>Status</th>
            <th style={{ width: "80px" }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          {issuesList.map((row) => (
            <tr key={row.id}>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/issues/${row.id}`)}
              >
                {row.id}
              </td>

              <td
                style={{ textAlign: "left", cursor: "pointer" }}
                onClick={() => navigate(`/issues/${row.id}`)}
              >
                {row.title}
              </td>
              <td style={{ overflow: "hidden" }}>
                {new Date(row.created).toLocaleString()}
              </td>
              <td style={{ overflow: "hidden" }}>{row.reporter}</td>
              <td style={{ overflow: "hidden" }}>{row.assigned_to}</td>
              <td style={{ overflow: "hidden" }}>{row.status}</td>
              <td style={{ overflow: "hidden" }}>{row.severity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {issuesList.length == 0 ? (
        <Typography level="h1">No issues</Typography>
      ) : (
        ""
      )}
    </div>
  );
}
export default IssuesPage;
