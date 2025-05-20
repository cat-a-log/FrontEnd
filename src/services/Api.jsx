export const postAPI = async (endpoint, body = null) => {
  const response = await fetch("http://localhost:8080/api" + endpoint, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (response.status === 400) {
    return {
      error: true, 
      response:await response.json(),
    }
  
  }
  if (!response.ok) {
    throw new Error("Something went wrong");

  }

   return {
      error: false, 
      response:await response.json(),
    } 
  }

export const getAPI = async (endpoint) => {
  const response = await fetch("http://localhost:8080/api" + endpoint, {
    method: "GET",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  if (response.status !== 200) {
    return {}
  }

  return await response.json();
}

export const patchAPI = async (endpoint, body) => {
  const response = await fetch("http://localhost:8080/api" + endpoint,  {
    method: "PATCH",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (response.status === 400) {
    return {
      error: true, 
      response:await response.json(),
    }
  
  }
  if (!response.ok) {
    throw new Error("Something went wrong");

  }

   return {
      error: false, 
      response:await response.json(),
    } 
  }

export const deleteAPI = async (endpoint) => {
  const response = await fetch("http://localhost:8080/api" + endpoint, {
    method: "DELETE",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
}
