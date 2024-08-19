export const getTeacher = async (token) => {
  const response = await fetch("https://utf-api.tashima.space/Teacher", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
