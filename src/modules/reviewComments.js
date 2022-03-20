export const reviewComments = () => {
  const reviewContainer = document.querySelector(".comments-container");

  const createComment = ({ nameWho, avatarPath, commentText }) => {
    const comment = document.createElement("div");
    comment.classList.add("comment-item");
    comment.classList.add("row");
    return `<div class="col-xs-3 col-sm-2">
                <div class="review-user">
                  <img src="${avatarPath ? avatarPath : "images/avatar.svg"}" alt="" class="img-responsive avatar" />
                </div>
              </div>
              <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-green review-arrow review-arrow-left">
                  <p class="text-normal">${nameWho ? nameWho : ""}</p>
                  <p>
                    ${
                      commentText
                        ? commentText
                        : `
  <div class="sk-three-bounce">
    <div class="sk-bounce-1 sk-child"></div>
    <div class="sk-bounce-2 sk-child"></div>
    <div class="sk-bounce-3 sk-child"></div>
  </div>
  `
                    }
                    
                  </p>
                </div>
              </div>`;
  };

  reviewContainer.innerHTML = createComment({});
  console.log(reviewContainer);
  fetch("comments.json")
    .then((resp) => {
      console.log(resp);
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`${resp.url} - ${resp.statusText}(${resp.status})`);
      }
    })
    .then((data) => {
      //reviewContainer.innerHTML = "reviewContainer.innerHTML";
      console.log(data);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
