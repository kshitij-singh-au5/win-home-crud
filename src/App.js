import { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Header from "./components/header";
import AddTask from "./components/add-task";
import { steps } from "./constant";
import TaskList from "./components/tasks-list";
import ViewTask from "./components/view-task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [step, setStep] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  const [updating, setUpdating] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
          <Header step={step} setStep={setStep} />
          <div style={{ height: "135px" }} />
          <Box px={{ xs: 2, sm: 10 }} py={{ xs: 2, sm: 4 }}>
            <AddTask
              show={step === steps.AddTask}
              step={step}
              setStep={setStep}
              tasks={tasks}
              setTasks={setTasks}
              currentTask={currentTask}
              setCurrentTask={setCurrentTask}
              updating={updating}
              setUpdating={setUpdating}
            />
            <TaskList
              show={step === steps.TaskList}
              step={step}
              setStep={setStep}
              tasks={tasks}
              setTasks={setTasks}
              currentTask={currentTask}
              setCurrentTask={setCurrentTask}
              updating={updating}
              setUpdating={setUpdating}
            />
            <ViewTask
              show={step === steps.ViewTask}
              step={step}
              setStep={setStep}
              tasks={tasks}
              setTasks={setTasks}
              currentTask={currentTask}
              setCurrentTask={setCurrentTask}
              updating={updating}
              setUpdating={setUpdating}
            />
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
