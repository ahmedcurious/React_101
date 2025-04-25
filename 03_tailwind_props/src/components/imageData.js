const giphyImages = [
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
  {
    text: "Excited Cat",
    imageLink: "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Evidance",
    imageLink:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnF4YWJidW1hOXJ2ZTJtZGYzNG1udDh0dDF6NjJhNWdrdXY3eWE4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Nq6L6m836paOHEjxy/giphy.gif",
  },
  {
    text: "Breaking News",
    imageLink:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xuazA4NHo5MGxvMGw2OTlnZzN4dTZvZG51YmwweXF5eDM2NnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zd0DYHlBmZTGaiIFRY/giphy.gif",
  },
  {
    text: "Pandya",
    imageLink:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXV5Njc0dWlnZ3JmdDV3NTJnYmd3NDZoc245MGpkZjN1ZmNqejRhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HDqnBKUyQvWuxYTj2f/giphy.gif",
  },
  {
    text: "Anime",
    imageLink:
      "https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g",
  },
];

export default giphyImages;
