// CHANGE SIGNOUT URL IN THE NAVBAR BEFORE DEPLOYING

export const BASE_URL = "https://bookrevews-back-end.onrender.com/api";
// export const BASE_URL = "http://localhost:3000/api"



// Fetch All Books
export const fetchAllBooks = async () => {
  try {
    const nfResponse = await fetch(`${BASE_URL}/nonfiction-books`);
    const nfData = await nfResponse.json();




    const ficResponse = await fetch(`${BASE_URL}/fiction-books`);
    const ficData = await ficResponse.json();




    const gnResponse = await fetch(`${BASE_URL}/graphic-books`);
    const gnData = await gnResponse.json();




    const clubResponse = await fetch(`${BASE_URL}/book-club-picks`);
    const clubData = await clubResponse.json();




    const childResponse = await fetch(`${BASE_URL}/childrens-books`);
    const childData = await childResponse.json();




    const allBooks = [].concat(
      ...nfData,
      ...ficData,
      ...gnData,
      ...clubData,
      ...childData
    );




    return allBooks;
  } catch (error) {
    console.log(error);
  }
};


// Fetch Reviews
export const fetchReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews`);
    const data = await response.json();


    return data;
  } catch (error) {
    console.log(error);
  }
};


export const postComment = async ( userid, content, username, reviewid) => {
  try {
    const response = await fetch(`${BASE_URL}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userid, content, username, reviewid }),
    });


    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


// Fetches All Comments
export const fetchAllComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comments`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Delete Comment by id
export const deleteMyComment = async (userid, id) => {
  try {
    const response = await fetch(`${BASE_URL}/comments/${id}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.log(error)
  }
}

// Delete Review by Id
export const deleteMyReview = async (userid, id) => {

  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.log(error)
  }
}

// User login
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};



// User Registration
export const registerUser = async (username, password, email, name) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          email: email,
          name: name,
          is_admin: false,
        },
      }),
    });




    const result = await response.json();




    return result;
  } catch (error) {
    console.log(error);
  }
};




// Nonfiction Books
export const fetchNFBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/nonfiction-books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Fiction Books
export const fetchFictionBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fiction-books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Book Club Picks
export const fetchBookClubPicks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/book-club-picks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Children's Books
export const fetchChildrenBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/childrens-books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Graphic Novels and Manga
export const fetchGraphicNovels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/graphic-books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get User by Id
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`)
    const translatedData = await response.json();
   
    return translatedData;
  } catch (error) {
    console.log(error)
  }
}


// User Update
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Edit Comment
export const updateComment = async (id, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/comments/${id}`, {
      method: 'PUT',
      headers:  {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: updatedData})
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error)
  }
}

// Update Review
export const updateReview = async (id, updatedData, score) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}`, {
      method: 'PUT',
      headers:  {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: updatedData, score})
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error)
  }
}

//Review Reporting
export const reportReview = async (id, isInappropriate, isNotAccurate) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}/report`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isInappropriate, isNotAccurate }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to report review');
    }
  } catch (error) {
    console.log(error);
  }
};


// Get all User Data
export const fetchAllBooksTable = async () => {
  try {
    const response = await fetch(`${BASE_URL}/allbooks`)
    const translatedData = await response.json();
    return translatedData;
  } catch (error) {
    console.log(error)
  }
}


// Get all User Data
export const fetchAllUserData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`)
    const translatedData = await response.json();
    return translatedData;
  } catch (error) {
    console.log(error)
  }
}





