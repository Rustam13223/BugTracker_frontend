import { Typography, Card, CardOverflow, CardContent, Button } from "@mui/joy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

function IssuePage() {
  const params = useParams();
  const [issueData, setIssueData] = useState();

  useEffect(() => {
    async function get() {
      const issue = await ApiService.getIssue(params.issueId);
      setIssueData(issue);
    }
    get();
  }, [params.issueId]);
  if (!issueData) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px",
        boxSizing: "border-box",
      }}
    >
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: "center",
          maxWidth: "100%",
          resize: "horizontal",
        }}
      >
        <CardOverflow
          variant="solid"
          color="primary"
          sx={{
            flex: "0 0 200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: "var(--Card-padding)",
          }}
        >
          <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
            {params.issueId}
          </Typography>
          <Typography textColor="primary.100">Issue ID</Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5 }}>
            {issueData.status}
          </Typography>
        </CardOverflow>
        <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
          <CardContent>
            <Typography level="title-lg">{issueData.title}</Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5 }}>
              {issueData.description}
            </Typography>
          </CardContent>
          <div
            style={{
              display: "flex",

              alignItems: "center",
              padding: "25px",
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button
                variant="soft"
                color="success"
                sx={{
                  "--variant-borderWidth": "2px",
                  borderRadius: 40,
                  borderColor: "primary.500",
                  mx: "10px",
                }}
              >
                Done
              </Button>
              <Button
                variant="soft"
                color="warning"
                sx={{
                  "--variant-borderWidth": "2px",
                  borderRadius: 40,
                  borderColor: "primary.500",
                  mx: "10px",
                }}
              >
                In progress
              </Button>
              <Button
                variant="soft"
                color="neutral"
                sx={{
                  "--variant-borderWidth": "2px",
                  borderRadius: 40,
                  borderColor: "primary.500",
                  mx: "10px",
                }}
              >
                Close
              </Button>
            </div>
            <div>
              <Typography fontSize="sm" sx={{ mx: "10px" }}>
                {new Date(issueData.created).toLocaleString()}
              </Typography>
              <Typography fontSize="sm" sx={{ mx: "10px" }}>
                Assigned to: {issueData.assigned_to}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default IssuePage;
