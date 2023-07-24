import { Box, Typography, Button, Checkbox, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { steps } from "../constant";
import deleteIcon from "../assets/delete-icon.svg";

const TaskList = ({
  tasks,
  setTasks,
  show,
  setStep,
  setCurrentTask,
  updating,
  setUpdating,
}) => {
  const ColorButton = styled(Button)(() => ({
    color: "#FFFFFF",
    borderRadius: "27px",
    minWidth: "46px !important",
    height: "25px",
    marginRight: "18px",
    backgroundColor: "#005981",
    "&:hover": {
      backgroundColor: "#005981",
    },
    textTransform: "capitalize",
  }));

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleClick = (index) => {
    const newTasks = [...tasks];
    const isChecked = newTasks[index].isDone;
    newTasks[index].isDone = !isChecked;
    setTasks(newTasks);
  };

  const handleView = (index) => {
    setCurrentTask(index);
    setStep(steps.ViewTask);
  };

  const handleEdit = (index) => {
    setCurrentTask(index);
    setUpdating(true);
    setStep(steps.AddTask);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    show && (
      <div>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Today's Tasks
        </Typography>
        {tasks &&
          tasks.map((item, index) => {
            return (
              <Box
                key={item?.description}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  boxShadow: 2,
                  pr: 4,
                  mb: 4,
                  py: 1,
                  borderRadius: "9px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Checkbox
                    {...label}
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{ color: "#005981", fontSize: 16 }}
                      />
                    }
                    checkedIcon={
                      <CheckCircleIcon
                        sx={{ color: "#005981", fontSize: 16 }}
                      />
                    }
                    checked={item?.isDone}
                    onClick={() => handleClick(index)}
                  />
                  <Typography variant="subtitle1">{item?.title}</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <ColorButton
                    variant="contained"
                    onClick={() => handleEdit(index)}
                  >
                    <Typography variant="subtitle2">Edit</Typography>
                  </ColorButton>
                  <ColorButton
                    variant="contained"
                    onClick={() => handleView(index)}
                  >
                    <Typography variant="subtitle2">View</Typography>
                  </ColorButton>
                  <Avatar
                    sx={{ bgcolor: "#D4A656", width: "34px", height: "34px" }}
                  >
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(index)}
                    />
                  </Avatar>
                </Box>
              </Box>
            );
          })}
      </div>
    )
  );
};

export default TaskList;
