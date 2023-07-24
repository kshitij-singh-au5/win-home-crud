import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { steps } from "../constant";

const AddTask = ({
  tasks,
  setTasks,
  show,
  setStep,
  updating,
  setUpdating,
  currentTask,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ColorButton = styled(Button)(() => ({
    color: "#FFFFFF",
    borderRadius: "37px",
    width: "177px",
    backgroundColor: "#005981",
    "&:hover": {
      backgroundColor: "#005981",
    },
  }));

  useEffect(() => {
    if (updating) {
      const current = tasks[currentTask];
      setTitle(current?.title);
      setDescription(current?.description);
    }
  }, [updating]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (!updating) {
      const newEntry = {
        title: title,
        description: description,
        isDone: false,
      };
      const newTasks = [...tasks, newEntry];
      setTasks(newTasks);
      setTitle("");
      setDescription("");
      setStep(steps.TaskList);
    } else {
      const newTask = tasks.map((ele, i) => {
        if (i === currentTask) {
          ele.title = title;
          ele.description = description;
          ele.isDone = false;
        }
        return ele;
      });
      setTasks(newTask);
      setTitle("");
      setDescription("");
      setUpdating(false);
      setStep(steps.TaskList);
    }
  };

  return (
    show && (
      <Box display={"flex"} flexDirection={"column"}>
        <TextField
          id="outlined-textarea"
          label="Title"
          placeholder="Title"
          multiline
          sx={{ boxShadow: 2, backgroundColor: "#FFFFFF", mb: 3 }}
          onChange={handleTitle}
          value={title}
        />
        <TextField
          id="outlined-textarea"
          label="Description"
          placeholder="Description"
          multiline
          rows={4}
          sx={{ boxShadow: 2, backgroundColor: "#FFFFFF", mb: 3 }}
          onChange={handleDescription}
          value={description}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <ColorButton
            variant="contained"
            onClick={handleSubmit}
            disabled={!title || !description}
          >
            Submit
          </ColorButton>
        </Box>
      </Box>
    )
  );
};

export default AddTask;
