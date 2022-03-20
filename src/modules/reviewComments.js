export const reviewComments = () => {
  const reviewContainer = document.querySelector(".comments-container");
  let currentComment = 0;
  let lastAppendedComment = {};
  console.dir(reviewContainer);

  const createComment = ({ nameWho, avatarPath, commentText, index }) => {
    const comment = document.createElement("div");
    comment.classList.add("comment-item");
    comment.classList.add("row");
    const colorIndex = +index % 3;
    const color = colorIndex < 2 ? (colorIndex === 0 ? "review-green" : "review-gray") : "review-orange";
    const avatarBlock = `
      <div class="col-xs-3 col-sm-2">
        <div class="review-user">
          <img src="${avatarPath}" alt="" class="img-responsive avatar" />
        </div>
      </div>
    `;
    const commentBlock = `
      <div class="col-xs-9 col-sm-9">
        <div class="review-inner ${color} review-arrow ${+index % 2 == 1 ? "review-arrow-left" : "review-arrow-right"}">
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
      </div>
      `;
    comment.innerHTML = +index % 2 == 1 ? avatarBlock + commentBlock : commentBlock + avatarBlock;
    reviewContainer.append(comment);
    return comment;
  };

  const createItem = (data) => {
    const dbIndex = currentComment % data.comments.length;
    const createdComment = createComment({
      nameWho: data.comments[dbIndex].author,
      avatarPath:
        data.comments[dbIndex].image !== "" ? `images/users/${data.comments[dbIndex].image}` : "images/avatar.svg",
      commentText: data.comments[dbIndex].comment,
      index: currentComment + 1,
    });
    currentComment++;
    return createdComment;
  };

  reviewContainer.innerHTML = "";
  createComment({});

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
      reviewContainer.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        lastAppendedComment = createItem(data);
      }

      setInterval(() => {
        reviewContainer.querySelectorAll(".comment-item")[0].remove();
        lastAppendedComment.classList.add("review-margin-bottom");
        lastAppendedComment = createItem(data);
      }, 20000);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
