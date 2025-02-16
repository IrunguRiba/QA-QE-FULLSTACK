const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];
  //I FIRST MAP THE DATES AND RETURN THE LAST 7 Days posts
  const oneWeekPosts = users.map((user) => {
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7)); // these are one week ago posts
  
   // AND THEN I Filtered posts made in the last week
    const postsInTheLastWeek = user.posts.filter(post => {
const postDate = new Date(post.timestamp);
 return postDate >= oneWeekAgo;
    });
    return {
 name: user.name,
  oneWeekPosts: postsInTheLastWeek
    };
  });
  console.log(oneWeekPosts);
  //USERS WITH LESS THAN 10 LIKES
  
  const tenLikes = users.map((user) => {
const under10Likes = user.posts.filter(post => post.likes <= 10);
    return {
name: user.name,
    under10Likes,
    };
  }).filter(user => user.under10Likes>0); // Keep only users with posts under 10 likes
  console.log(tenLikes);
  