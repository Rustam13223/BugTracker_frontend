import {
  Select,
  Option,
  Textarea,
  Typography,
  Button,
  Modal,
  Sheet,
} from "@mui/joy";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

// const workers = [
//   "qwerty@gmail.com",
//   "qwerty2@gmail.com",
//   "qwerty3@gmail.com",
//   "qwerty4@gmail.com",
// ];
// const severitys = ["Low", "Medium", "High"];

function SubmitIssuePage() {
  const [workers, setWorkers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [worker, setWorker] = useState();
  const [severity, setSeverity] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function get() {
      const workersRes = (await ApiService.getWorkers())
        .filter((item) => item.role === "programmer")
        .map((item) => item.email);

      setWorkers(["-", ...workersRes]);
    }
    get();
  }, []);

  async function submitIssue(title, description, worker, severity) {
    await ApiService.reportIssue(title, description, worker, severity);
    setOpen(true);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1000px",
        }}
      >
        <Typography sx={{ marginY: "15px" }} level="h2">
          Report
        </Typography>
        <Textarea
          sx={{ marginY: "15px" }}
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          sx={{ marginY: "15px" }}
          minRows={3}
          placeholder="Issue description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            marginBottom: "15px",
          }}
        >
          <Select
            sx={{ width: "100%" }}
            placeholder="Assigned to"
            value={worker}
            onChange={(e) => setWorker(e.target.innerText)}
          >
            {workers.map((worker) => (
              <Option key={worker} value={worker}>
                {worker}
              </Option>
            ))}
          </Select>
          <Select
            sx={{ width: "100%", marginLeft: "10px" }}
            placeholder="Severity"
            value={severity}
            onChange={(e) => {
              setSeverity(e.target.innerText);
            }}
          >
            <Option value="low">low</Option>
            <Option value="medium">medium</Option>
            <Option value="high">high</Option>
          </Select>
        </div>
        <Button
          fullWidth
          onClick={() => submitIssue(title, description, worker, severity)}
        >
          Submit issue
        </Button>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Issue submitted
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
}
export default SubmitIssuePage;
