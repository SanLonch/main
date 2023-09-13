let reviewData = {};
let reviewArray = [];
let reviewObject = [];
let reviewsList;
let reviewForm;
let stars;
let starRating = null;
let isUpdatedReviewId = null;

function initStarRating() {
  stars = document.querySelectorAll(".star span");

  console.log(stars);

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      console.log(star.attributes["data-id"].value);
      starRating = parseInt(star.attributes["data-id"].value);
      reviewData.starRating = starRating;

      stars.forEach((star) => {
        star.classList.remove("checked");
      });

      for (let i = 0; i < starRating; i++) {
        stars[i].classList.add("checked");
      }
    });
  });
}

function handleInvalidData() {
  alert("Please, enter your review");
}

function appendReviews(review) {
  reviewsList.innerHTML = `
          <div class="review" data-id="${review.id}">
            <h4>${review.username}</h4>
            <span class="fa fa-star ${
              review.starRating >= 1 ? "checked" : ""
            }"></span>
            <span class="fa fa-star ${
              review.starRating >= 2 ? "checked" : ""
            }"></span>
            <span class="fa fa-star ${
              review.starRating >= 3 ? "checked" : ""
            }"></span>
            <span class="fa fa-star ${
              review.starRating >= 4 ? "checked" : ""
            }"></span>
            <span class="fa fa-star ${
              review.starRating >= 5 ? "checked" : ""
            }"></span>
            <p>${review.userReview}</p>

            <button type="button" class="btn btn-outline-danger btn-delete">Delete</button>
            <button type="button" class="btn btn-outline-warning btn-update">Update</button>

          </div>
        ` + reviewsList.innerHTML;

    let reviewsDeleteButtons = document.querySelectorAll('.review .btn-delete');
    let reviewsUpdateButtons = document.querySelectorAll('.review .btn-update');

    reviewsDeleteButtons.forEach((button) => {
      button.addEventListener('click', () => {
        deleteReview(button.parentNode.attributes['data-id'].value);
      });
    });

    reviewsUpdateButtons.forEach((button) => {
      button.addEventListener('click', () => {
        resetForm();
        isUpdatedReviewId = button.parentNode.attributes['data-id'].value;

        console.log(reviewObject[isUpdatedReviewId]);
        reviewData = {
          ...reviewObject[isUpdatedReviewId]
        };

        for (let i = 0; i < reviewObject[isUpdatedReviewId].starRating; i++) {
          stars[i].classList.add("checked");
        }

        let username = document.querySelector("#username");
        let userReview = document.querySelector("#user-review");

        username.value = reviewObject[isUpdatedReviewId].username;
        userReview.value = reviewObject[isUpdatedReviewId].userReview;
      });
    });
}

function resetForm() {
  reviewForm.reset();
  stars.forEach((star) => {
    star.classList.remove("checked");
  });
  isUpdatedReviewId = null;
}

function getReview() {
  reviewsList = document.querySelector(".reviews-list");
  reviewArray = [];
  reviewsList.innerHTML = '';

  fetch(
    "https://rd-workshop-2-a05db-default-rtdb.europe-west1.firebasedatabase.app/reviews.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      reviewObject = json;
      let reviews = [];

      for (const key in json) {
        reviews.push({ ...json[key], id: key });
      }

      reviewArray = reviews;

      return reviews;
    })
    .then((reviews) => {
      reviews.forEach((review) => {
        appendReviews(review);
      });
    });
}

function sendData() {
  let username = document.querySelector("#username").value;
  let userReview = document.querySelector("#user-review").value;

  reviewData.username = username;
  reviewData.userReview = userReview;

  if (
    !reviewData.username ||
    !reviewData.userReview ||
    !reviewData.starRating
  ) {
    handleInvalidData();
  }

  if (isUpdatedReviewId) {
    updateReview(isUpdatedReviewId, reviewData);
  } else {
    sendReview();
  }
}

function sendReview() {
  fetch(
    "https://rd-workshop-2-a05db-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
    {
      method: "POST",
      body: JSON.stringify(reviewData),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      reviewArray.push(reviewData);
      appendReviews(reviewData);
      resetForm();
    });
} 

function deleteReview(id) {
  fetch(
    `https://rd-workshop-2-a05db-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`,
    {
      method: "DELETE"
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data === null) {
        document.querySelector(`.review[data-id="${id}"]`).remove();
      }
    });
}

function updateReview(id, data) {
  console.log(id);
  fetch(
    `https://rd-workshop-2-a05db-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(() => {
      resetForm();
      getReview();
    });
}

window.addEventListener("load", () => {
  let send = document.querySelector("#send-review");
  reviewForm = document.querySelector(".review-form");
  getReview();
  initStarRating();

  send.addEventListener("click", sendData);
});
