export const get = (url) => fetch(url, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  }
}).then(r => r.json());

export const post = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(r => r.json());

export const put = (url, data) => fetch(url, {
  method: 'PUT',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(r => r.json());

export const del = (url) => fetch(url, {
  method: 'DELETE',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  }
}).then(r => r.json());

