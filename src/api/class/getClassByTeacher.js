export const getClassByTeacher = async (token, id) => {
  const response = await fetch(
    `https://utf-api.tashima.space/Class/FilterByTeacherId/${id}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
