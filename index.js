const express = require("express");

const { users } = require("./Data/users.json");
// {users} here { } are helpfully when we call multiple arrays in the json file

const application = express();

const Port = 8081;

application.use(express.json());

// ------ Home Page ---------
application.get("/", (req, res) => {
  res.status(200).json({
    message: "Server started running",
  });
});

/**
 * Route : /users
 * Method : GET
 * Description : Get all users
 * Access : Public
 * Parameters : None
 */
// http://localhost:8081/user
application.get("/user", (req, res) => {
  res.status(200).json({
    success: true,
    Data: users, // This the Data: json File name
  });
});

/**
 * Route : /users/:id
 * Method : GET
 * Description : Get single user by their id
 * Access : Public
 * Parameters : Id
 */
// http://localhost:8081/user/4
application.get("/user/:id", (req, res) => {
  const { id } = req.params; // const id = req.params.id;
  const userDetail = users.find((each) => each.id === id);
  if (!userDetail) {
    return res.status(400).json({
      success: false,
      message: "User does not exist ....!", // This the Data: json File name
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "User found .... :-)",
      Data: userDetail,
    });
  }
});

/**
 * Route : /users
 * Method : GET
 * Description : Get single user by their id
 * Access : Public
 * Parameters : None
 */
application.post("/users", (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } =
    req.body;

  const newUser = users.find((each) => each.id === id);
  if (newUser) {
    res.status(404).json({
      success: false,
      message: "User with this is alreay exist",
    });
  }
  users.push({
    id,
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });
  return res.status(201).json({
    success: true,
    message: "User got Updated successfully",
    // Data: newUser, [just the above content is displayed]
    Data: users, // [The above content and the content we added is displayed]
  });
});

/**
 * Route : /users/:id
 * Method : PUT
 * Description : Update user by their id
 * Access : Public
 * Parameters : id
 */
application.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const userDetail = users.find((each) => each.id === id);
  if (!userDetail) {
    return res.status(400).json({
      success: false,
      message: "User does not exist ....!",
    });
  }
  const updateUser = users.map((each) => {
    if (each.id === id) {
      return {
        ...each, // indicates each element or key in a body
        ...data, // indicates the data in the body
      };
    }
    return each;
  });
  return res.status(201).json({
    success: true,
    message: "User updated ....!",
    data: updateUser,
  });
});

/**
 * Route : /users/:id
 * Method : DELETE
 * Description : Delete user using id
 * Access : Public
 * Parameters : id
 */
application.delete("users/:id", (req, res) => {
  const { id } = req.params;

  const userDetail = users.find((each) => each.id === id);
  if (!userDetail) {
    return res.status(400).json({
      success: false,
      message: "User does not exist ....!",
    });
  } else {
  }
});

// ------ Get all roots ---------
application.get("*", (req, res) => {
  res.status(404).json({
    message: "This root doesnot exist",
  });
});

application.listen(Port, () => {
  console.log(`Server is running on the Port ${Port}`);
});
