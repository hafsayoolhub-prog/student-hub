const API_URL = "http://localhost:5000/assignments";

export async function getAssignments(params = "") {
  const res = await fetch(`${API_URL}${params}`);
  if (!res.ok) throw new Error("Failed inuu update sameeyo");
  return res.json();
}

export async function getAssignmentById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed inuu update sameeyo");
  return res.json();
}

export async function addAssignment(data) {
  const res = await fetch("${API_URL}", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed in xog lagu daro appka");
  return res.json();
}

export async function updateAssignment(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed inuu update sameeyo");
  return res.json();
}

export async function deleteAssignment(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete the assignment");
  return true;
}
