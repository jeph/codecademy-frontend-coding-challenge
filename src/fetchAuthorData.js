const authorEndpoint =
  "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json"

const fetchAuthorData = () => {
  const settings = {
    method: 'GET',
  }
  return fetch(authorEndpoint, settings).then(response => response.json())
}

export default fetchAuthorData;
