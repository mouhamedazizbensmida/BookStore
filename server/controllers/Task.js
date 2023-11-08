import Task from "../models/Task.js";

/*Add One Task*/
export const AddTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({ Task: newTask, message: "Task added with success" });
  } catch (e) {
    res.status(400).json({
      e: e.message,
      message: "Task Not Added",
    });
  }
};

/*Find All Tasks*/
export const FindAllTasks = async (req, res) => {
  try {
    const userId = req.auth.userId;
    console.log(userId);
    const Tasks = await Task.find();

    if (!Tasks || Tasks.length === 0) {
      return res.status(404).json({ message: "Tasks Not Found" });
    }

    res.status(200).json({
      Tasks: Tasks,
      message: "Tasks Founded!!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "We can't fetch Tasks",
    });
  }
};

/*Find One Task*/
export const FindOneTask = async (req, res) => {
  try {
    const tasks = await Task.findOne({ _id: req.params.id });

    if (!tasks) {
      return res.status(404).json({ message: "Tasks Not Found" });
    }

    res.status(200).json({
      Tasks: tasks,
      message: "Tasks Founded!!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "We can't fetch Tasks",
    });
  }
};

/*Update One Task*/
export const UpdateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Tasks Not Found" });
    }

    res.status(200).json({
      Task: task,
      message: "Task Updated!!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "We can't Update Tasks",
    });
  }
};

/*Delete One Task*/
export const DeleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({
          message: "The Task Was Not Found To Be Deleted. Try Another ID",
        });
}

    await Task.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Task Deleted With Success" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "We can't Update Tasks",
    });
  }
};
