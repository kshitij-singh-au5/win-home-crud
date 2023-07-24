import { Box, Typography, Avatar } from "@mui/material";
import { steps } from "../constant";
import backIcon from "../assets/left-arrow.svg";
import editIcon from "../assets/edit-icon.svg";
import deleteIcon from "../assets/delete-small.svg";

const ViewTask = ({
  tasks,
  setTasks,
  show,
  setStep,
  currentTask,
  setUpdating,
}) => {
  const current = tasks[currentTask];

  const handleBack = () => {
    setStep(steps.TaskList);
  };

  const handleEdit = (index) => {
    setUpdating(true);
    setStep(steps.AddTask);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setStep(steps.TaskList);
  };

  return (
    show && (
      <Box mt={6}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Title: {current.title}
        </Typography>
        <Typography variant="subtitle1">{current.description}</Typography>
        <Box display={"flex"} mt={8}>
          <Box
            display={"flex"}
            alignItems={"center"}
            mr={7}
            sx={{ cursor: "pointer" }}
            onClick={handleBack}
          >
            <Avatar sx={{ bgcolor: "#000000", width: "34px", height: "34px" }}>
              <img src={backIcon} alt="Back" />
            </Avatar>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Back
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mr={7}
            sx={{ cursor: "pointer" }}
            onClick={() => handleEdit(currentTask)}
          >
            <Avatar sx={{ bgcolor: "#005981", width: "34px", height: "34px" }}>
              <img src={editIcon} alt="Edit" />
            </Avatar>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Edit
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => handleDelete(currentTask)}
          >
            <Avatar sx={{ bgcolor: "#FF0000", width: "34px", height: "34px" }}>
              <img src={deleteIcon} alt="Delete" />
            </Avatar>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Delete
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default ViewTask;
