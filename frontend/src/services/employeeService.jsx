const API = "http://localhost:8080/employees";

export const getEmployees = async () => {
  try {
    const response = await fetch(`${API}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postEmployee = async (newEmployee) => {
  try {
    await fetch(`${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
  } catch (err) {
    console.error(err);
  }
};

export const putEmployee = async (id, updatedEmployee) => {
  try {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    });
  } catch (err) {
    console.error(error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error(err);
  }
};
